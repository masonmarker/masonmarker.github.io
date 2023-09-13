// smaller NavBar for second page

// my components
import EduDrop from "./EduDrop";

// styled components
import styled from "styled-components";

// common
import colors from "../../styles/colors";

// chakra components
import { Box, Text } from "@chakra-ui/react";

// chakra icons
import { InfoIcon } from "@chakra-ui/icons";

// styled About
const SmallNavStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 10vh;
  color: black;

  .header {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${colors.gray};
    user-select: none;
  }

  .whoami {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

// SmallNav component
const SmallNav = () => {
  return (
    <SmallNavStyled>
      <Box>
        <Box className="whoami">
          <InfoIcon color={colors.blue} />
          <Text className="header">WHO AM I?</Text>
        </Box>
        <EduDrop />
      </Box>
    </SmallNavStyled>
  );
};

export default SmallNav;
