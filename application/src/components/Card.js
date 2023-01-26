// Card component used for displaying its children

import StyledCard from "./styled/StyledCard"
import Button from "./Button"


// paypal imports
import Paypal from "./Paypal"


import { useState } from "react"

// text imports
import Title from "./Text"

var serial = 0

// card component
const Card = (props) => {

    // state for showing paypal component
    const [showPay, setShowPay] = useState(false) 



    const btnID = "ex:button" + serial++

    return (
        <StyledCard onClick={() => {

            // show paypal buttons
            setShowPay(!showPay)
            
            // change button text
            document.getElementById(btnID).innerHTML = showPay ? "Purchase" : "Cancel"
        }}>


            <Title title={props.title}/>
            <p>{props.description}</p>

            {props.children}

            <Button buttonid={btnID} text="Purchase"/>
            {showPay ? <Paypal/> : null}


        </StyledCard>
    )
}


export default Card