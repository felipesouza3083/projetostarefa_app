import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function Header() {

    const navigation = useNavigation();

    const logout = () => {
        return Alert.alert(
            "Encerrar Sessão",
            "Deseja realmente sair do sistema?",
            [
                {
                    text: "Confirmar",
                    onPress: () => {
                        navigation.navigate('login')
                    },
                },
                {
                    text: "Cancelar",
                },
            ]
        );
    }

    return (
        <Appbar.Header>
            <Appbar.Content
                title="Controle de Tarefas"
            />
            <Appbar.Action
                icon="logout"
                onPress={
                    () => logout()
                }
            />
            <Appbar.Action
                icon="menu"
                onPress={
                    () => navigation.toggleDrawer()
                }
            />
        </Appbar.Header>
    )
}