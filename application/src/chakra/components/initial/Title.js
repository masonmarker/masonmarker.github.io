// title page for personal website

// importing components
import Nav from './Nav'
import Bubble from './Bubble'

// styled components
import styled from 'styled-components'

// chakra components
import { Text, Box, Image } from '@chakra-ui/react'
import {ArrowForwardIcon, 
        QuestionOutlineIcon, 
        ExternalLinkIcon, 
        EmailIcon 
    } from '@chakra-ui/icons'

// Chakra fade in components
import { Fade, ScaleFade } from '@chakra-ui/react'


// importing colors
import colors from '../../styles/colors'

// intersection observer
import { inView, useInView } from 'react-intersection-observer'


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
    color: black;

    .image {
        fit: cover;
        border-radius: 50%;
        user-select: none;
        position: relative;
    }

    /* center the element on this page */
    .title-fade {   
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    /* center the element on this page */
    .title1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

    }

    user-select: none;
    transition: all 0.2s ease-in-out;  

`

// front cover for the website
const Title = (props) => {

    // intersection observer
    const [ref, inView] = useInView({
        threshold: 0,
    })

    // hidden element
    


    return (
        <TitleStyled>
            <Fade ref={ref} in={inView} className="title-fade">
                <Nav/>
            </Fade>
            <Box className="circle">

                <Fade ref={ref} in={inView}>
                    <Image className="image" boxSize="20rem" src="portrait.JPG"/>  
                </Fade>


                <Fade ref={ref} in={inView}>
                    <Bubble text="Projects" top="35%" left="25%" width="18rem" 
                        desc={["My larger ", <strong>programming projects</strong>]} >
                        <ArrowForwardIcon />
                    </Bubble>
                </Fade>

                <Fade ref={ref} in={inView}>
                    <Bubble text="Knowledge" top="65%" left="25%" width="16rem"
                        desc={[<strong>Languages, courses </strong>, "and", <strong> more!</strong>]}>
                        <QuestionOutlineIcon />
                    </Bubble>
                </Fade>

                <Fade ref={ref} in={inView}>
                    <Bubble text="GitHub" top="35%" left="75%" width="13rem"
                        desc={["Project ", <strong>source codes</strong>]}>
                        <ExternalLinkIcon />
                    </Bubble>
                </Fade>
                <Fade ref={ref} in={inView}>
                    <Bubble text="Contact" top="65%" left="75%" width="13rem"
                        desc={[<strong>Email </strong>, "and ", <strong>Inquiries</strong>]}>
                        <EmailIcon />
                    </Bubble>
                </Fade>
            </Box>
            <Box className="title1">
                    <Text fontFamily="heading" fontSize="xs" fontWeight="bold" color="black" marginTop="5rem">Hi, I'm Mason</Text>
            </Box>
        </TitleStyled>
    )
}

export default Title