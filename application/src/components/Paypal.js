// used for payments
// offers methods of payment

import { PayPalButtons } from "@paypal/react-paypal-js";


// PayPal component
const Paypal = (props) => {
    return <div>
                <PayPalButtons style={{
                    layout: "vertical",
                    width: "50%"
                }} createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: props.price
                            }
                        }]
                    })
                }} onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert("Transaction completed: " + details.payer.name.given_name)
                    })
                }} />
                
            </div>
}

export default Paypal