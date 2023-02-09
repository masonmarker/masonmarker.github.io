// dropdown for education components

// general, non-Chakra components
import {Education} from '../../../App.js'

// importing Chakra components
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image,
    Text,
    Fade
  } from '@chakra-ui/react'

// icons
import {
    ArrowForwardIcon,
    QuestionOutlineIcon,
    InfoIcon,
    CheckIcon,
    EditIcon,
    StarIcon
} from '@chakra-ui/icons'

// styled components
import styled from 'styled-components'

// common
import colors from '../../styles/colors'
import css from '../../styles/css'

// intersection observer
import { inView, useInView } from 'react-intersection-observer'

// EduDrop component
const EduDrop = () => {

    // jmu images
    const url1 = "https://www.jmu.edu/_images/default/JMUopengraphimage.jpg"
    const url2 = "https://www.jmu.edu/_images/about/236129-east-campus-spring-stock-1025-820x273.jpg"


    return (
        <div id="edudrop" style={{
            fontFamily: "Monospace",
        }}>
            <Accordion allowToggle
                boxShadow={css.boxShadow}
                transition="all 0.2s ease-in-out"
                backgroundColor={colors.blue}
                color="black"
                _hover={{borderRadius: "10px"}}
            >

                <AccordionItem>
                    <AccordionButton>
                        <QuestionOutlineIcon marginRight=".7rem"/>
                        <Box flex="1" textAlign="left">
                            Me
                        </Box>
                        <AccordionIcon />

                    </AccordionButton>
                    <AccordionPanel pb={4} color="black">
                        <Me/>
                    </AccordionPanel>

                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>

                        <InfoIcon marginRight=".7rem"/>
                        <Box flex="1" textAlign="left">
                            Education
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    {/* <Image 
                        src={url1} 
                        alt="JMU"
                        width="40rem" 
                        zIndex="1"    
                        borderRadius={css.borderRadius}      
                        boxShadow={css.boxShadow}                    
                        />
                    <Text fontSize="2rem" color={colors.purple} fontWeight="bold">James Madison University</Text>
                     */}

                        <Education/>

                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <CheckIcon marginRight=".7rem"/>
                        <Box flex="1" textAlign="left">
                            Experience
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <p>Experience</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                    <EditIcon marginRight=".7rem"/>

                        <Box flex="1" textAlign="left">
                            Skills
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                    <StarIcon marginRight=".7rem"/>
                        <Box flex="1" textAlign="left">
                            Hobbies
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </AccordionItem>



            </Accordion>
        </div>
    )
}


// Me component
// should have a modern website style
const MeStyled = styled.div`
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    .header {
        font-weight: bold;
        margin-bottom: 1rem;
        color: black;
    }
    .desc {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: black;
        padding: 1rem;
        ${css.transition}
    }

`

const Me = () => {

    // intersection observer
    const [ref, inView] = useInView({
        threshold: 0,
    })

    return (
        <MeStyled>
            <Box className="desc">
                <Text className="header" color="black">I'm Mason Marker,</Text>
                <Fade in={inView} ref={ref} className="desc">
                    <Text>a passionate and driven senior computer science major
                        at James Madison University.
                    </Text>
                    <br/>
                    <Text>
                        In my senior year, my yearning for knowledge
                        continues to grow. I believe that while understanding new logical concepts in math
                        and computer science, one can find this newly obtained logic applicable to countless ideas
                        outside of the areas in which they were learned.
                    </Text>
                    <br/>
                    <Text>
                        I am a self-motivated individual who is always looking for new ways to improve myself,
                        whether the area may be computer science, finances, humanities, politics, and many more.
                    </Text>
                    <br/>
                    <Text>
                        <i>Computer science is a gateway to a better ability to apply logic to non-logical concepts.</i>
                    </Text>
                </Fade>
            </Box>
        </MeStyled>
    )
}




// exporting EduDrop
export default EduDrop