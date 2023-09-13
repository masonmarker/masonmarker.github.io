// dropdown for education components

// css
import "../../../App.css";

// general, non-Chakra components
import {
  Languages,
  Ventures,
  linkedInClicked,
  gitClicked,
} from "../../../App.js";
import Education from "./Education";
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
  Fade,
  VStack,
  HStack,
  Card,
} from "@chakra-ui/react";

// icons
import {
  QuestionOutlineIcon,
  InfoIcon,
  CheckIcon,
  EditIcon,
  StarIcon,
  SearchIcon,
} from "@chakra-ui/icons";

// styled components
import styled from "styled-components";

// common
import colors from "../../styles/colors";
import css from "../../styles/css";

// intersection observer
import { useInView } from "react-intersection-observer";

// retrieving TikTok information tiktok-scraper
// import { getTikTokProfile } from "../../../services/tiktok";
import { to } from "./../../../msn2/docs/systemcalls";

// EduDrop component
const EduDrop = () => {
  return (
    <div
      id="edudrop"
      style={{
        fontFamily: "Monospace",
        maxHeight: "75vh",
        maxWidth: "100vw",
      }}
    >
      <Accordion
        allowToggle
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
            <Ventures />
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
  );
};

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

`;

// Hobbies component
const Hobbies = () => {
  return (
    <HobbiesStyled>
      {/* Chess */}
      <Hobby
        src="https://freerangestock.com/sample/119163/the-knight-chess-piece-vector-icon.jpg"
        alt="chess"
        text="Chess"
      />

      {/* Basketball Hobby */}
      <Hobby
        src="https://cdn.pixabay.com/photo/2014/04/03/00/33/basketball-308681_960_720.png"
        alt="basketball"
        text="Basketball"
      />

      {/* Soccer */}
      <Hobby
        src="https://www.seekpng.com/png/detail/8-82845_soccer-ball-png-transparent-image-football-ball-vector.png"
        alt="soccer"
        text="Soccer"
      />

      {/* Reading */}
      <Hobby
        src="https://i.pinimg.com/originals/f9/b7/aa/f9b7aa58991f12dd9042a3afa2082bfd.png"
        alt="reading"
        text="Reading"
      />

      {/* Investing */}
      <Hobby
        src="https://cdn.iconscout.com/icon/free/png-256/code-176-461653.png"
        alt="Investing"
        text="Investing"
      />

      {/* Coding */}
      <Hobby
        src="https://img.freepik.com/free-icon/laptop-with-code-signs-screen_318-49407.jpg"
        alt="coding"
        text="Coding"
      />

      {/* Music */}
      <Hobby
        src="https://cdn.pixabay.com/photo/2013/07/12/11/59/musical-note-145074__340.png"
        alt="music"
        text="Music"
      />

      {/* Studying */}
      <Hobby
        src="https://icon-library.com/images/book-vector-icon/book-vector-icon-25.jpg"
        alt="studying"
        text="Studying"
      />

      {/* Video Games */}
      <Hobby
        src="https://www.seekpng.com/png/detail/22-223552_video-game-controller-vector-gamepad-icon-vector.png"
        alt="Gaming"
        text="Gaming"
      />

      {/* Socializing */}
      <Hobby
        src="https://static.thenounproject.com/png/4306149-200.png"
        alt="socializing"
        text="Socializing"
      />
    </HobbiesStyled>
  );
};

const Hobby = ({ src, alt, text }) => {
  return (
    <Box className="hobby">
      <Image src={src} alt={alt} width="5rem" />
      <Text fontSize="1.5rem" fontWeight="bold">
        {text}
      </Text>
    </Box>
  );
};

const SocialsStyled = styled.div`
    display: flex;
    flex-direction: column;
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

