import React, { createContext, useState } from 'react'
import data from './annotations.json';
import MultiPoint from 'ol/geom/MultiPoint';

import Map from "./components/Map/Map";
import Layers from "./components/Layers/Layers";
import VectorLayer from "./components/Layers/VectorLayer";


import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import Controls from "./components/Controls/Controls";
import FullScreenControl from './components/Controls/FullScreenControl';
import ZoomControl from './components/Controls/ZoomControl';
import VectorSource from 'ol/source/Vector';
import { formatJsonToGeoJson } from './helpers/Utils';
// import TileLayer from "./components/Layers/TileLayer";
// import osm from "./components/Source/osm";
// import vector from './components/Source/vector';


const styles = [
    /* We are using two different styles for the polygons:
     *  - The first style is for the polygons themselves.
     *  - The second style is to draw the vertices of the polygons.
     *    In a custom `geometry` function the vertices of a polygon are
     *    returned as `MultiPoint` geometry, which will be used to render
     *    the style.
     */
    new Style({
      stroke: new Stroke({
        color: "blue",
        width: 3
      }),
      fill: new Fill({
        color: "rgba(0, 0, 255, 0.1)"
      })
    }),
    new Style({
      image: new CircleStyle({
        radius: 1,
        fill: new Fill({
          color: "orange"
        })
      }),
      geometry: function (feature) {
        // return the coordinates of the first ring of the polygon
        const coordinates = feature.getGeometry().getCoordinates()[0];
        return new MultiPoint(coordinates);
      }
    })
  ];

const App = () => {
    const [center, setCenter] = useState([97558, 229873]);
    const [zoom, setZoom] = useState(13);

    const geojsonObject = formatJsonToGeoJson(data)

    const source = new VectorSource({
        features: new GeoJSON().readFeatures(geojsonObject),
    });

    return (
        <div>
            <Map center={center} zoom={zoom} >
                <Layers>
                    {/* <TileLayer
                        source={osm()}
                        zIndex={0}
                    /> */}
                    <VectorLayer
                        source={source}
                        style={styles}
                    />
                </Layers>
                <Controls>
                    <FullScreenControl />
                    <ZoomControl />
                </Controls>
            </Map>
        </div>
    )
}

export default App;