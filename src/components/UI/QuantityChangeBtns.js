import styles from './QuantityChangeBtns.module.css'
import React, { useState } from 'react'

const ItemQuantityBtns = React.forwardRef((props, ref) => {

    const [quantity, setQuantity] = useState(1)

    const addQuantityValueHandler = () => {
        let newValue = quantity
        newValue++
        setQuantity(newValue)
    }
    const removeQuantityValueHandler = () => {
        let newValue = quantity
        newValue--
        setQuantity(newValue)
    }

    const bla = () => {
        setQuantity(ref.current.value)
        console.log(quantity);
    }

    return (
        <div className={styles.btns}>
            <button onClick={removeQuantityValueHandler} type='button'>-</button>
            <input onChange={bla} type='text'min='1' max='10' step='1' value={quantity}  ref={ref}/>
            <button onClick={addQuantityValueHandler} type='button'>+</button>
        </div>
    )
})

export default ItemQuantityBtns