import React, { useState, useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import * as auth from '../../helpers/auth-helpers';

export default function UserData() {

    //declarando os dados que serão armazenados pelo componente
    const [nome, setNome] = useState(''); //HOOK
    const [email, setEmail] = useState(''); //HOOK

    //função HOOK executada quando o componente é carregado
    //equivalente a função 'componentDidMount' da classe React.Component
    useEffect(
        () => {

            //ler os dados do usuario armazenados no AsyncStorage
            auth.getData()
                .then(
                    (data) => {
                        let usuario = JSON.parse(data).usuario;

                        setNome(usuario.nome);
                        setEmail(usuario.email);
                    }
                )
                .catch(
                    (e) => {
                        console.log(e);
                    }
                )

        }, []
    );

    return (
        <Appbar.Header style={{ backgroundColor: '#fff', marginBottom: 4 }}>
            <Appbar.Content
                title={nome}
                subtitle={email}
                titleStyle={{
                    color: '#000',
                    fontSize: 15
                }}
                subtitleStyle={{
                    color: '#000',
                    fontSize: 13
                }}
            />
        </Appbar.Header>
    )
}

