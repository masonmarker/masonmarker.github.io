import "./App.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
// import Resume from "./resume";
// import { useNavigate } from "react-router-dom";
import { Divider } from "@chakra-ui/react";

// styled components
import styled from "styled-components";

// common
import colors from "./chakra/styles/colors";

// Chakra components
import { Link as ChakraLink } from "@chakra-ui/react";

function App() {
  document.body.style = "background: white;";
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@500;700;800&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@200;500;700;800&display=swap');
      </style>

      <NavBar />

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <MyEducation />
      </FadeInSection>

      <FadeInSection>
        <Education />
      </FadeInSection>

      <FadeInSection>
        <MyVenture />
      </FadeInSection>

      <Ventures />

      <FadeInSection>
        <MyProjects />
      </FadeInSection>

      <FadeInSection>
        <GitHub />
      </FadeInSection>

      <FadeInSection>
        <MyLanguages />
      </FadeInSection>

      <Languages />

      <FadeInSection>
        <Donate />
      </FadeInSection>

      <FadeInSection>
        <ContactMe />
      </FadeInSection>

      <Outlet />
    </div>
  );
}

const NavBar = () => {
  return (
    <div className="navbar">
      <h4 className="navbar-title" style={{ marginBottom: 0 }}>
        <i>Hi! Most people call me</i>
      </h4>
      <h1 className="name-title" style={{ marginTop: 0 }}>
        — Mason Marker —
      </h1>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-div">
      <h1>Who am I?</h1>
      <p style={{ fontWeight: "bold" }}>
        I'm a passionate and driven junior computer science major at James
        Madison University.
      </p>
      <p>
        In entering my senior year, my yearning for knowledge continues to grow.
        I believe that while understanding new logical concepts in math and
        computer science, one can find this newly obtained logic applicable to
        countless ideas outside of the areas in which they have been learned.
      </p>
      <p>
        <i>
          Computer Science is a gateway to a better ability to apply logic to
          non-logical concepts.
        </i>
      </p>
    </div>
  );
};

const MyEducation = () => {
  return (
    <div className="my-ventures">
      <h1>My Education</h1>
    </div>
  );
};

const Education = () => {
  return (
    <div className="education">
      <div className="education2-div">
        <img
          alt="JMU"
          onClick={jmuClicked}
          className="education-img"
          src="https://gray-wvir-prod.cdn.arcpublishing.com/resizer/LP2hwjsI6I17ybSZV5UAqVKd2ic=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/AL5AMJZCXBBPNOZQ7DRYAGGAYI.png"
        ></img>
      </div>
      <div className="education-desc">
        <h3 className="no-margin" style={{ color: "var(--darkpurple)" }}>
          James Madison University
        </h3>

        <h3 className="no-margin">Student - Senior</h3>
        <h5 className="no-margin" style={{ color: "var(--gray)" }}>
          Computer Science Major
        </h5>
        <h5 className="no-margin" style={{ color: "var(--gray)" }}>
          2019 - Present
        </h5>
        <p className="education-p">
          In high school, I was positive I wanted to attend university with
          hopes for success in the medical field.
        </p>
        <p className="education-p">
          My first semester in the biology curriculum was an experience, however
          did not satisfy me academically nor mentally.
        </p>
        <p className="education-p">
          While my thirst for knowledge was high, I needed to find a major that
          would prove beneficial to my future, serving as not just work, but
          enjoyable work, and offering potential for vast expansion within the
          field.
        </p>
        <p className="education-p">
          Nearly everyone in my dorm was majoring in computer science, I was the
          only one focused on the medical field. This most definitely swayed my
          decision to major in computer science, as they explained to me the
          seemingly endless benefits of studying computer science.
        </p>
        <p className="education-p">
          I thought it wouldn't hurt to take a few entry level classes, and in
          doing so, I fell in love with the art of programming. As a kid, I
          would always assist my brothers, parents, and grandparents with issues
          they were having with any devices they owned. This made me question
          why I hadn't dug deeper into the intricacies of computer science
          earlier!
        </p>
      </div>
    </div>
  );
};

const MyVenture = () => {
  return (
    <div className="my-ventures">
      <h1>My Ventures</h1>
      <p>
        <b>
          In my years, I have contributed my complete efforts to several
          companies' visions.
        </b>
      </p>
    </div>
  );
};

