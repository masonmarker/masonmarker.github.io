// page for donations
// page was created mainly to learn React hooks

// PayPal components
import Card from './components/Card'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// styled components
import styled from 'styled-components'


// Chakra components
import {
    Button
} from "@chakra-ui/react"

// paypal imports
import Paypal from "./components/Paypal"

// react use state
import { useState } from "react"

// styled donations
const DonationsStyled = styled.div`

    font-family: monospace;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`

// PayPal client ID
const clientID = "ASKarcoEUfnemnoA3CVmI5Btu6ZovXfPTXWBkRilPDI_oCplouusH8kvdbxJueT6Yib_GYa3JCx2BWkp"

// Donations component
const Donations = () => {


    // state for showing paypal component   
    const [showPay, setShowPay] = useState(false)

    return (
        <PayPalScriptProvider options={{ "client-id": clientID }}>
            <DonationsStyled>
                <Card title="Donate" description="Any donations will
                    be used to both fund my schooling and start / scale new projects.
                ">
                    <Button size="large" id="dollar1" onClick={() => {
                        // show paypal buttons
                        setShowPay(!showPay)

                        // change button text
                        document.getElementById("dollar1").innerHTML = showPay ? "$5" : "$5: Cancel"
                    }}>$5</Button>
                    
                    {showPay ? <Paypal /> : null}
                </Card>
            </DonationsStyled>
        </PayPalScriptProvider>
    )
}


export default Donations
