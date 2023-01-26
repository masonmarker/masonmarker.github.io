// used for payments
// offers methods of payment

import { PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
    return <div>
                <PayPalButtons style={{
                    layout: "vertical",
                    width: "50%"
                }} />
            </div>
}

export default Paypal