const Ventures = () => {
  return (
    <div className="ventures-container">
      <div className="job-div">
        <img
          onClick={genworthClicked}
          alt="genworth"
          className="ventures-img"
          src="https://content.fortune.com/wp-content/uploads/2020/05/F500-2020-364-Genworth-Financial.jpg"
        ></img>
        <div className="desc-div">
          <h2
            style={{
              marginBottom: 0,
              color: "var(--darkpurple)"
            }}
          >
            Genworth
          </h2>
          <h3 className="job-title">IT Development Program Analyst</h3>
          <h4 className="job-duration">July 2023 - Present</h4>
          <h5 className="job-desc">
            When I finished ITDP bootcamp in Richmond, I was assigned to the
            Endpoint Solutions team for EUS. I'll list my projects once I've
            finished them!
          </h5>
        </div>

        {/* divider */}
        <Divider mt={4} mb={4} />

        <div className="desc-div">
          <h3 className="job-title">IT Development Program Intern</h3>
          <h4 className="job-duration">May 2022 - July 2023</h4>
          <h5 className="job-desc">
            I worked as a Robotics Process Automation (RPA) engineer. I would be
            given briefings of business processes that needed to be automated,
            and I would be instructed to find an efficient and optimized way of
            completing these tasks by constructing virtual bots.
          </h5>
          <h5 className="job-desc">
            I began the internship with little experience in intelligent
            automation, however quickly adapted to the several softwares
            assigned to me, including Automation Anywhere (A360), Power
            Automate, and many applications included in the Microsoft 365 Apps
            for Enterprise collection.
          </h5>
        </div>
      </div>

      <div className="job-div">
        <img
          alt="walgreens"
          className="ventures-img"
          src="https://gray-kait-prod.cdn.arcpublishing.com/resizer/2MX1aIfwKyIEzosEF_uS8gkNuJM=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/65FAKKQDN5HR5GVLZI4KUHWIVM.jpg"
        ></img>
        <div className="desc-div">
          <h2
            style={{
              marginBottom: 0,
              color: "var(--darkpurple)"
            }}
          >
            Walgreens Pharmacy
          </h2>
          <h3 className="job-title">
            Pharmacy Cashier / Customer Service Associate
          </h3>
          <h4 className="job-duration">May 2020 - May 2022</h4>
          <h5 className="job-desc">
            My duties involved operation of a cash register and receive payment
            from customers in cash or credit card, accurately count and provide
            change to customers as required,then use the RX system to locate
            customer medical profiles and distribute prescribed medications
            accordingly while following HIPAA guidelines and maintaining
            constant social interaction.{" "}
          </h5>
        </div>
      </div>

      <div className="job-div">
        <img
          onClick={wmcClicked}
          alt="winchester medical center"
          className="ventures-img"
          src="https://www.dreamweaverteam.com/wordpress/wp-content/uploads/2017/08/Winchester-Medical-Center.jpg"
        ></img>
        <div className="desc-div">
          <h2
            style={{
              marginBottom: 0,
              color: "var(--darkpurple)"
            }}
          >
            Winchester Medical Center
          </h2>
          <h3 className="job-title">Volunteer</h3>
          <h4 className="job-duration">May 2018 - August 2018</h4>
          <h5 className="job-desc">
            I volunteered at the Winchester Medical Center to both gain
            experience in the medical field and obtain volunteer hours. The
            experience was enjoyable, as I was able to grasp a better
            understanding on how roles in the medical field merge into a
            functional medical system.
          </h5>
          <h5 className="job-desc">
            My duties included attending to emergency center patients
            non-medical needs while simultaneously cleaning the area, and
            sorting and boxing several sizes of blood vials for use by the
            medical professionals while following HIPAA guidelines.
          </h5>
        </div>
      </div>

      <div className="job-div">
        <img
          onClick={cfaClicked}
          alt="chick-fil-a"
          className="ventures-img"
          src="https://live.staticflickr.com/5328/8928862580_4cd0791484.jpg"
        ></img>
        <div className="desc-div">
          <h2
            style={{
              marginBottom: 0,
              color: "var(--darkpurple)"
            }}
          >
            Chick-Fil-A
          </h2>
          <h3 className="job-title">Cashier</h3>
          <h4 className="job-duration">July 2017 - August 2018</h4>
          <h5 className="job-desc">
            Operated a cash register and receive payment from customers in cash
            or credit card, accurately count and provide change to customers as
            required, and follow all cash handling policies and procedures while
            working quickly and maintaining constant social interaction.
          </h5>
        </div>
      </div>
    </div>
  );
};

const MyProjects = () => {
  return (
    <div className="my-services">
      <h1>My Projects</h1>
    </div>
  );
};

