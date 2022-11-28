import styles from './Card.module.css'

const Card = (props) => {

    const classNames = `${styles.card} ${props.className}`

    return (
        <div className={classNames} key={props.id}>
            {props.children}
        </div>
    )
}


export default Card