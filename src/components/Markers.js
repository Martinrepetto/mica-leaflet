import { Fragment, useEffect, useState } from "react";
import { redIcon, blueIcon, yellowIcon, greenIcon } from "../util/icons";

const json_data = require("../data.json");
const { Marker, Popup } = require("react-leaflet");

function RedMarkers() {
  const initialMarkers = [[0, 0]];
  const [redmarkers, setRedMarkers] = useState(initialMarkers);
  useEffect(() => {
    for (let i in json_data) {
      if (json_data[i].Group === "Rojo") {
        setRedMarkers((prevmarkers) => [
          ...prevmarkers,
          <Marker
            key={json_data[i].key}
            icon={redIcon}
            position={[json_data[i].Lat, json_data[i].Lng]}
          >
            <Popup>
              {json_data[i].Title} - {json_data[i].Year}
            </Popup>
          </Marker>,
        ]);
      }
    }
  }, []);

  return <Fragment>{redmarkers}</Fragment>;
}
function BlueMarkers() {
  const initialMarkers = [[0, 0]];
  const [bluemarkers, setBlueMarkers] = useState(initialMarkers);
  useEffect(() => {
    for (let i in json_data) {
      if (json_data[i].Group === "Azul") {
        setBlueMarkers((prevmarkers) => [
          ...prevmarkers,
          <Marker
            key={json_data[i].key}
            icon={blueIcon}
            position={[json_data[i].Lat, json_data[i].Lng]}
          >
            <Popup>
              {json_data[i].Title} - {json_data[i].Year}
            </Popup>
          </Marker>,
        ]);
      }
    }
  }, []);

  return <Fragment>{bluemarkers}</Fragment>;
}
function YellowMarkers() {
  const initialMarkers = [[0, 0]];
  const [yellowmarkers, setYellowMarkers] = useState(initialMarkers);
  useEffect(() => {
    for (let i in json_data) {
      if (json_data[i].Group === "Amarillo") {
        setYellowMarkers((prevmarkers) => [
          ...prevmarkers,
          <Marker
            key={json_data[i].key}
            icon={yellowIcon}
            position={[json_data[i].Lat, json_data[i].Lng]}
          >
            <Popup>
              {json_data[i].Title} - {json_data[i].Year}
            </Popup>
          </Marker>,
        ]);
      }
    }
  }, []);

  return <Fragment>{yellowmarkers}</Fragment>;
}

function GreenMarkers() {
  const initialMarkers = [[0, 0]];
  const [greenmarkers, setGreenMarkers] = useState(initialMarkers);
  useEffect(() => {
    for (let i in json_data) {
      if (json_data[i].Group === "Verde") {
        setGreenMarkers((prevmarkers) => [
          ...prevmarkers,
          <Marker
            key={json_data[i].key}
            icon={greenIcon}
            position={[json_data[i].Lat, json_data[i].Lng]}
          >
            <Popup>
              {json_data[i].Title} - {json_data[i].Year}
            </Popup>
          </Marker>,
        ]);
      }
    }
  }, []);

  return <Fragment>{greenmarkers}</Fragment>;
}

export { RedMarkers, BlueMarkers, YellowMarkers, GreenMarkers };
