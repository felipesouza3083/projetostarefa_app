import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import FormCreateTask from '../../components/admin/FormCreateTask';
import Header from '../../components/shared/Header';
import UserData from '../../components/shared/UserData';

export default function CreateTask() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Header />
            <UserData />
            <FormCreateTask />
        </ScrollView>
    )
}