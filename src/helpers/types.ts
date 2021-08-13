import Geometry from "ol/geom/Geometry";
import VectorSource from "ol/source/Vector";


interface IPoint {
    x: number,
    y: number,
}

interface IPolygoneData {
    author: string,
    category: string,
    polygon: {
        points: Array<IPoint>
    }
}

interface IFeature {
    type: string,
    geometry: {
        type: string,
        coordinates: Array<Array<Array<number>>>
    }
}

// GeoJsonData format: https://en.wikipedia.org/wiki/GeoJSON

export interface IGeoJsonData {
    type: string,
    area: number,
    features: Array<IFeature>
}

export interface IPolygon {
    author: string,
    category: string,
    polygon: {
        points: Array<IPoint>
    }
}


export interface JsonRawData {
    payload: {
        area: number,
        config: string,
        points: Array<number>,
        polygons: Array<IPolygon>
    }

}


export interface IGeoJsonMap {
    [category :string]:  {
        type: string,
        features: Array<IFeature>
    }
}

export interface ISources {
    [category: string]: {
        features: VectorSource<Geometry>
    }
}
