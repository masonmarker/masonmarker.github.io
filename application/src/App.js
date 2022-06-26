import './App.css';
import React from 'react';

function App() {
  document.body.style = 'background: white;';
  return (
    <div className="App">
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@200;500;700;800&display=swap');
</style>


      <NavBar /> 


      <FadeInSection>
      <About/>
      </FadeInSection>

      <FadeInSection>
      <MyVenture/>
      </FadeInSection>

      <FadeInSection>
      <MyServices/>
      </FadeInSection>

      <Footer />

      
    </div>
  );
}

const NavBar = () => {
  return (
    <div className="navbar">
      <h className="navbar-title"><i>Hi! Most people call me</i></h>
      <h1 className="name-title">— Mason Marker —</h1>

    </div>
  );
}

const About = () => {
  return (
    <div className="about-div">
      <h1>Who am I?</h1>
      <p Style="font-weight: bold;">I'm a passionate and driven junior computer science major at James Madison University.</p>
      <p>In entering my senior year, my yearning for knowledge continues to grow. I believe that while understanding new logical concepts in math and computer science, one can find this newly obtained logic applicable to countless ideas outside of the areas in which they have been learned.</p>
      <p><i>Computer Science is a gateway to a better ability to apply logic to non-logical concepts.</i></p>
    </div>
  )
}

const MyVenture = () => {

  return (
    <div className="my-ventures">
      <h1>My Ventures</h1>
      <p><b>In my years, I have contributed my full efforts to several companies' visions.</b></p>
    </div>
  )
}

const MyServices = () => {

  return (
    <div className="my-services">
      <h1>My Services</h1>
    </div>
  )

}


const Footer = () => {
  return (
    <div className="footer">
      <p Style="font-family: 'Bebas Neue', cursive;">Mason Marker</p>
      <p Style="font-family: 'Bebas Neue', cursive;">2022</p>
      <p Style="font-family: 'Bebas Neue', cursive;">Contact me on <a href="https://www.linkedin.com/in/masonmarker/">LinkedIn</a></p>
    </div>
  )
}

const FadeInSection = ({
  children,
}) => {
  const domRef = React.useRef();
  
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:     
      if (entries[0].isIntersecting) {
      
        // Not possible to set it back to false like this:
        setVisible(true);
        
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });
    
    observer.observe(domRef.current);
    
    return () => observer.unobserve(domRef.current);
  }, []);

  return (<section ref={ domRef } className={ isVisible ? ' is-visible' : '' }>{ children }</section>);
};

export default App; 