const GitHub = () => {
  return (
    <div className="github">
      <div className="job-div" Style="margin-top: 1rem">
        <img
          alt="github"
          className="ventures-img"
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          Style="height: 10rem; width: 10rem"
          onClick={gitClicked}
        ></img>
      </div>
      <div className="desc-div">
        <h2 Style="margin-bottom: 0; color: var(--darkpurple)">
          The Msn Project
        </h2>
        <h3 className="job-title">Github Repository</h3>
        <h5 className="job-desc">
          You can find nearly every side project I've ever developed on my
          Github. These projects currently consist of Python and Java, each
          folder that can be found in my repository proves useful to nearly any
          project one might consider developing. With tens of thousands of lines
          of code, these collections can be utilized by anyone seeikng their
          usage in their own projects.
        </h5>
        <h5 className="job-desc">
          From general methods to complex neural network computation and
          application, my repository holds powerful tools that can be used by
          anyone.
        </h5>
        <h5 className="job-desc">
          This repository contains, but is most definitely not limited to,
        </h5>
        <h5 className="job-desc" Style="font-weight: bold; text-align: left">
          <ul>
            <li>
              Wide variety of self-created data structures, unoriginal and
              original
            </li>
            <li>
              10,000 - 15,000 lines of methods dedicated to supporting current
              or future projects
            </li>
            <li>
              Several original, fully capable programming languages designed for
              the programmer.
            </li>
            <li>
              Various levels of artificial intelligence management and
              application utilities involving multi-layer perceptron network
              construction and implementation to real world scenarios.
            </li>
            <li>And much more!</li>
          </ul>
        </h5>
        <h3
          className="download-button"
          Style="color: white; width: 5rem"
          onClick={gitClicked}
        >
          Visit
        </h3>
        <Link
          to="/github"
          className="download-button"
          style={{
            color: "white",
            fontWeight: "bold",
            width: "15rem",
            padding: "1rem",
          }}
        >
          I don't want to read anymore, just show me!
        </Link>
      </div>
    </div>
  );
};

const MyLanguages = () => {
  return (
    <div className="my-ventures">
      <h1>My Languages</h1>
    </div>
  );
};

