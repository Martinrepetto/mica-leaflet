import { Fragment, useEffect, useState } from "react";
import { redIcon, blueIcon, yellowIcon, greenIcon } from "../util/icons";
import Control from "react-leaflet-custom-control";
import {
  YearValues,
  handleChangeEnd,
  handleChangeStart,
} from "./handleTimeChange";
import store from "../util/store";

const json_data = require("../data.json");
const { Marker, Popup } = require("react-leaflet");

function RedMarkers() {
  const initialMarkers = [[0, 0]];
  const [redmarkers, setRedMarkers] = useState(initialMarkers);
  const [yeargap, setYearGap] = useState([1810, 1982]);
  store.subscribe(() => {
    setYearGap(store.getState().time);
  });

  useEffect(() => {
    setRedMarkers([]);
    for (let i in json_data) {
      if (json_data[i].Group === "Rojo") {
        if (
          json_data[i].Year >= yeargap[0] &&
          json_data[i].Year <= yeargap[1]
        ) {
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
    }
  }, [yeargap]);

  return <Fragment>{redmarkers}</Fragment>;
}
function BlueMarkers() {
  const initialMarkers = [[0, 0]];

  const [yeargap, setYearGap] = useState([1810, 1982]);
  store.subscribe(() => {
    setYearGap(store.getState().time);
  });
  const [bluemarkers, setBlueMarkers] = useState(initialMarkers);
  useEffect(() => {
    setBlueMarkers([])
    for (let i in json_data) {
      if (json_data[i].Group === "Azul") {
        if (
          json_data[i].Year >= yeargap[0] &&
          json_data[i].Year <= yeargap[1]
        ) {
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
    }
  }, [yeargap]);

  return <Fragment>{bluemarkers}</Fragment>;
}
function YellowMarkers() {
  const initialMarkers = [[0, 0]];
  const [yeargap, setYearGap] = useState([1810, 1982]);
  store.subscribe(() => {
    setYearGap(store.getState().time);
  });
  const [yellowmarkers, setYellowMarkers] = useState(initialMarkers);
  useEffect(() => {
    setYellowMarkers([])
    for (let i in json_data) {
      if (json_data[i].Group === "Amarillo") {
        if (
          json_data[i].Year >= yeargap[0] &&
          json_data[i].Year <= yeargap[1]
        ) {
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
    }
  }, [yeargap]);

  return <Fragment>{yellowmarkers}</Fragment>;
}

function GreenMarkers() {
  const initialMarkers = [[0, 0]];
  const [yeargap, setYearGap] = useState([1810, 1982]);
  store.subscribe(() => {
    setYearGap(store.getState().time);
  });
  const [greenmarkers, setGreenMarkers] = useState(initialMarkers);
  useEffect(() => {
    setGreenMarkers([])
    for (let i in json_data) {
      if (json_data[i].Group === "Verde") {
        if (
          json_data[i].Year >= yeargap[0] &&
          json_data[i].Year <= yeargap[1]
        ) {
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
    }
  }, [yeargap]);

  return <Fragment>{greenmarkers}</Fragment>;
}

export { RedMarkers, BlueMarkers, YellowMarkers, GreenMarkers };
