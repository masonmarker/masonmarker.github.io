// title page for personal website

// importing components
import Nav from './Nav'

// styled components
import styled from 'styled-components'

// importing colors
import colors from '../../styles/colors'


// styled App
// background color should be perfectly divided in half, diagonally,
// with the top half being a light blue and the bottom half being a dark blue
const TitleStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        25deg,
        white 0%,
        white 50%,
        ${colors["purple"]} 50%,
        ${colors["purple"]} 100% 
    );
`

// front cover for the website
const Title = () => {
    return (
        <TitleStyled>
            <Nav/>
        </TitleStyled>
    )
}

export default Title