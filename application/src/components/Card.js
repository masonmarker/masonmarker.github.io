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

// common
import css from "../chakra/styles/css"

// serial for PayPal button ID
var serial = 0

// Card component, used for displaying its children in a card like format
const StyledCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: fit-content;
    max-width: 95vw;
    padding: 0.5rem;

    ${css.boxShadow}
    ${css.borderRadius}
<<<<<<< HEAD
=======

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0.5rem;
    }

>>>>>>> c183f4ad4e27c8996dc2566434c2eb460f5d958e
`

// card component
const Card = (props) => {
    return (
        <StyledCard>
            <Text className="title">Donate</Text>
            <Text>{props.description}</Text>
            {props.children}
        </StyledCard>
    )
}


export default Card