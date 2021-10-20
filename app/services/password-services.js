import axios from 'axios';
import * as config from '../config/api-config';

//recuperação de senha
export const post = (model) => {
    return axios.post(config.getUri() + "/api/passwordrecover", model)
        .then(
            response => {
                return response.data;
            }
        )
}

//editar a senha do usuário
export const put = (model) => {
    return axios.put(config.getUri() + "/api/editpassword", model)
        .then(
            response => {
                return response.data;
            }
        )
}

