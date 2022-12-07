import styles from './Cart.module.css'
import Header from '../../components/Header/Header'
import Card from '../../components/UI/Card'
import Button from '../../components/UI/Button'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {

    const cartCtx = useContext(CartContext)
    const cartItems =  cartCtx.items
    const cartItemsList = cartItems.map((item) => (
        <CartItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price} dimentions={item.dimentions} />
    ))

    const resetCartHandler = () => {
        cartCtx.resetCart()
    }

    return (
        <div>
            <Header />
            <div className={styles.cart}>
                <Card className={styles.cart__card}>
                    <h2>YOUR CART</h2>
                    <div className={styles.cart__items}>
                        {cartItemsList}
                        {cartCtx.items.length === 0 && <p>Your cart is empty!</p>}
                    </div>
                   <div className={styles.cart__bottom}>
                        <h4><b>Total amount: </b>${cartCtx.totalAmount.toFixed(2)}</h4>
                            {cartCtx.items.length > 0 && 
                                <div className={styles['cart__bottom-btns']}>
                                <Button className={styles['cart__bottom-btn']} onReset={resetCartHandler}>Clear</Button>
                                <Link to='/order-form'><Button className={styles['cart__bottom-btn']}>Submit your order</Button></Link>
                                </div>
                            }
                   </div>
                </Card>
            </div>
            
        </div>
    )
}

export default Cart