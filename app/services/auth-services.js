import axios from 'axios';
import * as config from '../config/api-config';
import { ACCESS_TOKEN } from '../helpers/auth-helpers';
import AsyncStorage from "@react-native-community/async-storage";

export const post = (user) => {
    return axios.post(config.getUri() + "/api/auth", user)
        .then(
            response => {
                return response.data;
            }
        )
}

//configurando o INTERCEPTOR..
axios.interceptors.request.use(
    async config => {

        const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);

        console.log(accessToken);

        //excluir do interceptor as requisições de login ou cadastro do usuario da api
        if (!config.url.endsWith('login')
            && !config.url.endsWith('register')
            && !config.url.endsWith('passwordrecover')) {

            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);