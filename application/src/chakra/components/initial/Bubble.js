// bubble for the initial screen 


// import styled components
import styled from 'styled-components'

// import chakra components
import {Box, 
        Text,
        Link
    } from "@chakra-ui/react"


// common
import css from '../../styles/css'
import colors from '../../styles/colors'



// react routing
import { Link as ReactLink } from 'react-router-dom'

// Bubble component
// props: text, distance from center (radius)
const Bubble = (props) => {

    // styled Bubble,
    // props: text, radius
    // should be a styled Chakra link as ReactLink
    const BubbleStyled = styled(Link).attrs({
        // if asreact, then as: ReactLink is passed in
        // if not, then as: Link is passed in
        as: ReactLink,
        to: props.to,
        path: props.path,
        onClick: props.onClick
    })`
    

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
        font-size: 1.6rem;

        ${css.transition}

        &:hover {
            cursor: pointer;
            background-color: ${colors.lightGray};
            border-radius: 1rem;
        }

        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .desc {
            font-size: 0.8rem;
            font-weight: normal;
            color: ${colors.gray};
        }
`

    return (
        <BubbleStyled {...props}>
            {props.children}
            <Box className="info">
                <Text variant="bubble" color={props.textcolor}>{props.text}</Text>
                <Text variant="bubble" className="desc">{props.desc}</Text>
            </Box>
        </BubbleStyled>
    )
}


export default Bubble

