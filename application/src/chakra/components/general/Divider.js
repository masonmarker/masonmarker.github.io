// vertical divider

// styled components
import styled from 'styled-components';

// app colors
import colors from '../../styles/colors';


const DividerStyled = styled.div` 

    width: 2px;
    height: 100%;
    background-color: ${colors.gray};
    margin: 0 1rem;
    border-radius: 1rem;


`;

const Divider = () => {
    return (
        <DividerStyled>
            <pre><br/><br/></pre>
        </DividerStyled>
    )
}

export default Divider;