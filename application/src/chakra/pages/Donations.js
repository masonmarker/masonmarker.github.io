// page for donations
// page was created mainly to learn React hooks

// PayPal components
import Card from "../../components/Card";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// styled components
import styled from "styled-components";

// Chakra components
import {
  Box,
  Button,
  Text,
  Link as ChakraLink,

  // slider
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Input,
  ChakraProvider,
} from "@chakra-ui/react";

// checkmark icon Chakra
import { CheckIcon } from "@chakra-ui/icons";

// paypal imports
import Paypal from "../../components/Paypal";

// react use state
import { useState } from "react";

// common
import colors from "../styles/colors";
import css from "../styles/css";

// react link
import { Link } from "react-router-dom";

// styled donations
const DonationsStyled = styled.div`
  font-family: monospace;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: black;

  .button {
    background-color: white;
    color: black;
    border: none;
    font-size: 1.5rem;
    font-family: monospace;
    padding: 1rem;
    margin: 1rem;

    ${css.borderRadius}
    ${css.boxShadow}

        cursor: pointer;
    ${css.transition}

    &:hover {
      transform: scale(1.05);
    }
  }

  .link {
    font-size: 1.2rem;
    color: ${colors.purple};
  }

  .slider {
    width: 80%;
  }

  .inp {
    width: 50%;
    border: 2px solid ${colors.purple};
  }

  .choose {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .chooseinside {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

// PayPal client ID
const clientID =
  "ASKarcoEUfnemnoA3CVmI5Btu6ZovXfPTXWBkRilPDI_oCplouusH8kvdbxJueT6Yib_GYa3JCx2BWkp";

// Donations component
const Donations = () => {
  // state for showing paypal component
  const [showPay, setShowPay] = useState(false);
  const [showChoose, setShowChoose] = useState(false);

  function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  const handleChange = (e) => setShowPay(false);

  const CustomSlider = () => {
    // state for slider value
    const [sliderValue, setSliderValue] = useState(false);

    // computes the current $ value based on the slider value
    function computeValue(value) {
      return value < 33 ? 1 : value < 67 ? 5 : value < 100 ? 10 : "Choose";
    }

    return (
      <Slider
        aria-label="slider-ex-6"
        colorScheme="purple"
        onChange={(val) => {
          setShowPay(false);
          setShowChoose(false);
          setSliderValue(val);
          // there are 4 marks,
          // the first interval is $1
          // the second interval is $5
          // the third interval is $10
          // the fourth interval is "Choose"

          const result = computeValue(val);
          result === "Choose"
            ? (document.getElementById("dollar1").innerHTML = `${result}`)
            : (document.getElementById("dollar1").innerHTML = `$${result}`);
        }}
        className="slider"
      >
        <SliderMark value={0}>$1</SliderMark>
        <SliderMark value={33}>$5</SliderMark>
        <SliderMark value={67}>$10</SliderMark>
        <SliderMark value={100}>Choose</SliderMark>

        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        ></SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    );
  };

  return (
    <PayPalScriptProvider options={{ "client-id": clientID }}>
      <ChakraProvider>
        <DonationsStyled>
          <Card
            title="Donate"
            description="
                    All donations will
                    be used to both fund my schooling and start / scale new projects.
                "
          >
            <ChakraLink className="link" as={Link} to="/">
              Home
            </ChakraLink>

            <CustomSlider />

            <Button
              className="button"
              id="dollar1"
              onClick={() => {
                const but = document.getElementById("dollar1");
                if (but.innerHTML === "Choose") {
                  setShowChoose(true);
                  setShowPay(false);
                } else {
                  setShowPay(true);
                  setShowChoose(false);
                }
              }}
            >
              $5
            </Button>

            {showChoose ? (
              <Box className="choose">
                <Text>Type an amount</Text>
                <Box className="chooseinside">
                  <Text>$</Text>
                  <Input className="inp" onChange={handleChange} />
                  <Button
                    className="button"
                    onClick={() => {
                      const inp = document.getElementsByClassName("inp")[0];
                      if (isNumeric(inp.value)) {
                        document.getElementById(
                          "dollar1"
                        ).innerHTML = `$${inp.value}`;
                        setShowPay(true);
                      } else {
                        alert("Please enter a number");
                      }
                    }}
                  >
                    <CheckIcon />
                  </Button>
                </Box>
              </Box>
            ) : null}

            {showPay ? (
              <Paypal
                amount={document
                  .getElementById("dollar1")
                  .innerHTML.replace("$", "")
                  .replace(": Cancel", "")}
              />
            ) : null}
          </Card>
        </DonationsStyled>
      </ChakraProvider>
    </PayPalScriptProvider>
  );
};

export default Donations;
