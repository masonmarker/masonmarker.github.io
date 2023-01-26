// styled card

import styled from 'styled-components'

// Card component, used for displaying its children in a card like format
const StyledCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    


    background-color: #f2f2f2;
    border: 1px solid gray;
    border-radius: 5px;
    width: fit-content;
    margin: 1rem;
    
    padding: 0.5rem;


`

export default StyledCard