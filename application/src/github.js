
import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Msn2 from './msn2/msn2.js';



const GitHub = () => {
    return (



        <div className="github-body">
            <div className="github-nav">
                <div className="github-nav-container">
                    <Link to="/" className="download-button" Style="background-color: var(--darkpurple); color: white">Back</Link>
                    <div className="github-nav-title">
                        <h1 Style="margin-bottom: .5rem;">The Msn Project</h1>
                        <h5 Style="margin-top: 0;">GitHub Repository</h5>
                    </div>
                    <div className="download-button" style={{backgroundColor: "var(--darkpurple)", color: "white"}} onClick={gitClicked}>Visit</div>
                </div>
            </div>
            <Msn2 />
            <div className="github-msnc">
                <div className="msnc-img"></div>
                <div Style="margin-left: 1rem;">
                    <div className="github-msnc-desc">
                        <h1 Style="margin-bottom: 0">MSN Code (MSNC)</h1>
                        <h3 Style="margin-top: 0">Programming Language</h3>
                        <h4 className="github-msnc-h4">With my desire to improve my programming ability,
                            I was determined to challenge myself.
                        </h4>
                        <h4 className="github-msnc-h4">
                            After exploring the vast abyss of project ideas, I settled on... none of them.
                            I had previously recognized the complexities of language creation, and I was well aware of my abilities in Java's front
                            and back end. With this, I made the decision to make an attempt at creating a language, even if it may not follow conventional standards.
                        </h4>
                        <h4 className="github-msnc-h4">
                            Over several months, committing hundreds of hours of full-stack coding, I had slowly but surely began building
                            a functional, object capable language using Java as a backend.
                        </h4>
                        <h4 className="github-msnc-h4">
                            The obstacles in creating this language seemed endless, but when the baseline code became stable, the potential of the language
                            soared. While only embedded in my GitHub, you can still code in MSN Code <a href="https://github.com/masonmarker/TheMsnProject">here</a>.
                        </h4>
                        <h4 className="github-msnc-h4">
                            The question as of 4/19/2022 remains as to whether I should continue with the concept,
                            but for now I will do my best to repair any existing bugs. You can find a demonstration of the languages features below.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="msnc-vid-desc">
                <h1>Demonstration</h1>
                <iframe className="msnc-vid" width="560" height="315" src="https://www.youtube.com/embed/WRMVIQCrjL0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="msnscript-div">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
                </style>
                <h1 className="msnscript-title">MSNScript</h1>
                <div className="msnscript-sub">
                    <h3 Style="margin-left: 20vw; width: 25%;">MSNC 2.0</h3>
                    <h3 Style="margin-right: 20vw; width: 25%;">8-19-2022</h3>
                </div>

                <div className="msnscript-desc">
                    <p>After contemplating further advancements of MSN Code, I decided
                        to redevelop the language into a higher level, and less error-prone language.
                    </p>
                    <p>
                        In transferring MSNC 1.0 to a higher level language, it became clear that the cleanliness of the language
                        could be improved by moving the backend to Python. With the transition to Python and stability of
                        baseline code, MSNScript's versatility grew far beyond that of its predecessor.
                    </p>
                    <br />
                    <br />
                    <h2 Style="font-size: 3rem; font-family: 'Silkscreen', cursive; color:var(--lightpurple)">Changes</h2>
                    <div className="msnscript-imp">
                        <h3 Style="color:var(--lightpurple) ;text-align:left; margin-left: 1rem">Differences from MSNC 1.0 (JAVA):</h3>
                        <ul Style="text-align: left">
                            <li>
                                <p>no longer a need for semicolons</p>
                            </li>
                            <li>
                                <p>no spaces required in any syntax, script is read character by character regardless</p>
                            </li>
                            <li>
                                <p>supports multiple loops / conditions on the same line</p>
                            </li>
                            <li>
                                <p>supports multiple lines of code on the same LINE with ' | '</p>
                            </li>
                            <li>
                                <p>strings provided their own syntax with ' "" '</p>
                            </li>
                            <li>
                                <p>no need to declare types</p>
                            </li>
                            <li>
                                <p>cleaner method syntax with ' ~ '</p>
                            </li>
                            <li>
                                <p>loops <i>can</i> incorporate a variable with &#123;START:END:VAR&#125;</p>
                            </li>
                            <li>
                                <p>allows for default classes with methods, ex. Local , System</p>
                            </li>
                            <li>
                                <p>improved variable and method destruction capabilities</p>
                            </li>
                            <li>
                                <p>faster instruction interpretation (closer to a linear approach)</p>
                            </li>
                            <li>
                                <p>better flexibility with boolean expressions</p>
                            </li>
                            <li>
                                <p>one instruction can span across multiple lines with $$</p>
                            </li>
                            <li>
                                <p>array's 'each' method allows for faster looping through arrays</p>
                            </li>
                            <li>
                                <p>faster method execution with ^^^</p>
                            </li>
                        </ul>
                    </div>
                    <div className="msnscript-code">
                        <h1 Style="margin: 0 auto; margin-bottom: 1.5rem ">Try it yourself in your browser!</h1>
                        <Link to="/msnscript1" className="download-button" Style="color: white">MSNScript</Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

function gitClicked() {
    window.location.href = "https://github.com/masonmarker/TheMsnProject";
}

export const FadeInSection = ({ children }) => {

    const domRef = React.useRef();

    const [isVisible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:
            try {
                if (entries[0].isIntersecting) {

                    // Not possible to set it back to false like this:
                    setVisible(true);

                    // No need to keep observing:
                    observer.unobserve(domRef.current);
                }
            } catch (error) {
            }
        });

        try {
            observer.observe(domRef.current);

        } catch (error) {

            return () => observer.unobserve(domRef.current);
        }
    }, []);
    try {
        return (<section ref={domRef} className={isVisible ? ' is-visible' : ''}>{children}</section>);
    } catch (error) {
        return <div>
        </div>
    }
};

export default GitHub;