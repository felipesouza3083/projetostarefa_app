import axios from 'axios';
import * as config from '../config/api-config';

//cadastro de tarefa
export const post = (tarefa) => {
    return axios.post(config.getUri() + "/api/tarefas", tarefa)
        .then(
            response => {
                return response.data;
            }
        )
}

//edição de tarefa
export const put = (tarefa) => {
    return axios.put(config.getUri() + "/api/tarefas", tarefa)
        .then(
            response => {
                return response.data;
            }
        )
}

//exclusão de tarefa
export const remove = (idTarefa) => {
    return axios.delete(config.getUri() + "/api/tarefas/" + idTarefa)
        .then(
            response => {
                return response.data;
            }
        )
}

//consulta de tarefas por periodo de datas
export const getAll = (dataMin, dataMax) => {
    return axios.get(config.getUri() + "/api/tarefas/" + dataMin + "/" + dataMax)
        .then(
            response => {
                return response.data;
            }
        )
}

//consulta de tarefa por id
export const getById = (idTarefa) => {
    return axios.get(config.getUri() + "/api/tarefas/" + idTarefa)
        .then(
            response => {
                return response.data;
            }
        )
}

