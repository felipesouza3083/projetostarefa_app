import React, { useState, useCallback } from 'react';
import { Card, Button } from 'react-native-paper';
import { View, Text, Alert } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
import * as services from '../../services/tarefa-services';
import Moment from 'moment';

export default function GridListTasks() {

    //state HOOKS
    const [range, setRange] = useState({
        startDate: undefined,
        endDate: undefined
    });

    const [openDatePicker, setOpenDatePicker] = useState(false);

    const onDismissDatePicker = useCallback((params) => {
        setOpenDatePicker(false);
    }, [setOpenDatePicker]);

    const onConfirmDatePicker = useCallback(({
        startDate,
        endDate
    }) => {
        setOpenDatePicker(false);
        setRange({ startDate, endDate });
    }, [setOpenDatePicker, setRange]);

    const onSubmit = () => {
        console.log(range);
    }

    return (
        <Card>
            <Card.Title
                title="Consulta de Tarefas"
                subtitle="Listagem das tarefas cadastradas"
            />
            <Card.Content>

                <View style={{ marginBottom: 20 }}>

                    {
                        range.startDate && range.endDate && <Text style={{
                            fontSize: 18
                        }}>
                            Período da pesquisa: de {Moment(range.startDate).format('D/MM/yyyy')} até {Moment(range.endDate).format('D/MM/yyyy')}
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
                        Selecione o período de datas para pesquisa
                    </Button>

                    <DatePickerModal
                        mode="range"
                        visible={openDatePicker}
                        startDate={range.startDate}
                        endDate={range.endDate}
                        onDismiss={onDismissDatePicker}
                        onConfirm={onConfirmDatePicker}
                        saveLabel="Confirmar período"
                        startLabel="Data de"
                        endLabel="Data até"
                        cancelLabel="Cancelar"
                        label="Escolha a período da pesquisa"
                        animationType="slide"
                        locale={'pt'}
                    />

                </View>

                <View style={{ marginBottom: 20 }}>
                    <Button mode="contained" icon="check-circle"
                        onPress={
                            () => onSubmit()
                        }>
                        Pesquisar Tarefas
                    </Button>
                </View>

            </Card.Content>
        </Card>
    )
}