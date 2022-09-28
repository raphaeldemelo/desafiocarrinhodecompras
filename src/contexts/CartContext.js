import React, { useState, createContext } from 'react';

export const CartContext = createContext({});

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

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
            totalResultCart(cartList)
            return;
        }

        let data = {
            ...novoItem,
            amount: 1,
            total: novoItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
        console.log([...cart, data])
    }

    function removeItemCart(product) {
        const indexItem = cart.findIndex(item => item.id === product.id);
        if (cart[indexItem]?.amount > 1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
        totalResultCart(removeItem)
    }

    function totalResultCart(items) {
        let meuCarrinho = items;
        let result = meuCarrinho.reduce((acc, item) => { return acc + item.total }, 0)
        setTotal(result.toFixed(2));
    }


    return (
        <CartContext.Provider value={{ cart, addItemCarrinho, removeItemCart, total }}>
            {children}
        </CartContext.Provider>
    )
}