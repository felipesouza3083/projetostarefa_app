import React from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { View, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as services from '../../services/password-services';
import passwordValidation from '../../custom-validations/password-validation';
import textValidation from '../../custom-validations/textinput-validation';
import { useNavigation } from '@react-navigation/native';

export default function FormEditPassword() {

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
    const onSubmit = (form) => {

        services.put(form)
            .then(
                () => {
                    Alert.alert(
                        'Senha atualizada com sucesso!',
                        'Acesse novamente sua conta utilizando a nova senha.'
                    );

                    reset({ senhaAtual: '', novaSenha: '' });
                }
            )
            .catch(
                (e) => {

                    console.log(e);

                    Alert.alert(
                        'Erro ao atualizar a senha',
                        'Verifique os dados informados'
                    );
                }
            )
    }

    return (
        <Card>
            <Card.Title
                title="Atualizar minha senha de acesso"
                subtitle="Altere sua senha de usuário do aplicativo"
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
                                    label="Senha atual:"
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
                        name="senhaAtual"
                        defaultValue=""
                    />
                    {
                        errors.senhaAtual && <Text style={{
                            fontSize: 15,
                            color: '#bb2124'
                        }}>
                            {errors.senhaAtual.message}
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
                                    label="Nova senha:"
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
                        name="novaSenha"
                        defaultValue=""
                    />
                    {
                        errors.novaSenha && <Text style={{
                            fontSize: 15,
                            color: '#bb2124'
                        }}>
                            {errors.novaSenha.message}
                        </Text>
                    }
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Button mode="contained" icon="check-circle"
                        onPress={
                            handleSubmit(onSubmit)
                        }>
                        Atualizar Senha
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}


