import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from "react-redux";

// Redux Action
import { NotificationsActions_addNewNotification } from "../../redux/reducers/Notifications/actions";

// Redux Types
import { AllStates } from "../../redux/reducers";

// Routers Types
import { RootStackParamList } from "../../routers/types";

// Components
import { PrimaryTitle, SecundaryTitle } from "../../components/Titles";

// Styles
import {
    Container,
    ContainerScroll,
    Description,
    ConatinerNotification,
    NotificationHeader,
    NotificationContent,
    Today
} from "./styles";

type Props = StackScreenProps<RootStackParamList, 'Notification'>;

function Notification({ navigation }: Props) {
    const [ notifications, setNotifications ] = useState(useSelector((state: AllStates) => state.Notification))
    const dispacth = useDispatch()

    useEffect(() => {
        if (!notifications?.notification?.length) {
            console.log(notifications)
        }
    }, [ notifications ])

    return <Container>
        <ContainerScroll>
            <Today>Today</Today>
            <ConatinerNotification>
                <NotificationHeader>
                    <PrimaryTitle bold style={{ fontSize: 16, color: "#598CE6" }}>
                        Watson
                        <SecundaryTitle style={{ fontSize: 13 }}>   30/07/2020</SecundaryTitle>
                    </PrimaryTitle>
                </NotificationHeader>
                <NotificationContent>
                    <Description numberOfLines={1}>
                        Oi! {useSelector((state: AllStates) => state.User).name}, I've detected a lot of people in your current location
                    </Description>
                </NotificationContent>
            </ConatinerNotification>

            <ConatinerNotification>
                <NotificationHeader>
                    <PrimaryTitle bold style={{ fontSize: 16, color: "#598CE6" }}>
                        Watson
                        <SecundaryTitle style={{ fontSize: 13 }}>   30/07/2020</SecundaryTitle>
                    </PrimaryTitle>
                </NotificationHeader>
                <NotificationContent>
                    <Description numberOfLines={1}>
                        Oi! {useSelector((state: AllStates) => state.User).name}, I've detected a lot of people in your current location
                    </Description>
                </NotificationContent>
            </ConatinerNotification>

            <ConatinerNotification>
                <NotificationHeader>
                    <PrimaryTitle bold style={{ fontSize: 16, color: "#598CE6" }}>
                        Watson
                        <SecundaryTitle style={{ fontSize: 13 }}>   30/07/2020</SecundaryTitle>
                    </PrimaryTitle>
                </NotificationHeader>
                <NotificationContent>
                    <Description numberOfLines={1}>
                        Oi! {useSelector((state: AllStates) => state.User).name}, I've detected a lot of people in your current location
                    </Description>
                </NotificationContent>
            </ConatinerNotification>

            <Today>Last day</Today>
            <ConatinerNotification>
                <NotificationHeader>
                    <PrimaryTitle bold style={{ fontSize: 16, color: "#598CE6" }}>
                        Watson
                        <SecundaryTitle style={{ fontSize: 13 }}>   30/07/2020</SecundaryTitle>
                    </PrimaryTitle>
                </NotificationHeader>
                <NotificationContent>
                    <Description numberOfLines={1}>
                        Oi! {useSelector((state: AllStates) => state.User).name}, I've detected a lot of people in your current location
                    </Description>
                </NotificationContent>
            </ConatinerNotification>

            <ConatinerNotification>
                <NotificationHeader>
                    <PrimaryTitle bold style={{ fontSize: 16, color: "#598CE6" }}>
                        Watson
                        <SecundaryTitle style={{ fontSize: 13 }}>   30/07/2020</SecundaryTitle>
                    </PrimaryTitle>
                </NotificationHeader>
                <NotificationContent>
                    <Description numberOfLines={1}>
                        Oi! {useSelector((state: AllStates) => state.User).name}, I've detected a lot of people in your current location
                    </Description>
                </NotificationContent>
            </ConatinerNotification>

            <ConatinerNotification>
                <NotificationHeader>
                    <PrimaryTitle bold style={{ fontSize: 16, color: "#598CE6" }}>
                        Watson
                        <SecundaryTitle style={{ fontSize: 13 }}>   30/07/2020</SecundaryTitle>
                    </PrimaryTitle>
                </NotificationHeader>
                <NotificationContent>
                    <Description numberOfLines={1}>
                        Oi! {useSelector((state: AllStates) => state.User).name}, I've detected a lot of people in your current location
                    </Description>
                </NotificationContent>
            </ConatinerNotification>
        </ContainerScroll>
    </Container>
}

export default Notification
