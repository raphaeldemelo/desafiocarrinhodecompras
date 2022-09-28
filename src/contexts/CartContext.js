import React, { useState, createContext } from 'react';

export const CartContext = createContext({});

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItemCarrinho(novoItem) {
        // ver se esse item já está no seu carrinho, adicionamos +1 quantidade
        // se não tiver no carrinho, então adicionamos no carrinho

        const indexItem = cart.findIndex(item => item.id === novoItem.id);
        if (indexItem !== -1) {
            //se entrou aqui, quer dizer que temos que adicionar porque ele já está na sua lista
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            setCart(cartList);
            console.log([...cart, data])
            return;
        }

        let data = {
            ...novoItem,
            amount: 1,
            total: novoItem.price
        }

        setCart(products => [...products, data])
        console.log([...cart, data])
    }


    return (
        <CartContext.Provider value={{ cart, addItemCarrinho }}>
            {children}
        </CartContext.Provider>
    )
}