// contains all information about me

// my components
import EduDrop from './EduDrop'

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
    }

    .about-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .header {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .subheader {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: ${colors.purple};
    }



`


// about component
const About = () => {

    // jmu images
    const url1 = "https://www.jmu.edu/_images/default/JMUopengraphimage.jpg"
    const url2 = "https://www.jmu.edu/_images/about/236129-east-campus-spring-stock-1025-820x273.jpg"

    // intersection observer
    const [ref, inView] = useInView({
        threshold: 0,
    })

    // first box should have two images stack on top of each other resembling that of JMU
    // use at least this link: https://www.jmu.edu/_images/default/JMUopengraphimage.jpg
    return (
        <AboutStyled>
            <Fade in={inView} ref={ref}>
                <Box className="about-box">
                    <Box>
                        <Image  className="image"
                                src={url1} 
                                alt="JMU"
                                width="40rem" 
                                zIndex="1"                              
                                />
                        <br/>
                        <Image className='image'
                                src={url2}
                                alt="JMU"                                
                                />
                    </Box>
                    <Box className="edu-desc">
                            <EduDrop />               
                    </Box>
                </Box>
            </Fade>

        </AboutStyled>
    )
}

export default About