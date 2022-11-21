import styles from './OrderDetails.module.css'
import Header from '../../components/Header/Header'

const OrderDetails = (params) => {
    return (
        <>
            <Header />
            <div className={styles['order-details']}>
                <p>ORDER DETAILS</p>
            </div>
        </>
    )
}

export default OrderDetails