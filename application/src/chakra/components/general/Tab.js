// Custom Tab component

// import Chakra Tab    
import { Tab as ChakraTab } from "@chakra-ui/react"

// routing
import { Link  as ReactLink} from 'react-router-dom'
import { Link } from "@chakra-ui/react"

// colors
import colors from '../../styles/colors'

// styled component for hover
import styled from 'styled-components'




const Tab = (props) => {

    // custom link style
    const linkstyle = {
        textDecoration: "none",
        paddingRight: "0.7rem",
        paddingLeft: "0.7rem",
        paddingTop: "0.3rem",
        paddingBottom: "0.3rem",
        borderRadius: "0.3rem",
        backgroundColor: colors.lightGray
    }

    return (
        <ChakraTab cursor="default">
            <Link as={ReactLink} to={props.to} style={linkstyle} onMouseOver={enlarge} onMouseLeave={shrink} {...props}> 
                {props.text}
            </Link>
        </ChakraTab>
    )
}

function enlarge(component) {
    component.target.style.transform = "scale(1.1)"
}

function shrink(component) {
    component.target.style.transform = "scale(1)"
}

export default Tab