import './App.css'
import ResumeImage from './resumepicture07052022.png'
import {Link} from 'react-router-dom';

const Resume = () => {
    return (
        <div className="resume-body">
            
            <NavBar />


        </div>
    )
}


const NavBar = () => {
    return (
        <div>
            <div className="resume-navbar">
                <h3 Style="margin-left: 1rem">Résumé</h3>
                <h3 Style="margin-right: 1rem">Last Updated 7/5/22</h3>
            </div>

            <div Style="display: flex">
                <Link to="/" className="download-button"  Style="color: white; width: 6rem; margin-right: 1rem; font-size: 1.2rem">Back</Link>
                <div className="download-button" onClick={downloadResume}>
                  <h3 Style="color: white">Download</h3>
                </div>
            </div>


            <div className="img-container">
                <img  className="resume-img" src={ResumeImage}></img>
            </div>
        </div>
    )
}

// downloads the resume
function downloadResume() {
    var link = document.createElement('a');
    link.download = "resumepicture07052022.png";
    link.href = ResumeImage;
    link.click();
}

export default Resume;