import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './app/views/admin/Dashboard';
import CreateTask from './app/views/admin/CreateTask';
import ListTasks from './app/views/admin/ListTasks';
import EditPassword from './app/views/admin/EditPassword';

const Drawer = createDrawerNavigator();

export default function Admin() {
    return (
        <Drawer.Navigator
            initialRouteName="dashboard"
            drawerContentOptions={{
                activeTintColor: '#115293',
                itemStyle: {
                    marginVertical: 5
                }
            }}
        >

            <Drawer.Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    drawerLabel: "Dashboard Principal"
                }}
            />

            <Drawer.Screen
                name="create-task"
                component={CreateTask}
                options={{
                    drawerLabel: "Cadastrar Tarefas"
                }}
            />

            <Drawer.Screen
                name="list-tasks"
                component={ListTasks}
                options={{
                    drawerLabel: "Consultar Tarefas"
                }}
            />

            <Drawer.Screen
                name="edit-password"
                component={EditPassword}
                options={{
                    drawerLabel: "Alterar Minha Senha"
                }}
            />

        </Drawer.Navigator>
    )
}

