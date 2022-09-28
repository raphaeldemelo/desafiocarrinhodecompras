import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product';
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../contexts/CartContext';

export default function Home() {

    const { cart, addItemCarrinho } = useContext(CartContext);
    const navigation = useNavigation();
    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Coca-Cola',
            price: 9.99
        },
        {
            id: '2',
            name: 'Chocolate',
            price: 6.99
        },
        {
            id: '3',
            name: 'Queijo Polenguinho',
            price: 12.90
        },
        {
            id: '4',
            name: 'Batata Frita 2kg',
            price: 17.90
        }, {
            id: '5',
            name: 'Guaraná lata',
            price: 8.90
        }
    ]);

    function handleAddCart(item) {
        addItemCarrinho(item)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de produtos</Text>
                <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
                    {cart.length >= 1 && (
                        <View style={styles.dot}>
                            <Text style={styles.dotText}>{cart.length}</Text>
                        </View>
                    )}
                    <Feather name='shopping-cart' size={30} color='#000' />
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Product data={item} addToCart={() => handleAddCart(item)} />}
            />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingEnd: 14,
        paddingStart: 14,
    },
    cartContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 2,
        bottom: -2,
        left: -4
    },
    dotText: {
        fontSize: 12,
    },
})