// details in my education

import Ventures from '../../../App.js'


// styled components
import styled from 'styled-components'

// common
import colors from '../../styles/colors'
import css from '../../styles/css'

// Chakra components
import {
    Box,
    Fade,
    Table,
    TableContainer,
    TableCaption,
    Td,
    Th,
    Tr,
    Tbody,
    Thead,
    Tfoot
} from '@chakra-ui/react'

// intersection observer
import { inView, useInView } from 'react-intersection-observer'

// styled education

const EducationStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;

    padding: 3rem;
    text-align: center;

    border-radius: .3rem;

    a {
        font-weight: bold;
        font-size: 1.5rem;
        color: ${colors.purple}
    }

    .lnk {transition: ${css.transition}}
    .lnk:hover {
        text-decoration: underline;
    }

    /* card component for displaying general education status */
    .univ {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;    
        padding: 1rem;
        border-radius: .3rem;
        box-shadow: 0 0 0.5rem 0.1rem rgba(0,0,0,0.1);
        background-color: white;
    }


`

// education template
// const Education = () => {
//     return (
//       <div className="education">
//         <div className="education2-div">
//           <img alt="JMU" onClick={jmuClicked}className="education-img" src="https://gray-wvir-prod.cdn.arcpublishing.com/resizer/LP2hwjsI6I17ybSZV5UAqVKd2ic=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/AL5AMJZCXBBPNOZQ7DRYAGGAYI.png"></img>
//         </div>
//         <div className="education-desc">
//           <h3 className="no-margin" style={{color: "var(--darkpurple)"}}>James Madison University</h3>

//           <h3 className="no-margin">Student - Senior</h3>
//           <h5 className="no-margin" style={{color: "var(--gray)"}}>Computer Science Major</h5> 
//           <h5 className="no-margin" style={{color: "var(--gray)"}}>2019 - Present</h5> 
//           <p className="education-p">In high school, I was positive I wanted to attend university with hopes for success in the medical field.</p>
//           <p className="education-p">My first semester in the biology curriculum was an experience, however did not satisfy me academically nor mentally.</p>
//           <p className="education-p">While my thirst for knowledge was high, I needed to find a major that would prove beneficial to my future, 
//           serving as not just work, but enjoyable work, and offering potential for vast expansion within the field.</p>
//           <p className="education-p">Nearly everyone in my dorm was majoring in computer science, I was the only one focused on the medical field.
//           This most definitely swayed my decision to major in computer science, as they explained to me the seemingly endless benefits of studying computer
//           science.
//           </p>
//           <p className="education-p">I thought it wouldn't hurt to take a few entry level classes, and in doing so, I fell in love with the art of programming.
//           As a kid, I would always assist my brothers, parents, and grandparents with issues they were having with any devices they owned. This made me 
//           question why I hadn't dug deeper into the intricacies of computer science earlier!
//            </p>
//         </div>
//       </div>
//     )
//   }



// education component within dropdown
const Education = () => {

    // intersection observer
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <EducationStyled>

            <Fade in={inView} ref={ref}>
                <University />
            </Fade>

            <Fade in={inView} ref={ref}>
                <Courses />
            </Fade>


        </EducationStyled>
    )
}


const University = () => {

    // intersection observer
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <Box
            className="univ"
        >
            <Fade in={inView} ref={ref}>
                <a className="lnk" href="https://www.jmu.edu/" target="_blank" rel="noreferrer">
                    James Madison University
                </a>
            </Fade>

            <Fade in={inView} ref={ref}>
                <h3>Student - Senior</h3>
            </Fade>

            <Fade in={inView} ref={ref}>
                <h5>Computer Science Major</h5>
            </Fade>

            <Fade in={inView} ref={ref}>
                <h5>2019 - Present</h5>
            </Fade>

            <Fade in={inView} ref={ref}>
                <p>In high school, I was positive I wanted to attend university with hopes for success in the medical field.</p>
            </Fade>

            <Fade in={inView} ref={ref}>
                <p>My first semester in the biology curriculum was an experience, however did not satisfy me academically nor mentally.</p>
            </Fade>

            <Fade in={inView} ref={ref}>
                <p>While my thirst for knowledge was high, I needed to find a major that would prove beneficial to my future,
                    serving as not just work, but enjoyable work, and offering potential for vast expansion within the field.</p>
            </Fade>

            <Fade in={inView} ref={ref}>
                <p>Nearly everyone in my dorm was majoring in computer science, I was the only one focused on the medical field.
                    This most definitely swayed my decision to major in computer science, as they explained to me the seemingly endless benefits of studying computer
                    science.
                </p>
            </Fade>

            <Fade in={inView} ref={ref}>
                <p>I thought it wouldn't hurt to take a few entry level classes, and in doing so, I fell in love with the art of programming.
                    As a kid, I would always assist my brothers, parents, and grandparents with issues they were having with any devices they owned. This made me
                    question why I hadn't dug deeper into the intricacies of computer science earlier!
                </p>
            </Fade>
        </Box>
    )
}

const Courses = () => {
    return (
        <Box className="univ"
            marginTop="1rem">
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>All Computer Science Courses</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Course</Th>
                            <Th>When</Th>
                            <Th>Description</Th>
                            <Th>Grade</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>CS 149<br/><b>Introduction To Programming</b></Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Education
