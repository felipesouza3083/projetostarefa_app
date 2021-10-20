import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/shared/Header';
import UserData from '../../components/shared/UserData';
import FormEditPassword from '../../components/admin/FormEditPassword';

export default function EditPassword() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Header />
            <UserData />
            <FormEditPassword/>
        </ScrollView>
    )
}

