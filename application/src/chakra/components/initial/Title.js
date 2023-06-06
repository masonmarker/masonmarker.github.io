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


// common
import colors from '../../styles/colors'
import css from '../../styles/css'

// social links
import links from '../../styles/links'

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
        margin-top: 10rem;
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


    /* for mobile bubbles*/
    .topleft {}
    .topright {}
    .bottomleft {}
    .bottomright {}

    @media (max-width: 1200px) {

        /* reset all positional css properties */
        .topleft {
            top: auto;
            left: auto;
            right: auto;
            position: static;
            transform: translate(0, 0);

            margin-bottom: 1rem;
        }

        .topright {
            top: auto;
            left: auto;
            right: auto;
            position: static;
            transform: translate(0, 0);

            margin-bottom: 1rem;
        }

        .bottomleft {
            bottom: auto;
            left: auto;
            right: auto;
            position: static;
            transform: translate(0, 0);
            margin-bottom: 1rem;
        }

        .bottomright {
            bottom: auto;
            right: auto;
            left: auto;
            position: static;
            transform: translate(0, 0);
        }

        /* hide the image */
        .image {
            display: none;
        }

        .circle {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            justify-self: center;
            align-self: center;
            position: relative;
            margin-top: 15rem;
        }

        .title1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;

        }
    }

    /* --------- */




    user-select: none;
    ${css.transition}
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
            
            <ScaleFade ref={ref} in={inView}>
                    <Image className="image" boxSize="20rem" src="portrait.JPG"/>
            </ScaleFade>
            <Box className="circle">
                <Bubble to="/github" text="Projects" top="15%" left="25%" width="18rem" textcolor="darkred" className="topleft"
                    desc={["My larger ", <strong key="bubble1">programming projects</strong>]} >
                    <ArrowForwardIcon />
                </Bubble>

                <Bubble text="Knowledge" top="30%" left="25%" width="16rem" textcolor="darkblue" className="bottomleft"
                    onClick={() => {
                        // scroll to element with id edudrop
                        const element = document.getElementById("edudrop")
                        element.scrollIntoView({behavior: "smooth"})
                    }}
                    desc={[<strong key="bubble2">Languages, courses </strong>, "and", <strong key="bubble3"> more!</strong>]}>
                    <QuestionOutlineIcon />
                </Bubble>

                <Bubble text="GitHub" top="15%" left="75%" width="13rem" textcolor="gray.500" className="topright"
                    onClick={() => window.open(links.github, "_blank")}
                    desc={["Project ", <strong key="bubble4">source codes</strong>]}>
                    <ExternalLinkIcon />
                </Bubble>
                <Bubble text="Contact" top="30%" left="75%" width="13rem" className="bottomright"

                    onClick={() => {
                        // scroll to element with id edudrop
                        const element = document.getElementById("edudrop")
                        element.scrollIntoView({behavior: "smooth"})
                    }}
                    desc={[<strong key="bubble5">Email </strong>, "and ", <strong key="bubble6">Inquiries</strong>]}>
                    <EmailIcon />
                </Bubble>
            </Box>
            <ScaleFade ref={ref} in={inView} className="title1">
                <Box className="title1">
                    <Text fontFamily="heading" 
                        fontSize="xs" 
                        fontWeight="bold" 
                        color={colors.gray}
                        marginTop="5rem">Hi, I'm Mason!</Text>
                    <Text textAlign="center">
                        I'm a <strong style={{color: "maroon"}}>robotics processing engineer</strong> and 
                        <strong style={{color: "darkgreen"}}> software developer</strong>
                    </Text>
                    <Text>
                        I'm have my <i>Bachelor's</i> degree in <strong>computer science</strong> from <strong style={{color: "purple"}}>James Madison University</strong>
                    </Text>
                </Box>
            </ScaleFade>
        </TitleStyled>
    )
}

export default Title