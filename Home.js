import React from 'react';
import {View, Text} from "react-native";
import {DesignInterface} from "./design/design";
import {Button} from "react-native-web";

export const Home = ({navigation}) => {
    return (
        <View style={DesignInterface.container}>
            <Text>Welcome !</Text>
            <Button title="Read some jokes" onPress={() => navigation.navigate("Joke")}>Button</Button>
        </View>
    );
}
