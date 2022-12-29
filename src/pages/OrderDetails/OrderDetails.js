import styles from './OrderDetails.module.css'
import Header from '../../components/Header/Header'
import Card from '../../components/UI/Card'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const OrderDetails = () => {

    const cartCtx = useContext(CartContext)
    
    const productsList = cartCtx.items.map(item => (
        <ul>
            <li key={item.id}><b>{item.name}</b> ${item.price.toFixed(2) / item.quantity} x{item.quantity}</li>
        </ul>
    ))

    return (
        <>
            <Header />
            <div className={styles.order}>
                <Card className={styles.order__card}>
                    <h2>THANK YOU FOR YOUR ORDER!</h2>
                    <p>Adress data:</p>
                    <div className={styles.order__info}>
                        <p><b>Name and surname: </b>{cartCtx.orders.name}</p>
                        <p><b>E-mail: </b>{cartCtx.orders.email}</p>
                        <p><b>Phone: </b>{cartCtx.orders.phone}</p>
                        <p><b>City: </b>{cartCtx.orders.city}</p>
                        <p><b>Street: </b>{cartCtx.orders.street}</p>
                        <p><b>ZIP Code: </b>{cartCtx.orders.zip}</p>
                    </div>
                    <p>Product list:</p>
                    <div className={styles.order__products}>
                        {productsList}
                    </div>
                    <p className={styles.order__amount}><b>Amount to pay: </b>${cartCtx.totalAmount}</p>
                    <span>Order number: #1</span>
                </Card>
            </div>
        </>
    )
}

export default OrderDetails