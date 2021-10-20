import React from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { View, Text, Alert } from 'react-native';
import * as config from '../../config/api-config';
import * as services from '../../services/auth-services';
import * as auth from '../../helpers/auth-helpers';
import { useForm, Controller } from 'react-hook-form';
import emailValidation from '../../custom-validations/email-validation';
import textValidation from '../../custom-validations/textinput-validation';
import { useNavigation } from '@react-navigation/native';

export default function FormLogin() {

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
                (result) => {
                    Alert.alert(
                        'Seja bem vindo à Agenda de Tarefas',
                        'Autenticação realizada com sucesso.'
                    );

                    //gravar os dados da autenticação no AsyncStorage
                    auth.signIn(result)
                        .then(
                            () => {
                                reset({
                                    email: '',
                                    senha: ''
                                });

                                navigation.navigate('admin');
                            }
                        )
                        .catch(
                            (er) => {
                                console.log(er);
                            }
                        )
                }
            )
            .catch(
                (e) => {

                    var err = e.response;

                    switch (err.status) {
                        case 401:
                            Alert.alert(
                                'Acesso não autorizado',
                                'Usuário inválido.'
                            );
                            break;

                        default:
                            Alert.alert(
                                'Erro interno do aplicativo!',
                                'Não foi possível realizar a autenticação.'
                            );
                            break;
                    }
                }
            );


    }

    return (
        <Card>
            <Card.Cover
                source={{
                    uri: config.getUri() + "/images/img01.jpg"
                }}
            />
            <Card.Title
                title="Acessar conta"
                subtitle="Informe seu dados de usuário"
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
                                    label="Email de Acesso:"
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
                    <Controller
                        control={control}
                        rules={{
                            validate: textValidation
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Senha de Acesso:"
                                    keyboardType="default"
                                    secureTextEntry={true}
                                    mode="outlined"
                                    placeholder="Digite aqui"
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )
                        }
                        name="senha"
                        defaultValue=""
                    />
                    {
                        errors.senha && <Text style={{
                            fontSize: 15,
                            color: '#bb2124'
                        }}>
                            {errors.senha.message}
                        </Text>
                    }
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Button mode="contained" icon="check-circle"
                        onPress={
                            handleSubmit(onSubmit)
                        }>
                        Acessar Conta
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}

