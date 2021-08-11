

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


export const formatJsonToGeoJson = (rawData: JsonRawData) => {
    const geojsonObject: IGeoJsonData = {
        type: "FeatureCollection",
        area: rawData.payload.area,
        features: []    
    }
    
    const JsonDataWithFormattedPoints = rawData.payload.polygons.map((poly: IPolygoneData) => {
        return {
            author: poly.author,
            category: poly.category,
            polygon: {
                points: [poly.polygon.points.map(point => [point.x, point.y])]
            }
        }
    });
    
    const geoJsonFeaturesArray = JsonDataWithFormattedPoints.map(data => {
        return {
            type: "Feature",
            geometry: {
                type: 'Polygon',
                coordinates: data.polygon.points
    
            }
    
        }
    });
    geojsonObject.features = geoJsonFeaturesArray;
    return geojsonObject;
}

