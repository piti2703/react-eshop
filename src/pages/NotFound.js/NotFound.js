import Header from "../../components/Header/Header"
import styles from './NotFound.module.css'

const NotFound = () => {
    return (

        <>
            <Header />
            <p className={styles.text}>Page not found!</p>
        </>

    )
}

export default NotFound