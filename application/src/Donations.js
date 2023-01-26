// page for donations
// page was created mainly to learn React hooks


import Paypal from './components/Paypal'
import Card from './components/Card'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


import styled from 'styled-components'
const DonationsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`

const clientID = "ASKarcoEUfnemnoA3CVmI5Btu6ZovXfPTXWBkRilPDI_oCplouusH8kvdbxJueT6Yib_GYa3JCx2BWkp"

const Donations = () => {
    return (
        <PayPalScriptProvider options={{"client-id": clientID}}>
            <DonationsStyled>
                <Card title="Donate!" description="Any donations will
                    be used to both fund my schooling and start / scale new projects.
                ">
                    
                </Card>
            </DonationsStyled>
        </PayPalScriptProvider>
    )    
}


export default Donations
