import { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import CardItem from '../../components/CardItem'

export default function Cart() {

    const { cart, addItemCarrinho, removeItemCart } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={() => <Text style={styles.observation}>{`Nenhum item no carrinho até o momento :(`}</Text>}
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        addAmount={() => addItemCarrinho(item)}
                        removeAmount={() => removeItemCart(item)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        paddingEnd: 14,
        paddingTop: 14,
    },
    observation: {
        fontWeight: 'bold',
        paddingEnd: 14,
        paddingTop: 14,
        paddingLeft: 50,
        paddingRight: 14,
    }
})