import { useState, useEffect, useContext } from 'react'
import styles from './AvailableItems.module.css'
import Item from './Item'
import LoadingSpinner from '../UI/LoadingSpinner'
import CartContext from '../../store/cart-context'

const AvailableItems = (props) => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState()


    useEffect(() => {
        const itemsFetch = async () => {
            const response = await fetch('https://furniture-6a2e0-default-rtdb.firebaseio.com/furniture.json')
            const data = await response.json();
    
            if(!response.ok) {
                throw new Error('Something went wrong')
            }    
            const loadedData = []
    
            for (const key in data) {
               const item = {
                id: key,
                name: data[key].name,
                dimentions: data[key].dimentions,
                price: data[key].price,
                description: data[key].description
               }
               loadedData.push(item)
            }
            setIsLoading(false)
            setItems(loadedData)
            props.onShowFooter()
        }
        itemsFetch().catch((error) => {
            setIsLoading(false)
            setHttpError(error.message)
        })
    }, [isLoading])

    if(isLoading) {
        return (
            <LoadingSpinner />
        )
    }

    if(httpError) {
        return (
            <div>
                <p>{httpError}</p>
            </div>
        )
    }
    
    const itemsList = items.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} dimentions={item.dimentions} price={item.price} description={item.description} />
    ))



    return (
        <div className={styles.items}>
            {itemsList}
        </div>
    )
}

export default AvailableItems