import styles from './QuantityChangeBtns.module.css'
import React, {useState } from 'react'

const ItemQuantityBtns = React.forwardRef((props, ref) => {

    const [quantity, setQuantity] = useState(props.quantity)



    const addQuantityValueHandler = () => {
        let newValue = quantity
        newValue++
        setQuantity(newValue)


        if(props.onRefreshBtn) {
            props.onRefreshBtn(newValue)
        }
    }
    const removeQuantityValueHandler = () => {
        let newValue = quantity
        newValue--

        if(newValue < 1) {
            return
        }

        setQuantity(newValue)

        if(props.onRefreshBtn) {
            props.onRefreshBtn(newValue)
        }
    }

    const bla = () => {
        setQuantity(ref.current.value)
    }


    const classes  = `${styles.btns} ${props.className}`

    return (
        <div className={classes}>
            <button onClick={removeQuantityValueHandler} type='button'>-</button>
            <input onChange={bla} type='text'min='1' max='10' step='1' value={quantity}  ref={ref}/>
            <button onClick={addQuantityValueHandler} type='button'>+</button>
        </div>
    )
})

export default ItemQuantityBtns