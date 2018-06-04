import axios from 'axios';
import download from 'downloadjs';
import { adalApiFetch } from './adalConfig';
import { restClientConfig } from './restClientConfig';
import { toastr } from 'react-redux-toastr';

class RestClient {
    static async Get(url) {
        let baseUrl = `${restClientConfig.baseUrl}/api/`

        var axiosInstance = axios.create({
            baseURL: baseUrl
        })
        try {
            console.log(`RestClient [GET] ${baseUrl + url}`)
            let response = await adalApiFetch(axiosInstance, baseUrl + url, {})

            return response.data
        } catch (err) {
            toastr.error('Error', `An unexpected error has occured: ${err}.`);

            console.warn(err)
        }
    }

    static async Post(url, data) {
        let baseUrl = `${restClientConfig.baseUrl}/api/`

        var axiosInstance = axios.create({
            baseURL: baseUrl
        })
        try {
            console.log(`RestClient [POST] ${baseUrl + url}`, data)

            let settings = {
                headers: {
                    Accept: 'ApPlication/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    Authorization: ''
                },
                data: JSON.stringify(data),
                method: 'POST'
            }

            let response = await adalApiFetch(axiosInstance, baseUrl + url, settings)

            return response.data
        } catch (err) {
            toastr.error('Error', `An unexpected error has occured: ${err}.`);

            console.warn(err)
        }
    }

    static async Download(url, data, fileName) {
        let baseUrl = `${restClientConfig.baseUrl}/api/`

        var axiosInstance = axios.create({
            baseURL: baseUrl
        })

        try {
            console.log(`RestClient [DOWNLOAD] ${baseUrl + url}`, data)

            let settings = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    Authorization: ''
                },
                data: JSON.stringify(data),
                method: 'POST',
                responseType: 'blob'
            }

            let response = await adalApiFetch(axiosInstance, baseUrl + url, settings)

            return download(response.data, fileName)
        } catch (err) {
            toastr.error('Error', `An unexpected error has occured: ${err}.`);

            console.warn(err)
        }
    }
}

export default RestClient