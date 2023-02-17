// dropdown for education components

// general, non-Chakra components
import { Languages, Ventures, linkedInClicked, gitClicked } from '../../../App.js'
import Education from './Education'

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
    StarIcon,
    SearchIcon
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

    return (
        <div id="edudrop" style={{
            fontFamily: "Monospace",
            maxHeight: "75vh",
            maxWidth: "100vw",
        }}>
            <Accordion allowToggle
                boxShadow={css.boxShadow}
                transition="all 0.2s ease-in-out"
                backgroundColor={colors.blue}
                color="black"
                _hover={{ borderRadius: "10px" }}
            >

                <AccordionItem>
                    <AccordionButton>
                        <QuestionOutlineIcon marginRight=".7rem" />
                        <Box flex="1" textAlign="left">
                            Me
                        </Box>
                        <AccordionIcon />

                    </AccordionButton>
                    <AccordionPanel pb={4} color="black">
                        <Me />
                    </AccordionPanel>

                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>

                        <InfoIcon marginRight=".7rem" />
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

                        <Education />

                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <CheckIcon marginRight=".7rem" />
                        <Box flex="1" textAlign="left">
                            Experience
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Ventures/>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <EditIcon marginRight=".7rem" />
                        <Box flex="1" textAlign="left">
                            Skills
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <GeneralSkills />
                        <Languages />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <StarIcon marginRight=".7rem" />
                        <Box flex="1" textAlign="left">
                            Hobbies
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Hobbies />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <SearchIcon marginRight=".7rem" />
                        <Box flex="1" textAlign="left">
                            Socials
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Socials />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

// styled Hobbies
const HobbiesStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .hobby {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        ${css.boxShadow}
        ${css.borderRadius}
        ${css.transition}
        background-color: white;
        cursor: default;
    }

    .hobby:hover {
        transform: scale(1.1);
    }

`   

// Hobbies component
const Hobbies = () => {
    return (
        <HobbiesStyled>  
            {/* Chess */}
            <Hobby src="https://freerangestock.com/sample/119163/the-knight-chess-piece-vector-icon.jpg" alt="chess" text="Chess" />      
            
            {/* Basketball Hobby */}
            <Hobby src="https://cdn.pixabay.com/photo/2014/04/03/00/33/basketball-308681_960_720.png" alt="basketball" text="Basketball" />
        
            { /* Soccer */ }
            <Hobby src="https://www.seekpng.com/png/detail/8-82845_soccer-ball-png-transparent-image-football-ball-vector.png" alt="soccer" text="Soccer" />

            {/* Reading */}
            <Hobby src="https://i.pinimg.com/originals/f9/b7/aa/f9b7aa58991f12dd9042a3afa2082bfd.png" alt="reading" text="Reading" />

            {/* Investing */}
            <Hobby src="https://cdn.iconscout.com/icon/free/png-256/code-176-461653.png" alt="Investing" text="Investing" />

            {/* Coding */}
            <Hobby src="https://img.freepik.com/free-icon/laptop-with-code-signs-screen_318-49407.jpg" alt="coding" text="Coding" />
        
            {/* Music */}
            <Hobby src="https://cdn.pixabay.com/photo/2013/07/12/11/59/musical-note-145074__340.png" alt="music" text="Music" />
        </HobbiesStyled>
    )
}

const Hobby = ({ src, alt, text }) => {
    return (
        <Box className="hobby">
            <Image src={src} alt={alt} width="5rem" />
            <Text fontSize="1.5rem" fontWeight="bold">{text}</Text>
        </Box>
    )
}

const SocialsStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .social {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        ${css.boxShadow}
        ${css.borderRadius}
        ${css.transition}
        background-color: white;
        cursor: default;
    }

    .social:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    .emailsocial {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        ${css.boxShadow}
        ${css.borderRadius}
        ${css.transition}
        background-color: white;
        cursor: default;
    }

`

// Socials component
const Socials = () => {
    return (
        <SocialsStyled>
            <Social src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" text="LinkedIn"
                onClick={linkedInClicked}
            />
            <Social src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" text="GitHub"
                onClick={gitClicked}
            />
            <Social className="emailsocial" src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email" text="Email">
                <Accordion allowToggle variant="">
                    <AccordionItem>
                        <AccordionButton>
                            <Text>View</Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text>
                                mason1marker@gmail.com
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Social>

        </SocialsStyled>
    )
}



// Social component
const Social = (props) => {
    return (
        <Box className="social" {...props}>
            <Image src={props.src} alt={props.alt} width="2rem" />
            <Text>{props.text}</Text>
            {props.children}
        </Box>
    )
}


// styled GeneralSkills component
const GeneralSkillsStyled = styled.div`

    /* group all children together randomely*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
        font-weight: bold;
    }

    /* as a card component */
    .skill {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        ${css.boxShadow}
        ${css.borderRadius}
        ${css.transition}
        background-color: white;
        cursor: default;
    }

    .skill:hover {
        transform: scale(1.05);
    }
`

// general skills component underneath language understanding
const GeneralSkills = () => {
    return (
        <GeneralSkillsStyled>
            <Skill skill="Logic and Reasoning" />
            <Skill skill="Problem Solving" />
            <Skill skill="Communication" />
            <Skill skill="Leadership" />
            <Skill skill="Development in a team" />
            <Skill skill="Time Management" />
            <Skill skill="Calculus and Statistics" />
            <Skill skill="Data Structures and Algorithms" />
            <Skill skill="Object Oriented Programming" />
            <Skill skill="Web Development" />
            <Skill skill="Machine Learning" />
        </GeneralSkillsStyled>
    )
}

// skill component
const Skill = (props) => {
    return (
        <Box className="skill">

            {/* make the color of the text a random but dark color 
            do not use the common 'colors' */}
            <Text className="title" color={"#" + Math.floor(Math.random() * 16777215).toString(16)}>{props.skill}</Text>
            {props.children}
        </Box>
    )
}


// Me component
// should have a modern website style
const MeStyled = styled.div`
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
                    <br />
                    <Text>
                        In my senior year, my yearning for knowledge
                        continues to grow. I believe that while understanding new logical concepts in math
                        and computer science, one can find this newly obtained logic applicable to countless ideas
                        outside of the areas in which they were learned.
                    </Text>
                    <br />
                    <Text>
                        I am a self-motivated individual who is always looking for new ways to improve myself,
                        whether the area may be computer science, finances, humanities, politics, and many more.
                    </Text>
                    <br />
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