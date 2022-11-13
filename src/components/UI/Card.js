import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.card} key={props.id}>
            {props.children}
        </div>
    )
}


export default Card