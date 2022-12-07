import styles from './OrderForm.module.css'
import Header from '../../components/Header/Header'
import Card from '../../components/UI/Card'
import Button from '../../components/UI/Button'
import useInput from '../../hooks/use-input'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const OrderForm = (params) => {

    const cartCtx = useContext(CartContext)




    const nameValidation = (value) => value.trim() !== '' && value.length > 5;

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(nameValidation)
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(nameValidation)
    const {
        value: enteredPhone,
        isValid: enteredPhoneIsValid,
        hasError: phoneInputHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhoneInput
    } = useInput(nameValidation)
    const {
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: cityInputHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCityInput
    } = useInput(nameValidation)
    const {
        value: enteredStreet,
        isValid: enteredStreetIsValid,
        hasError: streetInputHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreetInput
    } = useInput(nameValidation)
    const {
        value: enteredZip,
        isValid: enteredZipIsValid,
        hasError: zipInputHasError,
        valueChangeHandler: zipChangeHandler,
        inputBlurHandler: zipBlurHandler,
        reset: resetZipInput
    } = useInput(nameValidation)


    let formIsValid = false

    if(enteredNameIsValid && enteredEmailIsValid && enteredCityIsValid && enteredStreetIsValid && enteredZipIsValid && enteredPhoneIsValid) {
        formIsValid = true
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        const order = {
            name: enteredName,
            email: enteredEmail,
            city: enteredCity,
            street: enteredStreet,
            zip: enteredZip,
            phone: enteredPhone
        }
        cartCtx.addOrder(order)
        console.log(order);


        resetNameInput()
        resetEmailInput()
        resetCityInput()
        resetStreetInput()
        resetZipInput()
        resetPhoneInput()
    }

    const nameClasses = nameInputHasError ? 'form__field invalid' : 'form__field';
    const emailClasses = emailInputHasError ? 'form__field invalid' : 'form__field';
    const phoneClasses = phoneInputHasError ? 'form__field invalid' : 'form__field';
    const cityClasses = cityInputHasError ? 'form__field invalid' : 'form__field';
    const streetClasses = streetInputHasError ? 'form__field invalid' : 'form__field';
    const zipClasses = zipInputHasError ? 'form__field invalid' : 'form__field';


    return (
        <>
            <Header />
            <div className={styles.form}>
                <Card className={styles.form__card}>
                    <h2>SHIPPING INFORMATION</h2>
                    <form onSubmit={formSubmitHandler}>
                        <div className={nameClasses}>
                            <label htmlFor='name'>Name and surname</label>
                            <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
                            {nameInputHasError && (<p className='error-text'>Name must not be empty.</p>)}
                        </div>
                        <div className={emailClasses}>
                            <label htmlFor='email'>E-mail</label>
                            <input type='email' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                            {emailInputHasError && (<p className='error-text'>E-mail must not be empty.</p>)}
                        </div>
                        <div className={phoneClasses}>
                            <label htmlFor='phone'>Phone number</label>
                            <input type='phone' id='phone' value={enteredPhone} onChange={phoneChangeHandler} onBlur={phoneBlurHandler} />
                            {phoneInputHasError && (<p className='error-text'>Phone number must not be empty.</p>)}
                        </div>
                        <div className={cityClasses}>
                            <label htmlFor='city'>City</label>
                            <input type='text' id='city' value={enteredCity} onChange={cityChangeHandler} onBlur={cityBlurHandler} />
                            {cityInputHasError && (<p className='error-text'>City must not be empty.</p>)}
                        </div>
                        <div className={streetClasses}>
                            <label htmlFor='street'>Street</label>
                            <input type='text' id='street' value={enteredStreet} onChange={streetChangeHandler} onBlur={streetBlurHandler} />
                            {streetInputHasError && (<p className='error-text'>Street must not be empty.</p>)}
                        </div>
                        <div className={zipClasses}>
                            <label htmlFor='zip'>ZIP code</label>
                            <input type='text' id='zip' value={enteredZip} onChange={zipChangeHandler} onBlur={zipBlurHandler} />
                            {zipInputHasError && (<p className='error-text'>ZIP code must not be empty.</p>)}
                        </div>
                        <Button disabled={!formIsValid}>Submit your order</Button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default OrderForm