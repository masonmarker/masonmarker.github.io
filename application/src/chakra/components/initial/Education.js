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
    Text,
    Button
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
        width: 90vw;
    }

    .grade {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: .3rem;
        box-shadow: 0 0 0.5rem 0.1rem rgba(0,0,0,0.1);
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

    return (
        <EducationStyled>

            <University />
            <Courses />


        </EducationStyled>
    )
}


const University = () => {

    // intersection observer
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <Box className="univ"> 
            <a className="lnk" href="https://www.jmu.edu/" target="_blank" rel="noreferrer">
                James Madison University
            </a>
            <h3>Student - Senior</h3>
            <h5>Computer Science Major</h5>
            <h5>2019 - Present</h5>
            <p>In high school, I was positive I wanted to attend university with hopes for success in the medical field.</p>
            <p>My first semester in the biology curriculum was an experience, however did not satisfy me academically nor mentally.</p>
            <p>While my thirst for knowledge was high, I needed to find a major that would prove beneficial to my future,
                serving as not just work, but enjoyable work, and offering potential for vast expansion within the field.</p>
            <p>Nearly everyone in my dorm was majoring in computer science, I was the only one focused on the medical field.
                This most definitely swayed my decision to major in computer science, as they explained to me the seemingly endless benefits of studying computer
                science.
            </p>
            <p>I thought it wouldn't hurt to take a few entry level classes, and in doing so, I fell in love with the art of programming.
                As a kid, I would always assist my brothers, parents, and grandparents with issues they were having with any devices they owned. This made me
                question why I hadn't dug deeper into the intricacies of computer science earlier!
            </p>
        </Box>
    )
}

const Courses = () => {
    return (
        <Box className="univ"
            marginTop="1rem">
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Computer Science Courses</TableCaption>
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
                            <Tabled title="CS 149" desc="Introduction to Programming" />
                            <Td>Spring 2020</Td>
                            <Td>
                                Introduces students to the fundamental concepts of computer programming
                            </Td>
                            <Grade grade="A" backgroundColor="lightgreen" />
                        </Tr>
                        <Tr>
                            <Tabled title="CS 159" desc="Advanced Programming" />
                            <Td>Fall 2020</Td>
                            <Td>
                                Introduces the concept of front-end programming and basic data structures
                            </Td>
                            <Grade grade="A-" backgroundColor="lightgreen"/>
                        </Tr>
                        <Tr>
                            <Tabled title="CS 227" desc="Discrete Structures I"/>
                            <Td>Fall 2020</Td>
                            <Td>
                                Introduces basic concepts involving discrete mathematics and its applications to computer science
                            </Td>
                            <Grade grade="B+" backgroundColor="orange"/>
                        </Tr>

                        <Tr>
                            <Tabled title="CS 240" desc="Algorithms and Data Structures"/>
                            <Td>Spring 2021</Td>
                            <Td>
                                Introduces the concepts of algorithms and data structures, including their design, analysis, and implementation
                            </Td>
                            <Grade grade="A" backgroundColor="lightgreen"/>
                        </Tr>

                        <Tr>
                            <Tabled title="CS 345" desc="Software Engineering"/>
                            <Td>Spring 2021</Td>
                            <Td>
                                Teaches basic software development within a team, specifically incorporating knowledge of version control and agile development
                            </Td>
                            <Grade grade="B" backgroundColor="orange"/>
                        </Tr>

                        <Tr>
                            <Tabled title="CS 261" desc="Computer Systems I"/>
                            <Td>Fall 2021</Td>
                            <Td>Introduces transferrence of information from hardware to software</Td>
                            <Grade grade="B-" backgroundColor="orange"/>
                        </Tr>

                        <Tr>
                            <Tabled title="CS 327" desc="Discrete Structures II"/>
                            <Td>Fall 2021</Td>
                            <Td>Brings to light proofs used in computational math as well as the various state machines</Td>
                            <Grade grade="A-" backgroundColor="lightgreen"/>
                        </Tr>

                        <Tr>
                            <Tabled title="CS 347" desc="Web Development"/>
                            <Td>Spring 2022</Td>
                            <Td>Introduces the concepts of web development, including the intertwining of HTML, CSS, Javascript, and PHP</Td>
                            <Grade grade="A" backgroundColor="lightgreen"/>
                        </Tr>    

                        <Tr>
                            <Tabled title="CS 361" desc="Computer Systems II"/>
                            <Td>Spring 2022</Td>
                            <Td>Introduces basic operating system functionality, including the use of processes and threads</Td>
                            <Grade grade="B" backgroundColor="orange"/>
                        </Tr>

                        <Tr>
                            <Tabled title="CS 430" desc="Programming Languages"/>
                            <Td>Spring 2022</Td>
                            <Td>Introduces several new programming languages such as Ruby, Haskell, and Prolog</Td>
                            <Grade grade="B" backgroundColor="orange"/>
                        </Tr>

                        <Tr>
                            <Tabled title="CS 374" desc="Databases"/>
                            <Td>Fall 2022</Td>
                            <Td>Provides a deep understanding in the concept of databases, including the use of MySql databases</Td>
                            <Grade grade="A" backgroundColor="lightgreen"/>
                        </Tr>

                        <Tr>
                            <Tabled title="CS 450" desc="Operating Systems"/>
                            <Td>Fall 2022</Td>
                            <Td>Presents students with programmatic issues involving a practice operating system (PintOS)</Td>
                            <Grade grade="A-" backgroundColor="lightgreen"/>
                        </Tr>

                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

// table row
const Tabled = (props) => {
    return <Td>{props.title}<br /><b>{props.desc}</b></Td>
}


// grade card component
const Grade = (props) => {
    return (
        <Td><Button {...props}>{props.grade}</Button></Td>
    )
}

export default Education
