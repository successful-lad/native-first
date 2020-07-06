import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

const NumericInput = () => {

    const [count, setCount] = useState(0);

    return (
     <View style={styles.container}>
         <Text
             onPress={() => setCount(value => value +1)}
             style={{...styles.customButton, ...styles.leftRadius}}
         >
             +
         </Text>
         <Text style={styles.count}>
             {count}
         </Text>
         <Text
             onPress={() => setCount(value => value -1)}
             style={{...styles.customButton, ...styles.rightRadius}}
         >
             -
         </Text>
     </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center'
    },
    count: {
        height: '100%',
        fontSize: 18,
        width: 100,
        paddingTop: 20,
        textAlign: 'center',
        backgroundColor: 'gray'
    },
    customButton: {
        height: '100%',
        width: 60,
        color: 'white',
        paddingTop: 20,
        textAlign: 'center',
        backgroundColor: 'lightgray'
    },
    rightRadius: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    leftRadius: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
});

export default NumericInput;
