import styles from './ItemDetails.module.css'
import Header from '../../components/Header/Header'

const ItemDetails = (props) => {
    return (
        <>
            <Header />
            <div className={styles.item}>
                <p>ITEM DETAILS</p>
            </div>
        </>
    )
}

export default ItemDetails