import './App.css';

function App() {
  document.body.style = 'background: white;';
  return (
    <div className="App">
      <style>
         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap');
      </style>
      <NavBar /> 
      <h1 className="name-title">— Mason Marker —</h1>
      <About />
      <Footer />
    </div>
  );
}

const NavBar = () => {
  return (
    <div className="navbar">
      <h className="navbar-title">Hi! Most people call me..</h>
    </div>
  );
}

const About = () => {
  return (
    <div className="about-div">
      <h1>Who Am I?</h1>
      <p>I'm a software engineer with a passion for creating beautiful, responsive websites.</p>
      <p className="increased-margin-bottom">I'm currently working as an RPA engineer at <a href="https://www.genworth.com/" target="_blank" >Genworth</a>.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <p>Mason Marker</p>
      <p>2022</p>
    </div>
  )
}


export default App; 
