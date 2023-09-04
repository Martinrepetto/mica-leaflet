import { LatLng } from "leaflet";
import { indexOf } from "lodash";
import { Fragment, useEffect, useState } from "react";

const json_data = require("../data.json");
const { Marker, Popup, useMapEvents } = require("react-leaflet");

function LocationMarkers() {
  const initialMarkers = [[0, 0]];
  const [markers, setMarkers] = useState(initialMarkers);

  useEffect(() => {
    for (let i in json_data) {
      console.log(json_data[i]);
      setMarkers((prevmarkers) => [
        ...prevmarkers,
        <Marker position={[json_data[i].Lat, json_data[i].Lng]}></Marker>,
      ]);
    }
  },[]);

  return (
    <Fragment>
      {markers}
    </Fragment>
  );
}

export default LocationMarkers;
