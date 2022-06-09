const productStyle = {
    display: 'flex',
    color: 'blue'
}

const countStyle = {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}


const Product = props => {
    return (
        <div className={productStyle}>
            <h2 style={{width: '60%'}}>{props.name}</h2>
            
            <div className={countStyle}>
                <button onClick={props.increment}>+</button>
                <h4>{props.amount}</h4>
                {props.amount > 0 ? (
                    <button onClick={props.decrement}>-</button>
                ) : (
                    undefined
                )}
            </div>
        </div>
    )
}

export default Product