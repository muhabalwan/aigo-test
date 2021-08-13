import React, { useState } from 'react'
import MultiPoint from 'ol/geom/MultiPoint';
import Map from "./components/Map/Map";
import Layers from "./components/Layers/Layers";
import VectorLayer from "./components/Layers/VectorLayer";
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import GeoJSON from 'ol/format/GeoJSON';
import Controls from "./components/Controls/Controls";
import FullScreenControl from './components/Controls/FullScreenControl';
import ZoomControl from './components/Controls/ZoomControl';
import VectorSource from 'ol/source/Vector';
import UploadFile from './components/Upload';
import Geometry from 'ol/geom/Geometry';
import { IGeoJsonMap } from './helpers/types';
import { StyledRow, StyledWrapper, StyledInput, StyledLabel } from './StyledApp.css';

const styles = [
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
      const coordinates = feature.getGeometry().getCoordinates()[0];
      return new MultiPoint(coordinates);
    }
  })
];

const App = () => {
  interface ISources {
    [category: string]: VectorSource<Geometry>
  }

  interface IShowLayers {
    [category: string]: boolean
  }
  const [center, setCenter] = useState([97558, 229873]);
  const [zoom, setZoom] = useState(12);
  const [sources, setSources] = useState<ISources>();
  const [showLayers, setShowLayers] = useState<IShowLayers>({});


  const getUploadedFileData = (formattedData: IGeoJsonMap) => {
    const sources: any = {};
    Object.keys(formattedData).forEach((key => {
      const layers: IShowLayers = {};
      layers[key] = true
      showLayers[key] = true
      setShowLayers(showLayers);
      const source = new VectorSource({
        features: new GeoJSON().readFeatures(formattedData[key]),
      });
      sources[key] = source;
    }));
    setSources(sources)
  }

  const onCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const layers = { ...showLayers };
    layers[event.target.id] = event.target.checked;
    setShowLayers(layers);
  }

  return (
    <StyledWrapper>
      <UploadFile getUploadedFileData={getUploadedFileData} />
      <StyledRow>
        <div>
          {sources && Object.keys(sources).map(key => {
            return (
              <div>
                <StyledLabel htmlFor={key} className={showLayers[key] ? "active" : ""}>{key}</StyledLabel>
                <StyledInput
                  type="checkbox"
                  checked={showLayers[key]}
                  onChange={onCheckBoxChange}
                  key={key}
                  id={key}
                  value={key}
                />
              </div>
            )
          })}
        </div>
        {sources &&
          <Map center={center} zoom={zoom} >
            <Layers>
              {Object.keys(sources).map(key => {

                return (
                  <>
                    {showLayers[key] &&
                      <VectorLayer
                        source={sources[key]}
                        style={styles}
                        key={key}
                      />
                    }
                  </>
                )
              })}
            </Layers>
            <Controls>
              <FullScreenControl />
              <ZoomControl />
            </Controls>
          </Map>
        }

      </StyledRow>


    </StyledWrapper>
  )
}

export default App;