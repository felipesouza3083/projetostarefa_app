import axios from 'axios';
import * as config from '../config/api-config';

export const post = (user) => {
    return axios.post(config.getUri() + "/api/register", user)
        .then(
            response => {
                return response.data;
            }
        )
}