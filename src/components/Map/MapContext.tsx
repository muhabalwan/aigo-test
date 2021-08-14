import React, { createContext } from "react";
import Map from 'ol/Map';
  
  export interface IMapContext {
    map: Map;
  }
  
const MapContext = createContext<IMapContext | void>(undefined);

export default MapContext;