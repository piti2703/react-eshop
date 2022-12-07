import React from "react"; 

const CartContext = React.createContext({
    items: [],
    orders: [],
    totalAmount: 0.00,
    itemsIsVisible: false,
    addItem: (item) => {},
    addOrder: (order) => {},
    removeItem: (id) => {},
    updateQuantity: (quantity, id, price) => {},
    resetCart: () => {}
})

export default CartContext