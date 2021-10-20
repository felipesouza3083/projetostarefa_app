import React, { useState, useCallback } from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { View, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import textValidation from '../../custom-validations/textinput-validation';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import * as services from '../../services/tarefa-services';
import Moment from 'moment';

export default function FormCreateTask() {

    //state HOOKS
    const [data, setData] = useState(undefined);
    const [hora, setHora] = useState(undefined);
    const [minuto, setMinuto] = useState(undefined);

    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [openTimePicker, setOpenTimePicker] = useState(false);

    //função para fechar a modal de seleção de data
    const onDismissDatePicker = useCallback((params) => {
        setOpenDatePicker(false);
    }, [setOpenDatePicker]);

    //função para fechar a modal de seleção de hora
    const onDismissTimePicker = useCallback((params) => {
        setOpenTimePicker(false);
    }, [setOpenTimePicker]);

    //função para capturar a data selecionada
    const onConfirmDatePicker = useCallback((params) => {
        setOpenDatePicker(false);
        setData(params.date);
    }, [setOpenDatePicker, setData]);

    //função para capturar a hora selecionada
    const onConfirmTimePicker = useCallback(({ hours, minutes }) => {
        setOpenTimePicker(false);
        setHora(hours);
        setMinuto(minutes);
    }, [setOpenTimePicker, setHora, setMinuto]);

    //objeto do HOOK FORMS para construir o formulario
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    //função para capturar o SUBMIT do formulario
    const onSubmit = (form) => {

        if (data == undefined) {
            Alert.alert('Por favor, selecione a data da tarefa.', 'Campo obrigatório');
        }
        else if (hora == undefined) {
            Alert.alert('Por favor, selecione a hora da tarefa.', 'Campo obrigatório');
        }
        else {
            var tarefa = {
                nome: form.nome,
                data: data,
                hora: `${hora}:${minuto}`
            }

            services.post(tarefa)
                .then(
                    () => {
                        Alert.alert(
                            'Tarefa cadastrada com sucesso',
                            `${tarefa.nome}`
                        );

                        reset({ nome: '' });

                        setData(undefined);
                        setHora(undefined);
                        setMinuto(undefined);
                    }
                )
                .catch(
                    (e) => {

                        console.log(e.response);

                        Alert.alert(
                            'Erro ao cadastrar a tarefa',
                            'Não foi possível realizar a operação'
                        );
                    }
                )
        }
    }

    return (
        <Card>
            <Card.Title
                title="Cadastro de Tarefa"
                subtitle="Preencha os campos para incluir uma tarefa"
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
                                    label="Nome da tarefa:"
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

                    {
                        data && <Text style={{
                            fontSize: 18
                        }}>
                            Data da tarefa: {Moment(data).format('D/MM/yyyy')}
                        </Text>
                    }

                    <Button
                        style={{ marginTop: 10 }}
                        icon="calendar"
                        onPress={
                            () => setOpenDatePicker(true)
                        }
                        uppercase={false}
                        mode="outlined"
                    >
                        Selecione a data para marcação tarefa
                    </Button>

                    <DatePickerModal
                        mode="single"
                        visible={openDatePicker}
                        date={data}
                        onDismiss={onDismissDatePicker}
                        onConfirm={onConfirmDatePicker}
                        saveLabel="Confirmar data"
                        cancelLabel="Cancelar"
                        label="Escolha a data da tarefa"
                        animationType="slide"
                        locale={'pt'}
                    />

                </View>

                <View style={{ marginBottom: 20 }}>

                    {
                        hora && minuto && <Text style={{
                            fontSize: 18
                        }}>
                            Hora da tarefa: {hora}:{minuto}h
                        </Text>
                    }

                    <Button
                        style={{ marginTop: 10 }}
                        icon="clock"
                        onPress={
                            () => setOpenTimePicker(true)
                        }
                        uppercase={false}
                        mode="outlined"
                    >
                        Selecione a hora para marcação tarefa
                    </Button>

                    <TimePickerModal
                        visible={openTimePicker}
                        onDismiss={onDismissTimePicker}
                        onConfirm={onConfirmTimePicker}
                        hours={12}
                        minutes={0}
                        saveLabel="Confirmar hora"
                        cancelLabel="Cancelar"
                        label="Escolha a hora da tarefa"
                        animationType="slide"
                        locale={'pt'}
                    />

                </View>

                <View style={{ marginBottom: 20 }}>
                    <Button mode="contained" icon="check-circle"
                        onPress={
                            handleSubmit(onSubmit)
                        }>
                        Cadastrar Tarefa
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}

