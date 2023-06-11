import axios from "axios";

import { IFormData, IUploadCSVResponse } from "types/types";

export const BASE_URL = "http://127.0.0.1:8000";

axios.defaults.baseURL = BASE_URL;

// export const api = [
//     "petal-length",
//     "petal-width",
//     "sepal-length",
//     "sepal-width",
// ];

class Upload {
    async UploadCSV(data: FormData): Promise<IUploadCSVResponse> {
        const config = {
            method: "POST",
            mode: "no-cors",
            url: "/api/upload",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data,
        };

        const result = await axios(config);
        return result.data;
    }

    async UploadForm(data: IFormData[]): Promise<{ result: string }> {
        const config = {
            method: "POST",
            url: "/api/predict-one",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        };

        const result = await axios(config);
        return result.data;
    }

    async UploadTest(data: FormData): Promise<{ accuracy: number }> {
        const config = {
            method: "POST",
            url: "/api/predict-set",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data,
        };

        const result = await axios(config);
        return result.data;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Upload();
