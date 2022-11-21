import ArrowIcon from '../../assets/arrow.png'
import styles from  './HeaderBanner.module.css'

const HeaderBanner = (props) => {
    return (
        <div className={styles.header__banner}>
            <h2>Furniture E-shop</h2>
            <h3>Check our products</h3>
            <img src={ArrowIcon} alt='arrow icon'/>
        </div>
    )
}

export default HeaderBanner