import { MapContainer } from "react-leaflet/MapContainer";
import { LatLngExpression } from "leaflet";
import { Marker, TileLayer, Popup } from "react-leaflet";

type MarkerProperties = {
  position: [number, number];
  popupContent?: string;
};

type Properties = {
  mapConfig: {
    center: LatLngExpression;
    zoomConfig: {
      zoom: number;
      maxZoom?: number;
      minZoom?: number;
      scrollWheelZoom?: boolean;
      attributionControl?: boolean;
      zoomControl?: boolean;
      doubleClickZoom?: boolean;
      touchZoom?: boolean;
      boxZoom?: boolean;
    };
    keyboard?: boolean;
    dragging?: boolean;
    style?: React.CSSProperties;
  };
  markers: MarkerProperties[];
};

const Map = ({ mapConfig, markers }: Properties) => {
  const { zoomConfig, ...config } = mapConfig;

  return (
    <MapContainer {...config} {...zoomConfig}>
      <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
      {
        markers.map(({ popupContent, position }, index) => (
          <Marker key={index} position={position}>
            {popupContent && <Popup>{popupContent}</Popup>}
          </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
