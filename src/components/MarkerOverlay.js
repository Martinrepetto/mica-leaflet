import { LayerGroup, LayersControl } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {
  RedMarkers,
  YellowMarkers,
  BlueMarkers,
  GreenMarkers,
} from "./Markers";

const MarkerOverlay = (props) => {
  if (props.color === "red") {
    return (
      <LayersControl.Overlay checked name={props.name}>
        <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false}>
            <RedMarkers />
          </MarkerClusterGroup>
        </LayerGroup>
      </LayersControl.Overlay>
    );
  } else if (props.color === "blue") {
    return (
      <LayersControl.Overlay checked name={props.name}>
        <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false}>
            <BlueMarkers />
          </MarkerClusterGroup>
        </LayerGroup>
      </LayersControl.Overlay>
    );
  }
  if (props.color === "yellow") {
    return (
      <LayersControl.Overlay checked name={props.name}>
        <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false}>
            <YellowMarkers />
          </MarkerClusterGroup>
        </LayerGroup>
      </LayersControl.Overlay>
    );
  }
  if (props.color === "green") {
    return (
      <LayersControl.Overlay checked name={props.name}>
        <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false}>
            <GreenMarkers />
          </MarkerClusterGroup>
        </LayerGroup>
      </LayersControl.Overlay>
    );
  }
};
export { MarkerOverlay };
