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

// common
import colors from './styles/colors'

// components
import Title from './components/initial/Title'

import { useColorMode, useColorModeValue } from '@chakra-ui/react'


const App = () => {

    const { colorMode } = useColorMode()
    const bg = useColorModeValue('white', colors.gray)

    return (
        <ChakraProvider>
            <Title mode={bg}/>
        </ChakraProvider>
    )
}



export default App