// styled link with all props passed to it
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.purple};
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Languages = () => {
  return (
    <div className="languages">
      <div className="lang-desc">
        <img
          alt="Java"
          className="lang-img"
          src="https://www.oracle.com/oce/press/assets/CONT6C95347B9ECC40CF8E7272A74FD80BDE/native/rc24-java-logo.gif"
        ></img>
        <Proficiency level="86%" color="darkorange" completion="fluent" />
        <div>
          <p>
            Java was my first programming language, and was heavily used
            throughout my first 2 years at JMU.
          </p>
          <p>
            I've accumulated an estimated 2,000 - 3,000 hours in Java
            development inside and outside of school, and doing so provided me
            with a firm grasp on programming concepts including:
          </p>
          <ul
            style={{
              fontWeight: "bold",
              textAlign: "left",
              fontSize: "1.2rem",
            }}
          >
            <li>Object-oriented programming</li>
            <li>Algorithmic design and optimization</li>
            <li>Importance and implementation of data structures</li>
            <li>The art of code debugging</li>
            <li>Scrum based development</li>
            <li>Unit and integration testing</li>
            <li>And many other concepts</li>
          </ul>
          <p>
            Java continues to serve as one of the the primary languages in my
            main GitHub project,
            <br />
            <ChakraLink
              href="https://github.com/masonmarker/TheMsnProject"
              color={colors.purple}
            >
              TheMsnProject
            </ChakraLink>
          </p>
        </div>
      </div>

      <div className="lang-desc">
        <img
          alt="Python"
          className="lang-img"
          src="https://logicoretech.com/wp-content/uploads/2022/05/Python-Symbol.png"
          style={{ marginTop: "0.3rem" }}
        ></img>
        <Proficiency level="87%" color="lightblue" completion="fluent" />
        <div>
          <p>Python was one of the most recent languages I've learned.</p>
          <p>
            Today being 2/16/23, over the last couple semesters I've gained a
            much higher level of proficiency in Python given the implementation
            of my newest language project,
          </p>
          <LinkStyled to="/msn2docs">MSNScript2</LinkStyled>

          <p>The complexity involved in developing a</p>
          <ul
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            <li>Turing complete,</li>
            <li>Recursively interpreting,</li>
            <li>Build your own syntax themed,</li>
            <li>Object-oriented,</li>
            <li>Multiprogramming friendly,</li>
            <li>API endpoint and request simplifying</li>
          </ul>
          <p>
            language has been a challenge, but one that I've enjoyed immensely,
            given I was completely new to Python when I started.
          </p>

          <p>
            Python continues to serve as one of the the primary languages in my
            main GitHub project,
            <br />
            <ChakraLink
              href="https://github.com/masonmarker/TheMsnProject"
              color={colors.purple}
            >
              TheMsnProject
            </ChakraLink>
          </p>
        </div>
      </div>

      <div className="lang-desc">
        <img
          alt="HTML/CSS/JS"
          className="lang-img"
          style={{ paddingTop: "1.2rem" }}
          src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png"
        ></img>
        <Proficiency level="75%" color="blue" completion="advanced" />
        <div>
          <p>
            Upon enrollment in my web development class, it became clear that
            website development was a large gray area for me waiting to be
            explored.
          </p>
          <p>
            Before class had begun, I had already been informed of the concepts
            that would be covered in the class from some of my upper-classman
            friends. To get a head-start of these concepts, I undertook several
            front-end development projects on the side that I could use as a
            baseline for concepts that may be touched on when class started. The
            outcome of the websites were underwhelming from a user-experience
            perspective, however I'm happy to have been learned an incredible
            portion of basics concepts as well as implementation.
          </p>
          <p>
            It felt great to have entered the class having a grasp on this vital
            area of computer science. However after discovering ReactJS, I
            quickly shifted away from HTML/CSS/JavaScript to React when the
            class concluded.
          </p>
        </div>
      </div>

      <div className="lang-desc">
        <img
          alt="ReactJS"
          className="lang-img"
          src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
        ></img>
        <Proficiency
          level="55%"
          color="#08dcfc"
          completion="intermediate, currently studying"
        />
        <div>
          <p>I would often ask myself,</p>
          <p>
            <b>
              "Why does web development require several different languages?
            </b>
          </p>
          <p>
            <b>
              "Why didn't early developers create a medium between all aspects
              of web development instead of a language for each?"
            </b>
          </p>
          <p>
            These questions were quickly answered as it became known to me that
            ReactJS was in development. As a meeting point between HTML, CSS,
            and JavaScript, ReactJS proved more efficient to me than utilizing
            the 3 independently while creating this website you're currently
            browsing in.
          </p>
          <p>
            React is now known as "the future of web creation," and in realizing
            the sheer benefits of component reusability, I cannot see myself
            bringing my studies of React to a halt any time soon.
          </p>
        </div>
      </div>

      <div className="lang-desc">
        <img
          alt="C Language"
          className="lang-img"
          style={{ width: "10rem", paddingTop: "1rem" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png"
        ></img>

        <Proficiency
          level="35%"
          color="lightblue"
          completion="beginner - intermediate"
        />
        <div>
          <p>
            C has been used widely throughout my past 2 years of schooling in
            the computer science curriculum.
          </p>
          <p>
            Though not my favorite language to code in, I believe C was vital in
            understanding the importance of pointers, memory management, and the
            use of system calls.
          </p>
          <p>
            C gave me not only this vital understanding, but also diciplined me
            when it comes to programming. I may not solve school projects in C
            for days on end, coming with times when I would just want to give
            up. C forced me to find a way to push through and solve the problem
            regardless of how many hours of coding I may rack up.
          </p>
        </div>
      </div>

      <div className="lang-desc">
        <img
          alt="Ruby"
          className="lang-img"
          src="https://miro.medium.com/max/540/1*7e9D-oPWPIKBe2AQv862aA.png"
        ></img>
        <Proficiency
          level="30%"
          color="red"
          completion="beginner - intermediate"
        />
        <div>
          <p>
            Ruby was a required language to learn in my programming languages
            class at JMU.
          </p>
          <p>
            As an incredibly high-level language, I instantly fell in love with
            its simplicity as a programmer. Though short lived, my experience
            with Ruby has helped me understand the tradeoffs between programming
            languages, being that higher the level of the language, the more
            likely the language is to have a slower runtime than a lower level
            language.
          </p>
          <p>
            This understanding brought to me the proper reasoning as to why
            languages such as C, C++, and Rust execute their programs
            fundamentally faster than languages such as Ruby and Python.
          </p>
        </div>
      </div>

      <div className="lang-desc" style={{ height: "fit-content" }}>
        <img
          alt="Rust"
          className="lang-img"
          src="https://blog.altabel.com/wp-content/uploads/2020/08/1.png"
        ></img>
        <Proficiency level="25%" color="black" completion="beginner" />
        <div>
          <p>
            I've been wanting to learn the in's and out's of the blockchain, and
            I've realized I would eventually need to understand a language
            capable of hosting smart contracts on the blockchain.
          </p>
          <p>
            After some digging, I found Rust, a generally efficient, pointer
            based language capable of doing exactly that. Due to my previous
            experience with C, I was able to quickly learn the syntax and
            concepts of Rust.
          </p>
          <p>
            I'm not currently studying Rust, as I have other languages on my
            hands, however I am eager to learn more about it in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

const Proficiency = (props) => {
  return (
    <div>
      <h3
        style={{
          margin: "0",
          textDecoration: "italic",
          fontStyle: "italic",
          fontSize: "1rem",
          marginBottom: ".3rem",
        }}
      >
        {props.completion}
      </h3>
      <hr
        className="lang-prof"
        style={{
          width: props.level,
          border: "3px solid " + props.color,
          margin: 0,
        }}
      ></hr>
    </div>
  );
};

const ContactMe = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Mason Marker</h1>
        <h1>2022</h1>
        <Button
          name="LinkedIn"
          loc="https://www.linkedin.com/in/masonmarker/"
        />
        <Button
          name="GitHub"
          loc="https://github.com/masonmarker/TheMsnProject"
        />
        <Button name="Instagram" loc="https://www.instagram.com/mxs.n/" />
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
    <div onClick={() => goTo(props.loc)} className="download-button">
      <h3 style={{ color: "white", letterSpacing: ".05rem" }}>{props.name}</h3>
    </div>
  );
};

const MyResume = () => {
  return (
    <div className="my-ventures" style={{ marginBottom: "5rem" }}>
      <h1 className="increased-margin">Want to know more about me?</h1>
      <h4 className="increased-margin">
        <i>
          Take a peek at my skillsets, hobbies, interests, and more on my
          résumé!
        </i>
      </h4>
      <Link
        className="download-button"
        to="/resume"
        style={{
          margin: "0 auto",
          marginBottom: "1rem",
          color: "white",
          textDecoration: "none",
        }}
      >
        View my Résumé
      </Link>
    </div>
  );
};

const Donate = () => {
  return (
    <div className="my-ventures" style={{ width: "75%", marginBottom: "4rem" }}>
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <h4>
          <i>Want to support me? Feel free to donate to my PayPal!</i>
        </h4>
        <h5>
          <i>All donations are reinvested into my projects</i>
        </h5>
        <Link
          className="download-button"
          to="/donations"
          style={{
            margin: "0 auto",
            marginBottom: "1rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          Donate
        </Link>
      </div>
    </div>
  );
};

function goTo(location) {
  window.location.href = location;
}

function instaClicked() {
  window.location.href = "https://www.instagram.com/mxs.n/";
}

function gitClicked() {
  window.location.href = "https://github.com/masonmarker/TheMsnProject";
}

function linkedInClicked() {
  window.location.href = "https://www.linkedin.com/in/masonmarker/";
}

function tiktokClicked() {
  window.location.href = "https://www.tiktok.com/@wtfmase";
}

function jmuClicked() {
  window.location.href = "https://www.jmu.edu/";
}

function genworthClicked() {
  window.location.href = "https://www.genworth.com/";
}

function wmcClicked() {
  window.location.href =
    "https://www.valleyhealthlink.com/winchester-medical-center/";
}

function cfaClicked() {
  window.location.href = "https://www.chick-fil-a.com/";
}

const FadeInSection = ({ children }) => {
  const domRef = React.useRef();

  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      try {
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:
          setVisible(true);

          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      } catch (error) {}
    });

    try {
      observer.observe(domRef.current);
    } catch (error) {
      return () => observer.unobserve(domRef.current);
    }
  }, []);
  try {
    return (
      <section ref={domRef} className={isVisible ? " is-visible" : ""}>
        {children}
      </section>
    );
  } catch (error) {
    return <div></div>;
  }
};

// export components defined in this file
export {
  App,
  MyResume,
  ContactMe,
  Donate,
  Button,
  Proficiency,
  Languages,
  FadeInSection,
  goTo,
  instaClicked,
  gitClicked,
  linkedInClicked,
  jmuClicked,
  genworthClicked,
  wmcClicked,
  cfaClicked,
  tiktokClicked,
  MyProjects,
  Ventures,
  MyEducation,
  GitHub,
  Education,
  LinkStyled,
};
export default App;
