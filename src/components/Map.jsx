import mergeImages from 'merge-images';
import participant_data from "/src/assets/participant_data.json"


export default function Map({ participants, trials, layers, baseMap }) {
  // Participant IDs numbered 0-9
  // Trials numbered 1-3
  // Layers numbered 1-7

  let opacity = 1.0;
  let p_count = participants.reduce((total, x) => total+x, 0);
  let t_count = trials.reduce((total, x) => total+x, 0);
  let l_count = layers.reduce((total, x) => total+x, 0);

  if (p_count === 10 && t_count === 3 && l_count === 7) {
    // all (P/T/L)
    opacity = 0.4;
  } else if (p_count === 1 && t_count === 1 && l_count === 7) {
    // 1P / 1T / all L
    opacity = 0.8;
  } else if (p_count === 1 && t_count === 1 && l_count === 1) {
    // 1P / 1T / 1L
    opacity = 1;
  } else if (
      (p_count === 1 && t_count > 1 && l_count === 7) ||
      (p_count > 1 && t_count === 1 && l_count === 7)
    ) {
    //     1P / >1T / all L
    // OR >1P /  1T / all L
    opacity = 0.6;
  } else if (
      (p_count >= 1 && t_count >= 1 && l_count === 1) ||
      (p_count === 1 && t_count >= 1 && l_count >= 1)
   ) {
    //    at least 1 (P & T) / 1L
    // OR 1P / at least 1 (T & L)
    opacity = 0.6;
  } else if (p_count > 1 && t_count >= 1 && l_count > 1) {
    // >1P / at least 1T / >1L
    opacity = 0.5;
  } else {
    opacity = 1;
  }
  
  let imageList = [];
  let isDataUnavailable = false; // some map layers are missing due to lack of data
  let allLayers = false;
  if (p_count === 10 && t_count === 3 && l_count === 7) {
    // use a static image when all 196 layers are selected, speeds up initial website loading
    allLayers = true;
  } else {
    layers.map((layer, l_num) => {
      // LAYER
      if (layer) {
        // PARTICIPANT
        return participants.map((participant, p_num) => {
          if (participant) {
            // TRIAL 
            return trials.map((trial, t_num) => {
              if (trial) {
                if (l_num === 6) {
                  if (
                    p_num === 0 || 
                    (p_num === 1 && t_num === 2) || 
                    (p_num === 2 && t_num) ||
                    (p_num === 3 && t_num) ||
                    (p_num === 5 && t_num === 2) || 
                    p_num === 7 || 
                    (p_num === 9 && t_num === 0) 
                  ) {
                      isDataUnavailable = true;
                      return;
                  }
                } else if (l_num === 5 && t_num === 0 && p_num === 6) {
                  isDataUnavailable = true;
                  return;
                }

                imageList.push(
                  {
                    src: `/PMaps/P${p_num}/P${p_num}_T${t_num + 1}/P${p_num}_T${t_num + 1}_L${l_num + 1}.png`,
                    opacity: opacity
                  }
                );
              }
            });
          }
        });
      }
    });
  }

  // for individual participants and trials, there are:
  // familiarity scores, i.e. how familiar the participant is with that destination
  // navigation strategies, i.e. what tools or strategies did the participant use?
  let pData = null;
  if (p_count === 1 && t_count === 1) {
    const p_num = participants.indexOf(true);
    const t_num = trials.indexOf(true);
    pData = (
      <div id="map-caption">
        <p>{`DESTINATION FAMILIARITY: ${participant_data[p_num][t_num]["fam"]}/5`}</p>
        <p>{`NAVIGATION STRATEGIES: ${participant_data[p_num][t_num]["nav"]}`}</p>
      </div>
    );
  }

  if (imageList.length) {
    mergeImages(imageList.slice()).then(b64 => document.getElementById("merged-layers").src = b64);
  }

  return (
    <div id="map">
      <img style={baseMap ? {} : {opacity: 0}} src="/BASE MAP.png" alt="Base map" />
      {imageList.length ? (
          <img
            id="merged-layers"
            src="/"
            alt="Map layers"
          />
        ) : allLayers ? (
          <img
            id="merged-layers"
            src="/all-layers.png"
            alt="Map layers"
          />
        ) : null
      }
      {
        (!imageList.length && isDataUnavailable) ? (
          <div id="map-caption">
            <p>No data to display.</p>
          </div>
        ) : (p_count === 1 && t_count === 1) ? (
          pData
        ) : null
      }
    </div>
  );
}
