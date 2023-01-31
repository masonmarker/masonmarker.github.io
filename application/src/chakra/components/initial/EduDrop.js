// dropdown for education components


// importing Chakra components
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

// common
import colors from '../../styles/colors'
import css from '../../styles/css'

// EduDrop component
const EduDrop = () => {
    return (
        <Accordion allowToggle
            backgroundColor={colors.gray}
            color="white"
            boxShadow={css.boxShadow}
            borderRadius={css.borderRadius}
        >
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Education
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <p>Education</p>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}


// exporting EduDrop
export default EduDrop