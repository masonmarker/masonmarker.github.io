// Will eventually replace the current App.js
// this App will revamp the entire website to incorporate
// Chakra UI and a prettier design


// chakra ui
import { ChakraProvider } from "@chakra-ui/react"

// chakra components
import { Box, Text } from "@chakra-ui/react"

// import fonts
import fonts from './styles/fonts'

// for styled components
import styled from 'styled-components'


// components
import Title from './components/initial/Title'



const App = () => {
    return (
        <ChakraProvider>
            <div style={{fontFamily: fonts['heading']}}>
                <Title />
            </div>
        </ChakraProvider>
    )
}


export default App