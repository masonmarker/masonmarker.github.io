// front cover NavBar

// styled components
import styled from 'styled-components'

// chakra components
import { Box, Text } from "@chakra-ui/react"



const NavStyled = styled.div`

    width: 90%;
    background-color: red;

`

const Nav = () => {
    return (
        <NavStyled>
            <Text>Nav</Text>        
        </NavStyled>
    )
}


export default Nav


