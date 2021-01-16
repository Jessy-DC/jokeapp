import React from 'react';
import {DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import {Home} from "./Home";
import {Joke} from "./Joke";
import {AppearanceProvider, useColorScheme} from "react-native-appearance";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    const scheme = useColorScheme();

    return (
        <AppearanceProvider>
            <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Joke" component={Joke}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}
