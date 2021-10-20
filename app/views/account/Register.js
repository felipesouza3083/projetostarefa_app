import React from 'react';
import { ScrollView } from 'react-native';
import FormRegister from '../../components/account/FormRegister';

export default function Register() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <FormRegister />
        </ScrollView>
    )
}