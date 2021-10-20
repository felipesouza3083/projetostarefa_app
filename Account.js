import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from './app/views/account/Login';
import Register from './app/views/account/Register';
import PasswordRecover from './app/views/account/PasswordRecover';

import Icon from 'react-native-vector-icons/FontAwesome';

//criando o objeto para definir a navegação
const Tab = createMaterialBottomTabNavigator();

export default function Account() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="login"
                component={Login}
                options={{
                    tabBarLabel: "Acessar Conta",
                    tabBarIcon: ({ focused }) => (
                        <Icon name="lock" size={22} color={focused ? '#fff' : '#ddd'} />
                    )
                }}
            />
            <Tab.Screen
                name="register"
                component={Register}
                options={{
                    tabBarLabel: "Crie sua Conta",
                    tabBarIcon: ({ focused }) => (
                        <Icon name="user" size={22} color={focused ? '#fff' : '#ddd'} />
                    )
                }}
            />
            <Tab.Screen
                name="password-recover"
                component={PasswordRecover}
                options={{
                    tabBarLabel: "Esqueci minha senha",
                    tabBarIcon: ({ focused }) => (
                        <Icon name="envelope" size={22} color={focused ? '#fff' : '#ddd'} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}



