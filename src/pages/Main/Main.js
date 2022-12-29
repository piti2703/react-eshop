// import styles from './Main.module.css'
import Header from '../../components/Header/Header'
import HeaderBanner from '../../components/Header/HeaderBanner'
import AvailableItems from '../../components/Items/AvailableItems'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'


const Main = () => {

    const [itemsIsVisible, setItemsIsVisible] = useState(false)


    const showFooterHandler = () => {
        setItemsIsVisible(true)
    }


    return (
        <>
            <Header />
            <HeaderBanner />
            <AvailableItems onShowFooter={showFooterHandler} />
            {itemsIsVisible && <Footer />} 
        </>
    )
}

export default Main