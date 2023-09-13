// styled components
import styled from "styled-components";

// common
import colors from "../../styles/colors";
import css from "../../styles/css";

// Chakra components
import {
  Box,
  Table,
  TableContainer,
  TableCaption,
  Td,
  Th,
  Tr,
  Tbody,
  Thead,
  Button,
} from "@chakra-ui/react";

// styled education
const EducationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;

  padding: 3rem;
  text-align: center;

  border-radius: 0.3rem;

  a {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${colors.purple};
  }

  p {
    font-size: 1rem;
  }

  .lnk {
    transition: ${css.transition};
  }
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
    border-radius: 0.3rem;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 90vw;
  }

  .grade {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  }
`;

// education component within dropdown
const Education = () => {
  return (
    <EducationStyled>
      <University />
      <Courses />
    </EducationStyled>
  );
};

const University = () => {
  return (
    <Box className="univ">
      <a
        className="lnk"
        href="https://www.jmu.edu/"
        target="_blank"
        rel="noreferrer"
      >
        James Madison University
      </a>
      <h3>Student - Senior</h3>
      <h5>Computer Science Major</h5>
      <h5>2019 - Present</h5>
      <p>
        In high school, I was positive I wanted to attend university with hopes
        for success in the medical field.
      </p>
      <p>
        My first semester in the biology curriculum was an experience, however
        did not satisfy me academically nor mentally.
      </p>
      <p>
        While my thirst for knowledge was high, I needed to find a major that
        would prove beneficial to my future, serving as not just work, but
        enjoyable work, and offering potential for vast expansion within the
        field.
      </p>
      <p>
        Nearly everyone in my dorm was majoring in computer science, I was the
        only one focused on the medical field. This most definitely swayed my
        decision to major in computer science, as they explained to me the
        seemingly endless benefits of studying computer science.
      </p>
      <p>
        I thought it wouldn't hurt to take a few entry level classes, and in
        doing so, I fell in love with the art of programming. As a kid, I would
        always assist my brothers, parents, and grandparents with issues they
        were having with any devices they owned. This made me question why I
        hadn't dug deeper into the intricacies of computer science earlier!
      </p>
    </Box>
  );
};

const Courses = () => {
  return (
    <Box className="univ" marginTop="1rem">
      <TableContainer>
        <Table>
          <TableCaption color="black">Computer Science Courses</TableCaption>
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
              <Desc desc="Introduces students to the fundamental concepts of computer programming" />
              <Grade grade="A" backgroundColor="lightgreen" />
            </Tr>
            <Tr>
              <Tabled title="CS 159" desc="Advanced Programming" />
              <Td>Fall 2020</Td>
              <Desc desc="Introduces the concept of front-end programming and basic data structures" />
              <Grade grade="A-" backgroundColor="lightgreen" />
            </Tr>
            <Tr>
              <Tabled title="CS 227" desc="Discrete Structures I" />
              <Td>Fall 2020</Td>
              <Desc desc="Introduces basic concepts involving discrete mathematics and its applications to computer science" />
              <Grade grade="B+" backgroundColor="orange" />
            </Tr>

            <Tr>
              <Tabled title="CS 240" desc="Algorithms and Data Structures" />
              <Td>Spring 2021</Td>
              <Desc desc="Introduces the concepts of algorithms and data structures, including their design, analysis, and implementation" />
              <Grade grade="A" backgroundColor="lightgreen" />
            </Tr>

            <Tr>
              <Tabled title="CS 345" desc="Software Engineering" />
              <Td>Spring 2021</Td>
              <Desc desc="Teaches basic software development within a team, specifically incorporating knowledge of version control and agile development" />
              <Grade grade="B" backgroundColor="orange" />
            </Tr>

            <Tr>
              <Tabled title="CS 261" desc="Computer Systems I" />
              <Td>Fall 2021</Td>
              <Desc desc="Introduces transferrence of information from hardware to software" />
              <Grade grade="B-" backgroundColor="orange" />
            </Tr>

            <Tr>
              <Tabled title="CS 327" desc="Discrete Structures II" />
              <Td>Fall 2021</Td>
              <Desc desc="Brings to light proofs used in computational math as well as the various state machines" />
              <Grade grade="A-" backgroundColor="lightgreen" />
            </Tr>

            <Tr>
              <Tabled title="CS 347" desc="Web Development" />
              <Td>Spring 2022</Td>
              <Desc desc="Introduces the concepts of web development, including the intertwining of HTML, CSS, Javascript, and PHP" />
              <Grade grade="A" backgroundColor="lightgreen" />
            </Tr>

            <Tr>
              <Tabled title="CS 361" desc="Computer Systems II" />
              <Td>Spring 2022</Td>
              <Desc desc="Introduces basic operating system functionality, including the use of processes and threads" />
              <Grade grade="B" backgroundColor="orange" />
            </Tr>

            <Tr>
              <Tabled title="CS 430" desc="Programming Languages" />
              <Td>Spring 2022</Td>
              <Desc desc="Introduces several new programming languages such as Ruby, Haskell, and Prolog" />
              <Grade grade="B" backgroundColor="orange" />
            </Tr>

            <Tr>
              <Tabled title="CS 374" desc="Databases" />
              <Td>Fall 2022</Td>
              <Desc desc="Provides a deep understanding in the concept of databases, including the use of MySql databases" />
              <Grade grade="A" backgroundColor="lightgreen" />
            </Tr>

            <Tr>
              <Tabled title="CS 450" desc="Operating Systems" />
              <Td>Fall 2022</Td>
              <Desc desc="Presents students with programmatic issues involving a practice operating system (PintOS)" />
              <Grade grade="A-" backgroundColor="lightgreen" />
            </Tr>
            <Tr>
              <Tabled title="CS 330" desc="Societal and Ethical Issues" />
              <Td>Spring 2023</Td>
              <Desc desc="Introduces the ethical issues that arise in the field of computer science, and perspectives in which to approach them." />
              <Grade grade="B+" backgroundColor="orange" />
            </Tr>
            <Tr>
              <Tabled title="CS 412" desc="Applied Algorithms" />
              <Td>Spring 2023</Td>
              <Desc desc="Expands on the concepts of graph algorithms and data structures, including their design, analysis, and implementation" />
              <Grade grade="B" backgroundColor="orange" />
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// table row
const Tabled = (props) => {
  return (
    <Td>
      {props.title}
      <br />
      <b>{props.desc}</b>
    </Td>
  );
};

// wrap description every 40 characters without cutting off words
const Desc = (props) => {
  return (
    <Td>
      {props.desc
        .split(" ")
        .reduce(
          (acc, word) => {
            if (acc[acc.length - 1].length + word.length > 40) {
              acc.push(word);
            } else {
              acc[acc.length - 1] += " " + word;
            }
            return acc;
          },
          [""]
        )
        .map((line, i) => (
          <p
            style={{
              fontSize: "0.8rem",
            }}
            key={i}
          >
            {line}
          </p>
        ))}
    </Td>
  );
};

// grade card component
const Grade = (props) => {
  return (
    <Td>
      <Button {...props}>{props.grade}</Button>
    </Td>
  );
};

export default Education;
