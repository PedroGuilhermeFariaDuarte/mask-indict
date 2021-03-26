import React, { useState, useEffect } from "react";
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import { parseISO, differenceInDays } from "date-fns";

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
    const [ notifications, setNotifications ] = useState(useSelector((state: AllStates) => state.Notifications))
    const dispatch = useDispatch()

    return <Container>
        <ContainerScroll>
            <Today>Today</Today>
            {
                notifications?.notification?.length > 0 && notifications?.notification.map((notify, index) => {
                    console.log(differenceInDays(new Date(notify?.date), new Date()))
                    return (
                        < ConatinerNotification key={index} >
                            <NotificationHeader>
                                <PrimaryTitle bold style={{ fontSize: 16, color: "#598CE6" }}>
                                    {notify?.from}
                                    <SecundaryTitle style={{ fontSize: 13 }}>   {differenceInDays(parseISO(new Date(notify?.date)), new Date()) || 'Hoje'}</SecundaryTitle>
                                </PrimaryTitle>
                            </NotificationHeader>
                            <NotificationContent>
                                <Description numberOfLines={1}>
                                    Oi! {useSelector((state: AllStates) => state.User).name}, {notify?.content}
                                </Description>
                            </NotificationContent>
                        </ConatinerNotification>
                    )
                }
                )
            }
        </ContainerScroll>
    </Container >
}

export default Notification
