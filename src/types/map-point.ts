type PointCoordinates = [number, number];

type Geometry = {
  type: string;
  coordinates: PointCoordinates;
}

type Properties = {
  balloonContent: string;
}

type Options = {
  id: string;
  ai92: string;
  ai95: string;
  ai95p: string;
  dt: string;
  shop: string;
  sug?: string;
}

type Feature =  {
  type: string;
  geometry: Geometry;
  properties: Properties;
  options: Options;
}

export type FeatureCollection = {
  type: "FeatureCollection";
  features: Feature[];
} 