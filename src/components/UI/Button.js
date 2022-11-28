import styles from './Button.module.css'

const Button = (props) => {

    const classes = `${styles.btn} ${props.className}`


    return (
        <button className={classes} onClick={props.onReset}>
            {props.children}
        </button>
    )
}

export default Button