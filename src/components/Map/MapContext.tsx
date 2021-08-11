import React, { createContext } from "react";
import View from 'ol/View';
import Map from 'ol/Map';
  
  export interface IMapContext {
    map: Map;
  }

let options = {
    view: new View(),
    layers: [],
    controls: [],
    overlays: []
};
let mapObject = new Map(options);
const MapContext = createContext<IMapContext | void>(undefined);

export default MapContext;