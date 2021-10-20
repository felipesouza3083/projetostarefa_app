import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import DashboardTasks from '../../components/admin/PieChartTasks';
import Header from '../../components/shared/Header';
import UserData from '../../components/shared/UserData';

export default function Dashboard() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Header />
            <UserData />
            <DashboardTasks />
        </ScrollView>
    )
}