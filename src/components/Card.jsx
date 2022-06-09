const cardStyle = {
    height: '400px',
    width: '500px',
    background: '#CCC',
    border: '1px solid #FFF'
}

const Card = props => {
    return(
        <div style={cardStyle}>
            {props.children}
            <div style={{
                color: 'red'
            }}>
                <h2>Hello</h2>
            </div>
        </div>
    )
}

export default Card