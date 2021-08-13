import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLVectorLayer from "ol/layer/Vector";

import {  Style } from 'ol/style';

import VectorSource from "ol/source/Vector";
import Geometry from "ol/geom/Geometry";
import MultiPoint from "ol/geom/MultiPoint";
import RenderFeature from "ol/render/Feature";

//TODO: fix style type def  
interface IProps {
  source: VectorSource<Geometry>
  style: any,
  zIndex?: number
}

const VectorLayer = ({ source, style, zIndex = 0 }: IProps) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let vectorLayer = new OLVectorLayer({
      source,
      style
    });
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map]);
  return null;
};
export default VectorLayer;