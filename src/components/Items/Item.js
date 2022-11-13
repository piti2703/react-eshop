import styles from './Item.module.css'
import Card from '../UI/Card'
import ItemQuantityBtns from './ItemQuantityBtns'
import AddToCartBtn from '../UI/AddToCartBtn'

const Item = (props) => {
    return (
        <Card id={props.id}>
            <div className={styles.item}>
                <div className={styles.item__first}>
                    <img src='https://placehold.jp/300x200.png' alt='placeholder img' className={styles['item__first-img']}/>
                    <div className={styles['item__first-details']}>
                        <h3>{props.name}</h3>
                        <span>{props.dimentions}</span>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, justo non gravida dapibus, sapien nibh suscipit enim, eget malesuada dolor ipsum id sapien. Proin lobortis metus at ante elementum...
                        </p>
                    </div>
                </div>
                <div className={styles.item__last}>
                    <span className={styles['item__last-price']}>${props.price}</span>
                    <div  className={styles['item__last-quantity']}>
                       <ItemQuantityBtns />
                       <AddToCartBtn />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Item