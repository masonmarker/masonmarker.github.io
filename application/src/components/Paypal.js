// used for payments
// offers methods of payment

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Paypal = () => {
    return <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{
                layout: "vertical",
                width: "50%"

            }} />
           </PayPalScriptProvider>
}

export default Paypal