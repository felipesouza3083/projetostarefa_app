import React from 'react';
import { ScrollView } from 'react-native';
import FormLogin from '../../components/account/FormLogin';

export default function Login() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <FormLogin />
        </ScrollView>
    )
}
