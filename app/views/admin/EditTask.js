import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Header from '../../components/shared/Header';
import UserData from '../../components/shared/UserData';

export default function EditTask() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Header />
            <UserData />
        </ScrollView>
    )
}