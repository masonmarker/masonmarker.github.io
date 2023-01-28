// title page for personal website

// importing components
import Nav from './Nav'
import Bubble from './Bubble'

// styled components
import styled from 'styled-components'

// chakra components
import { Box, Image } from '@chakra-ui/react'
import {ArrowForwardIcon, 
        QuestionOutlineIcon, 
        ExternalLinkIcon, 
        EmailIcon 
    } from '@chakra-ui/icons'

// importing colors
import colors from '../../styles/colors'


// styled App
// background color should be perfectly divided in half, diagonally,
// with the top half being a light blue and the bottom half being a dark blue
const TitleStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    background: linear-gradient(
        10deg,
        white 0%,
        white 50%,
        ${colors.blue} 50%,
        ${colors.blue} 100% 
    );

    .image {
        fit: cover;
        border-radius: 50%;
        user-select: none;
    }

    user-select: none;
    transition: all 0.2s ease-in-out;  

`

// front cover for the website
const Title = (props) => {



    return (
        <TitleStyled>
            <Nav/>
            <Box className="circle">
                <Image className="image" boxSize="20rem" src="portrait.JPG"/>  
                <Bubble text="Projects" top="35%" left="25%" width="10rem" background={props.mode}>
                    <ArrowForwardIcon />
                </Bubble>
                <Bubble text="Knowledge" top="65%" left="25%" width="12rem" background={props.mode}>
                    <QuestionOutlineIcon />
                </Bubble>

                <Bubble text="GitHub" top="35%" left="75%" width="10rem" background={props.mode}>
                    <ExternalLinkIcon />
                </Bubble>

                <Bubble text="Contact" top="65%" left="75%" width="10rem" background={props.mode}>
                    <EmailIcon />
                </Bubble>


            </Box>
        </TitleStyled>
    )
}

export default Title