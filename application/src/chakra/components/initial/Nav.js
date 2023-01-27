// front cover NavBar

// my components
import Divider from '../general/Divider'

// styled components
import styled from 'styled-components'

// chakra components
import { 
    Box, 
    Text, 
    Image, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel  

} from "@chakra-ui/react"

// common
import css from '../../styles/css'
import colors from '../../styles/colors'

// main navbar
const NavStyled = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    position: fixed;
    top: 0;
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
            <Tabs variant="unstyled" colorScheme="purple"> 
                <TabList>
                    <Tab>GitHub</Tab>
                    <Tab>LinkedIn</Tab>
                </TabList>
            </Tabs>
        </NavStyled>
    )
}


export default Nav


