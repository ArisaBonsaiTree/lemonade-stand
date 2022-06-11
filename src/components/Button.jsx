import styled from 'styled-components'

const Button = styled.button`
    width: ${({w}) => w};
    height: ${({h}) => h};
    border: 1px solid black;
    background: ${({bg}) => bg};
    border-radius: 3px;
    color: #FFF;
    font-size: 18px;
    &:disabled{
        background: #CCC;
        color: #555;
    }
    &:hover{
        cursor: pointer;
    }
`

export default Button