// Card component used for displaying its children

// Chakra components
import {
    Box,
    Text,
    Button
} from "@chakra-ui/react"

// showing / hiding PayPal component
import { useState } from "react"

// text imports
import Title from "./Text"

// styled components
import styled from "styled-components"

// serial for PayPal button ID
var serial = 0

// Card component, used for displaying its children in a card like format
const StyledCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    width: fit-content;
    margin: 1rem;
    
    padding: 0.5rem;
`

// card component
const Card = (props) => {
    const btnID = "ex:button" + serial++

    return (
        <StyledCard>


            <Title title={props.title} />
            <p>{props.description}</p>

            {props.children}

        </StyledCard>
    )
}


export default Card