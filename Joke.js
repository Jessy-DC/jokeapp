import React, {useState, useEffect} from 'react';
import {View, Text} from "react-native";
import {DesignInterface} from "./design/design";

export function Joke() {
    const [data, setData] = useState({})

    async function GetJokes() {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
        const data = await response.json()
        return data;
    }

    useEffect(() =>{
        setInterval(async () => {
            GetJokes()
                .then(data => setData(data))
        }, 5000)

    }, [])

    return (
        <View style={DesignInterface.container}>
            <Text>{data.setup || 'Loading...'}</Text>
            <Text>{data.delivery}</Text>
        </View>
    );
}
