import styles from './Button.module.css'

const Button = (props) => {

    const classes = `${styles.btn} ${props.className}`

    let onClick

    if(props.onReset) {
        onClick = props.onReset
    }

    return (
        <button className={classes} onClick={onClick}  disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button