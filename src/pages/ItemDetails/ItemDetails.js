import styles from './ItemDetails.module.css'
import Header from '../../components/Header/Header'
import Card from '../../components/UI/Card'
import { useParams } from 'react-router-dom'
import ItemForm from '../../components/Items/ItemForm'
import useHttp from '../../hooks/use-http'
import { useContext, useState } from 'react'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
import CartContext from '../../store/cart-context'

const ItemDetails = (props) => {
    const params = useParams()
    const [item, setItem] = useState([])


    const transformItem = (itemsObj) => {
        const itemData = itemsObj[params.itemId]
        setItem(itemData)
    }

    const {isLoading, httpError}  = useHttp({url: 'https://furniture-6a2e0-default-rtdb.firebaseio.com/furniture.json'}, transformItem)

    const cartCtx = useContext(CartContext)

    const addToCartHandler = (quantity) => {

        const itemToAdd = {
            id: params.itemId,
            name: item.name,
            quantity: quantity,
            price: item.price * quantity,
            dimentions: item.dimentions
        }
        cartCtx.addItem(itemToAdd)
    }

    if(isLoading) {
        return (
            <>
                <Header />
                <LoadingSpinner />
            </>
        )
    }

    if(httpError) {
        return (
            <div>
                <p className='error'>{httpError}</p>
            </div>
        )
    }
    
    return (
        <>
            <Header />
            <div className={styles.item}>
                <Card className={styles.item__card}>
                    <h3>{item.name}</h3>
                    <div className={styles.item__content}>
                        <div className={styles.item__photos}>
                            <img src={item.photo1} className={styles.item__thumbnail} alt='Item photo1' />
                            <div className={styles['item__mini']}>
                                <img src={item.photo2} className={styles.item__photo} alt='Item photo2' />
                                <img src={item.photo3} className={styles.item__photo} alt='Item photo3' />
                                <img src={item.photo4} className={styles.item__photo} alt='Item photo4' />
                            </div>
                        </div>
                        <div className={styles.item__form}>
                            <p>${item.price}</p>
                           <ItemForm className={styles.item__btns} onAddToCart={addToCartHandler} />
                           <ul>
                                <li><i className="fa-solid fa-truck"></i>Free delivery from $499</li>
                                <li><i className="fa-solid fa-arrow-rotate-left"></i>30 days to return the product</li>
                                <li><i className="fa-solid fa-credit-card"></i>Secure PayPal payments</li>
                           </ul>
                        </div>
                    </div>
                    <div className={styles.item__description}>
                            <h5>Description</h5>
                            <p>{item.description}</p>
                        </div>
                </Card>
            </div>
        </>
    )
}

export default ItemDetails