import AsyncStorage from "@react-native-community/async-storage";

export const AUTHORIZATION = 'authorization';
export const ACCESS_TOKEN = "access_token";

//função para armazenar os dados de autenticação do usuario
//auth -> receber todos os dados retornados pela API após
//a autenticação do usuario do aplicativo
export const signIn = async (auth) => {
    try {
        await AsyncStorage.setItem(
            AUTHORIZATION,
            JSON.stringify(auth)
        );

        await AsyncStorage.setItem(ACCESS_TOKEN, auth.accessToken);
    }
    catch (e) {
        console.log(e);
    }
}

//função para retornar os dados do usuario autenticado
export const getData = async () => {
    try {
        return await AsyncStorage.getItem(AUTHORIZATION);
    }
    catch (e) {
        console.log(e);
    }
}

//função para remover o conteudo do AsyncStorage
export const signOut = async () => {
    try {
        return await AsyncStorage.removeItem(AUTHORIZATION);
    }
    catch (e) {
        console.log(e);
    }
}