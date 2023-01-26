// page for donations
// page was created mainly to learn React hooks


import Paypal from './components/Paypal'
import Card from './components/Card'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Donations = () => {
    return (
        <PayPalScriptProvider>
            <Card title="Donate" description="subscriptions are tuff">
                
            </Card>
        </PayPalScriptProvider>
    )    
}


export default Donations
