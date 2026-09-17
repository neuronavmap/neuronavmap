import { useState } from 'react';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import ToggleMenu from '../components/ToggleMenu';
import '../App.css'


export default function App() {

  const [participants, setParticipants] = useState(Array(10).fill(true));
  const [trials, setTrials] = useState(Array(3).fill(true));
  const [layers, setLayers] = useState(Array(7).fill(true));
  const [baseMap, setBaseMap] = useState(true);

  function randomSampler(list, setList) {
    // k: how many items to choose from list
    const k = Math.ceil(Math.random() * list.length);
    if (k === list.length) {
      setList(Array(list.length).fill(true));
      return;
    }

    const newList = Array(list.length).fill(false);
    if (k < 2) { // choose 1 item
      newList[Math.floor(Math.random() * list.length)] = true;
    } else {
      let count = 0;
      while (count < k) {
        const i = Math.floor(Math.random() * list.length);
        if (!newList[i]) {
          newList[i] = true;
          count++;
        }
      }
    }
    setList(newList);
  }

  function updateLayers(type, index, value) {
    if (type === "ALL_P") {
      setParticipants(Array(10).fill(value))
    } else if (type === "ALL_T") {
      setTrials(Array(3).fill(value));
    } else if (type === "ALL_L") {
      setLayers(Array(7).fill(value));
    } else if (type === "M") {
      setBaseMap(!baseMap);
    } else if (type === "R") {
      randomSampler(participants, setParticipants);
      randomSampler(trials, setTrials);
      randomSampler(layers, setLayers);
    }

    if (type === "P") {
      let updatedParticipants = participants.slice();
      updatedParticipants[index] = value;
      setParticipants(updatedParticipants);
    } else if (type === "T") {
      let updatedTrials = trials.slice();
      updatedTrials[index] = value;
      setTrials(updatedTrials);
    } else if (type === "L") {
      let updatedLayers = layers.slice();
      updatedLayers[index] = value;
      setLayers(updatedLayers);
    }
  }
  
  return (
    <div>
      <Header />

      <Navbar />

      <main id="map-container">
        <div>
          <img id="legend" src="/MAPPING LEGEND.png" alt="Description of map components" />
        </div>

        <Map 
          participants={participants}
          trials={trials}
          layers={layers}
          baseMap={baseMap}
        />

        <ToggleMenu 
          updateFunction={updateLayers}
          participants={participants}
          trials={trials}
          layers={layers}
          baseMap={baseMap}
        />
      </main>
    </div>
  );
}
  