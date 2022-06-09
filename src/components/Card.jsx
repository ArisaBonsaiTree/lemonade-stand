import styled from 'styled-components' 

const cardStyle = {
    height: '400px',
    width: '500px',
    background: '#CCC',
    border: '1px solid #FFF'
}

const StyledCard = styled.div`
    height: '400px';
    width: '500px';
    background: '#CCC';
    border: '1px solid #FFF';
    &:hover{
        background-color: #333;
    }
`

const Card = props => {
    return(
        <StyledCard>
            {props.children}
            <div style={{
                color: 'red'
            }}>
                <h2>Hello</h2>
            </div>
        </StyledCard>
    )
}

export default Card