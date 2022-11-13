import styles from './Header.module.css'
import CartIcon from '../Cart/CartIcon'
import ArrowIcon from '../../assets/arrow.png'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>React E-shop</h1>
                <button className={styles.header__button}>
                    <span className={styles.header__svg}>
                        <CartIcon />
                    </span>
                    <span className={styles.header__quantity}>0</span>
                    <span>$ 0.00</span>
                </button>
            </header>
            <div className={styles.header__banner}>
                <h2>Furniture E-shop</h2>
                <h3>Check our products</h3>
                <img src={ArrowIcon} alt='arrow icon'/>
            </div>
        </>
    )
}

export default Header