import { useState} from 'react'
import styles from './AvailableItems.module.css'
import Item from './Item'
import LoadingSpinner from '../UI/LoadingSpinner'
import useHttp from '../../hooks/use-http'

const AvailableItems = (props) => {

    const [items, setItems] = useState([])

    const transformItems = (itemsObj) => {

        const loadedData = []
    
            for (const key in itemsObj) {
               const item = {
                id: key,
                name: itemsObj[key].name,
                dimentions: itemsObj[key].dimentions,
                price: itemsObj[key].price,
                description: itemsObj[key].description,
                thumbnail: itemsObj[key].thumbnail,
                photo1: itemsObj[key].photo1, 
                photo2: itemsObj[key].photo2, 
                photo3: itemsObj[key].photo3, 
                photo4: itemsObj[key].photo4, 
               }
               loadedData.push(item)
               props.onShowFooter()
            }

            setItems(loadedData)

    }

    const {isLoading, httpError}  = useHttp({url: 'https://furniture-6a2e0-default-rtdb.firebaseio.com/furniture.json'}, transformItems)

    
    if(isLoading) {
        return (
            <LoadingSpinner />
        )
    }

    if(httpError) {
        return (
            <div>
                <p className='error'>{httpError}</p>
            </div>
        )
    }
    



    const itemsList = items.map((item) => {
        return (
            <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            dimentions={item.dimentions} 
            price={item.price} 
            description={item.description} 
            thumbnail={item.thumbnail}
            photo1={item.photo1}
            photo2={item.photo2}
            photo3={item.photo3}
            photo4={item.photo4}
            />
        )
})



    return (
        <div className={styles.items}>
            {itemsList}
        </div>
    )
}

export default AvailableItems