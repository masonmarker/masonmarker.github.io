// contains all information about me


// import styled components
import styled from 'styled-components'

// common
import colors from '../../styles/colors'
import css from '../../styles/css'

// chakra components
import { Box, Text, Fade, Image } from '@chakra-ui/react'

// intersection observer
import { inView, useInView } from 'react-intersection-observer'


// styled About
const AboutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: white;
    color: black;

    background: linear-gradient(
        10deg,
        ${colors.gray} 0%,
        ${colors.gray} 50%,
        white 50%,
        white 100% 
    );

    .image {
        fit: cover;
        ${css.borderRadius}
        ${css.boxShadow}
        user-select: none;
        position: relative;
        z-index: 1;
        margin-left: 10%;
        margin-bottom: 30vh;
    }

`


// about component
const About = () => {

    // intersection observer
    const [ref, inView] = useInView({
        threshold: 0,
    })

    // first box should have two images stack on top of each other resembling that of JMU
    // use at least this link: https://www.jmu.edu/_images/default/JMUopengraphimage.jpg
    return (
        <AboutStyled>
            <Fade in={inView}>
                <Box ref={ref}>
                    <Image className="image" src="https://www.jmu.edu/_images/default/JMUopengraphimage.jpg" alt="JMU"
                        width="50%" height="50%"
                     left="-15%" />
                    <Image src="https://www.jmu.edu/_images/about/236129-east-campus-spring-stock-1025-820x273.jpg"></Image>
                </Box>
            </Fade>

        </AboutStyled>
    )
}

export default About