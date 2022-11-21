import { useReducer } from "react"
import CartContext from "./cart-context"

const CartProvider = (props) => {

    const defaultCartState = {
        items: [],
        totalAmount: 0,
        itemsIsVisible: false
    }

    const cartReducer = (state, action) => {

        switch (action.type) {

            case 'ADD':
            
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity
            const existingItemIndex = state.items.findIndex((el) => {
                return el.id === action.item.id
            })
            const existingItem = state.items[existingItemIndex]

            let updatedItems

            if(existingItem) {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + action.item.quantity
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
                itemsIsVisible: state.itemsIsVisible,
            }

            case 'FOOTER':

            const st = action.status

            return {
                items: state.items,
                totalAmount: state.totalAmount,
                itemsIsVisible: st,
        
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

    const removFromCartHandler = (id) => {
        
    }

    const showFooterHandler = (status) => {
        dispatchCartAction({
            type: 'FOOTER',
            status: status
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        itemsIsVisible: cartState.itemsIsVisible,
        addItem: addToCartHandler,
        removeItem: removFromCartHandler,
        showFooter: showFooterHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
    
}

export default CartProvider