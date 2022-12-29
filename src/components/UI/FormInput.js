import styles from './FormInput.module.css'

const FormInput = (props) => {
    return (
        <input {...props.input} className={styles.input} />
    )
}

export default FormInput