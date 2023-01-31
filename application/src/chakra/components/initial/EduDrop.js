// dropdown for education components


// importing Chakra components
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image
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


// common
import colors from '../../styles/colors'
import css from '../../styles/css'

// EduDrop component
const EduDrop = () => {

    // jmu images
    const url1 = "https://www.jmu.edu/_images/default/JMUopengraphimage.jpg"
    const url2 = "https://www.jmu.edu/_images/about/236129-east-campus-spring-stock-1025-820x273.jpg"


    return (
        <div id="edudrop">
            <Accordion allowToggle
                backgroundColor={colors.gray}
                color="white"
                boxShadow={css.boxShadow}
                transition="all 0.2s ease-in-out"
                _hover={{
                    backgroundColor: colors.purple,
                    borderRadius: "10px",
                }}
            >

                <AccordionItem>
                    <AccordionButton>
                        <QuestionOutlineIcon marginRight=".7rem"/>
                        <Box flex="1" textAlign="left">
                            Me
                        </Box>
                        <AccordionIcon />

                    </AccordionButton>
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


// exporting EduDrop
export default EduDrop