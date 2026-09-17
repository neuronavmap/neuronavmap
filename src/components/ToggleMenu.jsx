function Toggle({ onToggleChange, type, index, value, labelName }) {

  return (
    <div className={`toggle ${labelName && "row-toggle"}`}>
      {
        // only for toggles with a label/title next to the slider switch
        labelName && <p>{labelName}</p>
      }
      <label className="switch">
        <input 
          type="checkbox" 
          checked={value}
          onChange={() => onToggleChange(type, index, !value)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

function Button({ onClick, type, index, value, labelName }) {
  // only actually used for the randomizer
  return (
    <div className="row-button">
      <button onClick={() => onClick(type, index, value)}>{labelName}</button>
    </div>
  )
}

export default function ToggleMenu({ updateFunction, participants, trials, layers, baseMap }) {

  // Toggles for all and individual participants/trials/layers, as well as for the map background
  // type, index, and value props correspond to arguments of updateLayers() in the App component
  return (
    <div id="menu">
      <p>Map</p>
      <Toggle onToggleChange={updateFunction} type="M" index={-1} value={baseMap} labelName="" />
      {/* Randomize layers */}
      <Button onClick={updateFunction} type="R" index={-1} value={-1} labelName="Randomize!" />
      <p>All Participants</p>
      <Toggle onToggleChange={updateFunction} type="ALL_P" index={-1} value={participants.every(p => p)} labelName="" />
      {/* Individual participants */}
      <Toggle onToggleChange={updateFunction} type="P" index={0} value={participants[0]} labelName="P1" />
      <Toggle onToggleChange={updateFunction} type="P" index={1} value={participants[1]} labelName="P2" />
      <Toggle onToggleChange={updateFunction} type="P" index={2} value={participants[2]} labelName="P3" />
      <Toggle onToggleChange={updateFunction} type="P" index={3} value={participants[3]} labelName="P4" />
      <Toggle onToggleChange={updateFunction} type="P" index={4} value={participants[4]} labelName="P5" />
      <Toggle onToggleChange={updateFunction} type="P" index={5} value={participants[5]} labelName="P6" />
      <Toggle onToggleChange={updateFunction} type="P" index={6} value={participants[6]} labelName="P7" />
      <Toggle onToggleChange={updateFunction} type="P" index={7} value={participants[7]} labelName="P8" />
      <Toggle onToggleChange={updateFunction} type="P" index={8} value={participants[8]} labelName="P9" />
      <Toggle onToggleChange={updateFunction} type="P" index={9} value={participants[9]} labelName="P10" />
      <p>All Trials</p>
      <Toggle onToggleChange={updateFunction} type="ALL_T" index={-1} value={trials.every(t => t)} labelName="" />
      {/* Individual trials */}
      <Toggle onToggleChange={updateFunction} type="T" index={0} value={trials[0]} labelName="T1" />
      <Toggle onToggleChange={updateFunction} type="T" index={1} value={trials[1]} labelName="T2" />
      <Toggle onToggleChange={updateFunction} type="T" index={2} value={trials[2]} labelName="T3" />
      <p>All Layers</p>
      <Toggle onToggleChange={updateFunction} type="ALL_L" index={-1} value={layers.every(l => l)} labelName="" />
      <p>Sensory</p>
      <Toggle onToggleChange={updateFunction} type="L" index={0} value={layers[0]} labelName="" />
      <p>Emotion</p>
      <Toggle onToggleChange={updateFunction} type="L" index={1} value={layers[1]} labelName="" />
      <p>Route</p>
      <Toggle onToggleChange={updateFunction} type="L" index={2} value={layers[2]} labelName="" />   
      <p>Navigation</p>
      <Toggle onToggleChange={updateFunction} type="L" index={3} value={layers[3]} labelName="" />
      <p>Biometrics</p>
      <Toggle onToggleChange={updateFunction} type="L" index={4} value={layers[4]} labelName="" />
      <p>Gaze</p>
      <Toggle onToggleChange={updateFunction} type="L" index={5} value={layers[5]} labelName="" />   
      <p>Somatic</p>
      <Toggle onToggleChange={updateFunction} type="L" index={6} value={layers[6]} labelName="" />    
      <span></span>
    </div>
  );
}

