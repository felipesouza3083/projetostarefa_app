import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import GridListTasks from '../../components/admin/GridListTasks';
import Header from '../../components/shared/Header';
import UserData from '../../components/shared/UserData';

export default function ListTasks() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Header />
            <UserData />
            <GridListTasks />
        </ScrollView>
    )
}