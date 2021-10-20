import React from 'react';
import { ScrollView } from 'react-native';
import FormPasswordRecover from '../../components/account/FormPasswordRecover';

export default function PasswordRecover() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <FormPasswordRecover />
        </ScrollView>
    )
}