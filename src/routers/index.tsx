import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import Notification from "../pages/Notification";
import Profile from "../pages/Profile";

function Route() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn" screenOptions={{
                headerTransparent: true,
                headerTitle: ""
            }}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route
