// button for normal things

import styled from 'styled-components'  

// import react link
import { Link } from 'react-router-dom'


// button style
const ButtonStyled = styled.button`
    background-color: #f2f2f2;
    border: 1px solid gray;
    border-radius: 5px;
    margin-top: 0.5rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #e6e6e6;
    }

`


// button component
const Button = (props) => {
    return (
        <ButtonStyled>
            <p id={props.buttonid}>{props.text}</p>
        </ButtonStyled>
    )
}

export default Button
