// front cover NavBar

// my components
import Divider from '../general/Divider'
import Tab from '../general/Tab'

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
    TabPanel  

} from "@chakra-ui/react"

// common
import css from '../../styles/css'
import fonts from '../../styles/fonts'
 

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
        font-weight: bold;
    }

    .tabs {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 50%;
    }

    @media (max-width: 1100px) {
        flex-direction: column;   
    }

`

// styled pre 
const PreStyled = styled.pre`
    ${fonts.heading}
`   

const Nav = () => {
    return (
        <NavStyled>
            <div className="main">
                <Image src="favicon.ico" boxSize={20}/>
                <Text><PreStyled>.  Marker  </PreStyled></Text>
            </div>
            <Tabs className="tabs" variant="unstyled" colorScheme="purple"> 
                <TabList >
                    <Tab text="About Me" to="/about"/>
                    <Tab text="Projects" to="/github"/>
                    <Tab text="Services" to="/services"/>
                    <Tab text="Donate" to="/donations"/>   
                </TabList>
            </Tabs>
        </NavStyled>
    )
}


export default Nav


