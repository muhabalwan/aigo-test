import React, { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import Zoom from 'ol/control/Zoom';

const ZoomControl = () => {
    const { map } = useContext(MapContext);
    useEffect(() => {
        if (!map) return;
        let zoomControl = new Zoom();
        map.controls.push(zoomControl);
        return () => map.controls.remove(zoomControl);
    }, [map]);
    return null;
}

export default ZoomControl;