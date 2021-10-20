import React from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { View, Text, Alert } from 'react-native';
import * as config from '../../config/api-config';
import * as services from '../../services/password-services';
import { useForm, Controller } from 'react-hook-form';
import emailValidation from '../../custom-validations/email-validation';
import { useNavigation } from '@react-navigation/native';

export default function FormPasswordRecover() {

    //HOOK para navegação
    const navigation = useNavigation();

    //objeto do HOOK FORMS para construir o formulario
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    //função para capturar o SUBMIT do formulario
    const onSubmit = async (data) => {

        services.post(data)
            .then(
                () => {
                    Alert.alert(
                        'Nova senha gerada com sucesso',
                        `Uma nova senha de acesso foi enviada para o email ${data.email}`
                    );

                    reset({ email: '' });
                    
                    navigation.navigate('login');
                }
            )
            .catch(
                (e) => {

                    console.log(e.response);

                    Alert.alert(
                        'Erro ao recuperar senha de usuário',
                        'Verifique o email informado.'
                    );
                }
            )
    }

    return (
        <Card>
            <Card.Cover
                source={{
                    uri: config.getUri() + "/images/img01.jpg"
                }}
            />
            <Card.Title
                title="Esqueci minha senha"
                subtitle="Recuperação de senha de acesso"
            />
            <Card.Content>
                <View style={{ marginBottom: 20 }}>

                    <Controller
                        control={control}
                        rules={{
                            validate: emailValidation
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Informe seu email:"
                                    keyboardType="email-address"
                                    autoCompleteType="email"
                                    mode="outlined"
                                    placeholder="Digite aqui"
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )
                        }
                        name="email"
                        defaultValue=""
                    />
                    {
                        errors.email && <Text style={{
                            fontSize: 15,
                            color: '#bb2124'
                        }}>
                            {errors.email.message}
                        </Text>
                    }
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Button mode="contained" icon="check-circle"
                        onPress={
                            handleSubmit(onSubmit)
                        }>
                        Recuperar senha de acesso
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}

