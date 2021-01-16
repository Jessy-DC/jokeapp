import React from 'react';
import {View, Text} from "react-native";
import {DesignInterface} from "./design/design";

export const Joke = () => {
    return (
        <View style={DesignInterface.container}>
            <Text>Jokes !</Text>
        </View>
    );
}
