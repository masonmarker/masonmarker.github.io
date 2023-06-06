


// styled components
import styled from 'styled-components';

// React link
import { Link as ReactLink } from 'react-router-dom';

// Chakra components
import { 
    Box,
    Text,
    Link
} from '@chakra-ui/react';

// common
import colors from '../styles/colors';

// styled Services
const ServicesStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    color: black;

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .link {
        margin-top: 1rem;
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
        color: ${colors.purple};

    }

    .link:hover {
        text-decoration: underline;
    }

`



// services component
const Services = () => {
    return (
        <ServicesStyled>
            <Box className="box">
                <Text fontWeight="bold">~ WIP ~</Text>
                <Text>Available services coming soon!</Text>
                <Link as={ReactLink} to="/" className="link">Home</Link>
            </Box>
        </ServicesStyled>
    )
}

export default Services