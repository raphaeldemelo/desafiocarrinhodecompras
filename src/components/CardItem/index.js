import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function CardItem({ data, addAmount, removeAmount }) {

    const [amount, setAmount] = useState(data.amount)

    function handleRemoveItem() {
        removeAmount();
        if (amount === 0) {
            setAmount(0);
            return;
        }
        setAmount(item => item - 1)
    }

    function handleAcrescentar() {
        addAmount();
        setAmount(item => item + 1)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.price}>R$ {data.price}</Text>

            <View style={styles.amountContainer}>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleRemoveItem}>
                    <Text>-</Text>
                </TouchableOpacity>

                <Text style={styles.amount}>{amount}</Text>

                <TouchableOpacity style={styles.buttonAdd} onPress={handleAcrescentar}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        fontSize: 16,
    },
    amountContainer: {
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonAdd: {
        backgroundColor: "#168fff",
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 2,
    },
    amount: {
        marginLeft: 14,
        marginRight: 14,
    }
})