import QuantityChangeBtns from '../UI/QuantityChangeBtns'
import Button from '../UI/Button'
import styles from './ItemForm.module.css'
import { useRef } from 'react'

const ItemForm = (props) => {

    const quantityInputRef = useRef()

    

    const submitHandler = (e) => {
        e.preventDefault()


        const enteredValue = quantityInputRef.current.value
        const enteredValueNumber = +enteredValue

        props.onAddToCart(enteredValueNumber)
    }

    const classes = `${styles.form} ${props.className}`


    return (
        <form className={classes} onSubmit={submitHandler}>
            <QuantityChangeBtns quantity={1} ref={quantityInputRef} />
            <Button>Add to Cart</Button>
        </form>
    )
}

export default ItemForm