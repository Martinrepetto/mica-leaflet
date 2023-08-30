import "./App.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import csvdata from "./data.csv";
import { useState } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
const Papa = require("papaparse");

function App() {
  let jsonGeoData;
  const [markers, setMarkers] = useState([]);
  Papa.parse(csvdata, {
    download: true,
    header: true,
    complete: function (results, file) {
      let markerArray = [];
      jsonGeoData = results.data;
      for (let i = 0; i < jsonGeoData.length - 1; i++) {
        markerArray.push(
          <Marker
            key={jsonGeoData[i].key}
            position={[jsonGeoData[i].Lat, jsonGeoData[i].Lng]}
          >
            <Popup>
              <b>
                {jsonGeoData[i].Title} - {jsonGeoData[i].Year}
              </b>
            </Popup>
          </Marker>
        );
        // console.logs(i);
      }
      setMarkers(markerArray);
    },
  });

  return (
    <div className="App">
      <MapContainer
        id="map"
        center={[-51.505, -60]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='<a href="https://www.ign.gob.ar/">Instituto Geográfico Nacional</a>'
          url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png"
        />
        <MarkerClusterGroup chunkedLoading>{markers}</MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
