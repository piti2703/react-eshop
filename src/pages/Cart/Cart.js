import styles from './Cart.module.css'
import Header from '../../components/Header/Header'

const Cart = (props) => {
    return (
        <div>
            <Header />
            <div className={styles.cart}>
                <p>YOUR CART</p>
            </div>
            
        </div>
    )
}

export default Cart