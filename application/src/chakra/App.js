// Will eventually replace the current App.js
// this App will revamp the entire website to incorporate
// Chakra UI and a prettier design


// chakra ui
import { ChakraProvider } from "@chakra-ui/react";

// components
import Title from './components/initial/Title';
import About from './components/initial/About';

const App = () => {
    return (
        <ChakraProvider>
            <Title/>
            <About/>
        </ChakraProvider>
    )
};

export default App;