
import './App.css';
import {Link} from 'react-router-dom';
import React from 'react';

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
                    <div className="download-button" Style="background-color: var(--darkpurple)" onClick={gitClicked}>Visit</div>
                </div>
            </div>
            <FadeInSection>
            <div className="github-msnc">
                <div className="msnc-img"></div>
                <div Style="margin-left: 1rem;">
                    <div className="github-msnc-desc">
                        <h1 Style="margin-bottom: 0">MSN Code</h1>
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
                            Over several months, putting in hundreds of hours of full-stack coding, I had slowly but surely began building
                            a functional, object capable language using Java as a backend.
                        </h4>
                    </div>
                </div>
            </div>
            </FadeInSection>
        </div>
    )
}

function gitClicked() {
    window.location.href = "https://github.com/masonmarker/TheMsnProject";
}

const FadeInSection = ({children}) => {

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
    return (<section ref={ domRef } className={ isVisible ? ' is-visible' : '' }>{ children }</section>); 
    } catch (error) {
    return <div>
    </div>
    }
  };

export default GitHub;