// Card component used for displaying its children

// Chakra components
import {
    Text
} from "@chakra-ui/react"

// styled components
import styled from "styled-components"

// common
import css from "../chakra/styles/css"

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
            <Text className="title">Donate</Text>
            <Text>{props.description}</Text>
            {props.children}
        </StyledCard>
    )
}


export default Card