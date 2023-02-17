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


`

// card component
const Card = (props) => {
    return (
        <StyledCard>
            <Title title={props.title} />
            <p>{props.description}</p>
            {props.children}
        </StyledCard>
    )
}


export default Card