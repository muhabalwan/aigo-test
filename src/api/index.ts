import axios from 'axios';

// GeoJsonData format: https://en.wikipedia.org/wiki/GeoJSON

interface IFeature {
    type: string,
    geometry: {
        type: string,
        coordinates: Array<Array<Array<number>>>
        area?: number
    }
}

export interface IGeoJsonData {
    type: string,
    area: number,
    features: Array<IFeature>
}

export async function postJsonFile(jsonFile: string) {
    try {
        const data = await await axios.post("http://localhost:3006/api/file", jsonFile, { headers: { 'Content-Type': 'application/json' } }).then(response => (response));
        return data;
    }
    catch (error) {
        console.error(error);
    }

}