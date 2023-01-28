// bubble for the initial screen 


// import styled components
import styled from 'styled-components'

// import chakra components
import {Box, 
        Text,
    } from "@chakra-ui/react"


// common
import css from '../../styles/css'
import colors from '../../styles/colors'



// Bubble component
// props: text, distance from center (radius)
const Bubble = (props) => {

    // styled Bubble,
    // props: text, radius
    const BubbleStyled = styled(Box)`

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: ${props.width};
        padding: 1rem;
        top: ${props.top};
        left: ${props.left};

        background-color: white;
        border-radius: 3rem;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 1;
        ${css.boxShadow}
        
        font-weight: bold;

        transition: all 0.2s ease-in-out;

        &:hover {
            cursor: pointer;
            background-color: ${colors.lightGray};
            border-radius: 1rem;
        }
`

    return (
        <BubbleStyled {...props}>
            {props.children}
            <Text variant="bubble">{props.text}</Text>
        </BubbleStyled>
    )
}


export default Bubble

