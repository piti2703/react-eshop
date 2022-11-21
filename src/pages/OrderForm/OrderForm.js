import styles from './OrderForm.module.css'
import Header from '../../components/Header/Header'

const OrderForm = (params) => {
    return (
        <>
            <Header />
            <div className={styles['order-form']}>
                <p>ORDER FORM</p>
            </div>
        </>
    )
}

export default OrderForm