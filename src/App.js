import "./App.css";

import { LayersControl, MapContainer, TileLayer } from "react-leaflet";

import { MarkerOverlay } from "./components/MarkerOverlay";

import { TimeInputs } from "./components/TimeInputs";

function App() {
  return (
    <div className="App">
      <MapContainer
        id="map"
        center={[-51.505, -60]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Argenmap">
            <TileLayer
              attribution='<a href="https://www.ign.gob.ar/">Instituto Geográfico Nacional</a>'
              url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Imágenes satelitales Esri">
            <TileLayer
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>

          <MarkerOverlay name="Batallas Guerras Civiles" color="red" />
          <MarkerOverlay name="Batallas por la independencia" color="blue" />
          <MarkerOverlay name="Batallas contra otros estados" color="yellow" />
          <MarkerOverlay
            name="Combates contra los pueblos originarios"
            color="green"
          />
        </LayersControl>

        <TimeInputs />
      </MapContainer>
    </div>
  );
}

export default App;
