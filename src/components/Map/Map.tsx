import React, { useRef, useState, useEffect } from "react"
import MapContext from "./MapContext";
import Map from "ol/Map";
import View from 'ol/View';
import { Map as IMap } from "ol"
import { StyledOlMaps } from './StyledMap.css';
//TODO: FIX type
const MapComponent = ({ children, zoom, center }: any) => {
    const mapRef = useRef<HTMLHeadingElement>(null);
    const [map, setMap] = useState<IMap>();
    
    // on component mount
    useEffect(() => {
        let options = {
            view: new View({ zoom, center }),
            layers: [],
            controls: [],
            overlays: []
        };
        let mapObject = new Map(options);

        if (mapRef && mapRef.current) {
            mapObject.setTarget(mapRef?.current);
        }
        setMap(mapObject);
        return () => mapObject.setTarget(undefined);
    }, []);

    // zoom change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom]);
    
    // center change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(center)
    }, [center])

    return (
        <>
            <StyledOlMaps >
                <MapContext.Provider value={{ map }}>
                    <div ref={mapRef} className="ol-map">
                        {children}
                    </div>
                </MapContext.Provider>
            </StyledOlMaps>

        </>
    )
}
export default MapComponent;
