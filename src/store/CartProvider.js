import { useReducer } from "react"
import CartContext from "./cart-context"

const CartProvider = (props) => {

    const defaultCartState = {
        items: [],
        totalAmount: 0,
    }

    const cartReducer = (state, action) => {

        switch (action.type) {

            case 'ADD':
            
            const updatedTotalAmount = state.totalAmount + action.item.price
            const existingItemIndex = state.items.findIndex((el) => {
                return el.id === action.item.id
            })
            const existingItem = state.items[existingItemIndex]

            let updatedItems

            if(existingItem) {


                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + action.item.quantity,
                    price: existingItem.price + action.item.quantity * action.item.price
                }
                updatedItems = [...state.items]
                updatedItems[existingItemIndex] = updatedItem
            }
            else {
                updatedItems = state.items.concat(action.item)
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            }

            case 'QUANTITY': 
            
            const existingItemIndex2 = state.items.findIndex((el) => {
                return el.id === action.id
            })
            const existingItem2 = state.items[existingItemIndex2]
            const existingItemPrice = action.price / existingItem2.quantity
            let updatedItems2
            let updatedTotalAmount2

            console.log(existingItemPrice);

            if(existingItem2.quantity < action.quantity) {


                const updatedItem2 = {
                    ...existingItem2,
                    quantity: existingItem2.quantity + 1,
                    price: existingItem2.price + existingItemPrice
                }
                updatedItems2 = [...state.items]
                updatedItems2[existingItemIndex2] = updatedItem2
                updatedTotalAmount2 = state.totalAmount + existingItemPrice
            }
            else {
                const updatedItem2 = {
                    ...existingItem2,
                    quantity: existingItem2.quantity - 1,
                    price: existingItem2.price - existingItemPrice
                }
                updatedItems2 = [...state.items]
                updatedItems2[existingItemIndex2] = updatedItem2
                updatedTotalAmount2 = state.totalAmount - existingItemPrice
            }



            return {
                items: updatedItems2,
                totalAmount: updatedTotalAmount2,
            }
            case 'RESET': 

            return {
                items: [],
                totalAmount: 0,
            }
            


            default:
                console.log('dasd');


        }

        return defaultCartState
    }

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }

    const resetCartHandler = () => {
        dispatchCartAction({
            type: 'RESET'
        })
    }

    const updateQuantityHandler = (quantity, id, price) => {
        dispatchCartAction({
            type: 'QUANTITY',
            quantity: quantity,
            id: id,
            price: price
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        itemsIsVisible: cartState.itemsIsVisible,
        addItem: addToCartHandler,
        updateQuantity: updateQuantityHandler,
        resetCart: resetCartHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
    
}

export default CartProvider