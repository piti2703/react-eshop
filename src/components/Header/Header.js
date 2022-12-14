import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import CartIcon from '../../pages/Cart/CartIcon'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const Header = () => {

    const cartCtx = useContext(CartContext)
    const itemsQuantity = cartCtx.items.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.quantity 
    }, 0)

    const resetCart = () => {
        if(cartCtx.orders.name) {
                    cartCtx.resetCart()
                    console.log('test');
        }
    }
    

    return (
        <>
            <header className={styles.header}>
                <Link to='/' onClick={resetCart} className={styles.header__logo}>React E-shop</Link>
                <Link to={'/cart'} onClick={resetCart} className={styles.header__button}>
                    <span className={styles.header__svg}>
                        <CartIcon />
                    </span>
                    <span className={styles.header__quantity}>{itemsQuantity}</span>
                    <span>$ {cartCtx.totalAmount.toFixed(2)}</span>
                </Link>
            </header>
        </>
    )
}

export default Header