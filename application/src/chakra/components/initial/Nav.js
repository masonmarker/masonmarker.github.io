// front cover NavBar

// my components
import Divider from '../general/Divider'

// styled components
import styled from 'styled-components'

// chakra components
import { Box, Text, Image, Icon } from "@chakra-ui/react"

// common css
import css from '../../styles/css'

// main navbar
const NavStyled = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    width: 90%;
    padding: 0.5rem;
    margin-top: 1.5rem;
    background-color: white;
    ${css.boxShadow}
    ${css.borderRadius}

    user-select: none;

    .main {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

const Nav = () => {
    return (
        <NavStyled>
            <div className="main">
                <Image src="favicon.ico" boxSize={20}/>
                <Text><pre>.  Marker  </pre></Text> 
                <Divider/>  
            </div>
        </NavStyled>
    )
}

export default Nav


