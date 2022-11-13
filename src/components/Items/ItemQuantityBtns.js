import styles from './ItemQuantityBtns.module.css'

const ItemQuantityBtns = () => {
    return (
        <div className={styles.btns}>
            <button>-</button>
            <input type='number' defaultValue='1' min='1' max='10' step='1' />
            <button>+</button>
        </div>
    )
}

export default ItemQuantityBtns