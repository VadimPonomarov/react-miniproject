import axiosService from './axios.service'
import {URL_BASE} from '../config/constants/urls';
import {API_KEY} from '../config/constants/api_keys';

const gService = axiosService(URL_BASE.genres);

const genreService = {
    getList: () => gService.get('/list',
        {
            params: {
                api_key: API_KEY,
                language: 'ru'
            }
        }
    ).then(value => value.data)
}

export {genreService}