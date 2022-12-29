import styles from './Item.module.css'
import Card from '../UI/Card'
import ItemForm from './ItemForm'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

    const cartCtx = useContext(CartContext)

    const addToCartHandler = (quantity) => {

        const item = {
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price * quantity,
            dimentions: props.dimentions
        }
        cartCtx.addItem(item)
        console.log(item);
    }
    
    
    let src
    src = 'products/' + props.id


    return (
        <Card id={props.id}>
            <div className={styles.item}>
                <Link to={src} className={styles.item__first}>
                    <img src={props.thumbnail} alt='placeholder img' className={styles['item__first-img']}/>
                    <div className={styles['item__first-details']}>
                        <h3>{props.name}</h3>
                        <span>{props.dimentions}</span>
                        <p>
                        {`${props.description.substring(0,205)}...`}
                        </p>
                    </div>
                </Link>
                <div className={styles.item__last}>
                    <span className={styles['item__last-price']}>${props.price}</span>
                    <ItemForm onAddToCart={addToCartHandler} />
                </div>
            </div>
        </Card>
    )
}

export default Item