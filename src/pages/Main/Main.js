import styles from './Main.module.css'
import Header from '../../components/Header/Header'
import HeaderBanner from '../../components/Header/HeaderBanner'
import AvailableItems from '../../components/Items/AvailableItems'
import Footer from '../../components/Footer/Footer'

const Main = (params) => {
    return (
        <>
            <Header />
            <HeaderBanner />
            <AvailableItems />
            <Footer />
        </>
    )
}

export default Main