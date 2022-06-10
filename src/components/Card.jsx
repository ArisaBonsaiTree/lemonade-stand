import styled from 'styled-components' 

const StyledCard = styled.div`
    height: 300px;
    width: 400px;
    background: #16697A;
    border-radius: 50px;    
    border: 1px solid #FFF;
    color: #EBEBD3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Card = props => {
    return(
        <StyledCard background='#ccc'>
            {props.children}
            <div style={{
                color: 'red'
                }}>
            </div>
        </StyledCard>
    )
}

export default Card