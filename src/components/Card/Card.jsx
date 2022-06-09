import styles from './Card.module.css'

const Card = props => {
    return(
        <div className={styles.Card}>
            {props.children}
            <div className={styles.Product}>
                <h2>Hello</h2>
            </div>
        </div>
    )
}

export default Card