import React from "react"; 

const CartContext = React.createContext({
    items: [],
    totalAmount: 0.00,
    itemsIsVisible: false,
    addItem: (item) => {},
    removeItem: (id) => {},
    updateQuantity: (quantity, id, price) => {},
    resetCart: () => {}
})

export default CartContext