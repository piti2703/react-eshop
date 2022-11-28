import styles from './CartItem.module.css'
import ItemQuantityBtns from '../../components/UI/QuantityChangeBtns'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const CartItem = (props) => {

    const cartCtx = useContext(CartContext)

    const refreshItemHandler = (quantity) => {

        const itemId = props.id
        const itemPrice = props.price
        const itemQuantity = quantity
        cartCtx.updateQuantity(itemQuantity, itemId, itemPrice)
    }


    return (
        <div className={styles.cart__item}>
            <div className={styles.cart__top}>
                <img src='https://placehold.jp/200x130.png' alt='placeholder img'/>
                <div className={styles['cart__top-text']}>
                    <h3>{props.name}</h3>
                    <span>{props.dimentions}</span>
                    <p>x{props.quantity}</p>
                </div>
            </div>
            <div className={styles.cart__btns}>
                <ItemQuantityBtns quantity={props.quantity} className={styles['cart__btns-quantity']} onRefreshBtn={refreshItemHandler}/>
                <span>${props.price.toFixed(2)}</span>
            </div>
        </div>
    )
}


export default CartItem