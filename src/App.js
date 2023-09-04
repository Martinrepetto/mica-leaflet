import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "@christopherpickering/react-leaflet-markercluster";
import Markers from "./components/Markers";

function App() {
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
        <MarkerClusterGroup showCoverageOnHover={1}>{<Markers/>}</MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
