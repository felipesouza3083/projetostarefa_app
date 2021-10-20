import React from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { View, Text, Alert } from 'react-native';
import * as config from '../../config/api-config';
import * as services from '../../services/register-services';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import textValidation from '../../custom-validations/textinput-validation';
import emailValidation from '../../custom-validations/email-validation';
import passwordValidation from '../../custom-validations/password-validation';

export default function FormRegister() {

    //função HOOK para navegação no aplicativo
    const navigation = useNavigation();

    //objeto do HOOK FORMS para construir o formulario
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    //função para capturar o SUBMIT do formulario
    const onSubmit = (data) => {
        //executando a chamada para a API..
        services.post(data)
            .then( //callback de sucesso
                () => {
                    Alert.alert(
                        'Conta de usuário criada com sucesso!',
                        'Autentique-se para acessar sua conta.'
                    );

                    //limpar os campos do formulario
                    reset({
                        nome : '',
                        email : '',
                        senha : ''
                    });

                    //navegar para a página de autenticação
                    navigation.navigate('login');
                }
            )
            .catch( //callback de erro
                (e) => {
                    console.log(e.response);
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
                title="Crie sua conta"
                subtitle="Preencha os campos para criar sua conta de usuário"
            />
            <Card.Content>

                <View style={{ marginBottom: 20 }}>
                    <Controller
                        control={control}
                        rules={{
                            validate: textValidation
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Nome do Usuário:"
                                    keyboardType="default"
                                    autoCompleteType="name"
                                    mode="outlined"
                                    placeholder="Digite aqui"
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )
                        }
                        name="nome"
                        defaultValue=""
                    />
                    {
                        errors.nome && <Text style={{
                            fontSize: 15,
                            color: '#bb2124'
                        }}>
                            {errors.nome.message}
                        </Text>
                    }
                </View>

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
                            validate: passwordValidation
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
                        Cadastrar Conta
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}