`;

// Socials component
const Socials = () => {
  return (
    <SocialsStyled>
      <HStack>
        <Social
          src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
          alt="LinkedIn"
          text="LinkedIn"
          onClick={linkedInClicked}
        />
        <Social
          src="https://img.icons8.com/ios-filled/50/000000/github.png"
          alt="GitHub"
          text="GitHub"
          onClick={gitClicked}
        />
      </HStack>

      <Social
        className="emailsocial"
        src="https://img.icons8.com/ios-filled/50/000000/email.png"
        alt="Email"
        text="Email"
      >
        <Accordion allowToggle variant="">
          <AccordionItem>
            <AccordionButton>
              <Text>View</Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>mason1marker@gmail.com</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Social>

      {/* TikTok */}
      <Social
        src="https://img.icons8.com/ios-filled/50/000000/tiktok.png"
        alt="TikTok"
        text="TikTok"
        style={{ cursor: "default", margin: "1rem" }}
        vert="true"
        pt="1rem"
      >
        <Card p="1.3rem" maxWidth="50rem">
          <h4 className="no-margin">
            My TikTok channel demonstrates not only my technical understanding
            of various advanced <b>computer science</b> concepts, but also shows
            how these concepts can be weaved together through multiple layers of
            complexity to create something
            <b>
              <i> beautiful. </i>
            </b>
            I see TikTok as a platform by which I can display my creativity and
            determination in solving uniquely complex problems. It also gives me
            a chance to connect with people with similar mindsets, being those
            willing to commit to a goal and see it through to the end.
          </h4>
          <br />
          <h1>
            Watch me automate the process of solving a hard level{" "}
            <b>LeetCode</b> problem through <b>JS injection</b> with my{" "}
            <b>
              <i>own </i>
            </b>
            programming language, <i>on top of this,</i> I solved the problem{" "}
            <b>backwards</b>:
          </h1>

          {/* Go Button */}
          <Card
            borderRadius={css.borderRaduisVal}
            boxShadow={css.boxShadowVal}
            margin="0 auto"
            mt="1rem"
            mb="1rem"
            w="6rem"
            p="0.4rem"
            textAlign="center"
            transition={css.transition}
            _hover={{ backgroundColor: "gray.100", cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.tiktok.com/@wtfmase/video/7255826917960518954",
                "_blank"
              )
            }
          >
            <h1>
              Go to my <b>TikTok</b>
            </h1>
          </Card>
        </Card>
      </Social>
    </SocialsStyled>
  );
};

// Social component
const Social = (props) => {
  if (props.vert) {
    return (
      <VStack
        background="white"
        borderRadius={css.borderRaduisVal}
        boxShadow={css.boxShadowVal}
        {...props}
      >
        <Image src={props.src} alt={props.alt} width="2rem" />
        <Text>{props.text}</Text>
        {props.children}
      </VStack>
    );
  }
  return (
    <Box className="social" {...props}>
      <Image src={props.src} alt={props.alt} width="2rem" />
      <Text>{props.text}</Text>
      {props.children}
    </Box>
  );
};

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
`;

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
  );
};

// skill component
const Skill = (props) => {
  return (
    <Box className="skill">
      {/* make the color of the text a random but dark color 
            do not use the common 'colors' */}
      <Text
        className="title"
        color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
      >
        {props.skill}
      </Text>
      {props.children}
    </Box>
  );
};

// Me component
// should have a modern website style
const MeStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .desc {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    padding: 1rem;
    ${css.transition}
    max-width: 30rem;
  }

  .desc h4,
  h5 {
    margin: 0;
  }
`;

const Me = () => {
  // intersection observer
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <MeStyled>
      <Box className="desc">
        <Fade in={inView} ref={ref} className="desc">
          <h4>
            <b>
              <i>I'm Mason Marker</i>
            </b>
            ,
          </h4>
          <br />
          <h5>
            a <b>passionate</b> and <b>driven</b> graduate of
            <b> James Madison University </b>
            with a <b>B.S. in Computer Science</b>.
          </h5>
          <br />
          <h5>
            As I've graduated, my yearning for knowledge continues to grow. I
            believe that while understanding new logical concepts in math and
            computer science, one can find this newly obtained logic applicable
            to countless ideas outside of the areas in which they were learned.
          </h5>
          <br />
          <h5>
            I am a self-motivated individual who is always looking for new ways
            to improve myself, whether the area may be computer science,
            finances, humanities, politics, and many more.
          </h5>
          <br />
          <Card p="1rem" cursor="default" transition={css.transitionVal} _hover={{transform: css.enlargetransformVal}}>
            <h5>
              <i>
                <b>
                  Computer science is a gateway to a better ability in applying
                  logic to non-logical concepts.
                </b>
              </i>
            </h5>
          </Card>
        </Fade>
      </Box>
    </MeStyled>
  );
};

// exporting EduDrop
export default EduDrop;
