// location of MSN2 documentation and demonstration

import { FadeInSection } from "../github"
import './msn2.css'
import {Link} from 'react-router-dom'
import { Fade } from "@chakra-ui/react"


function Msn2docs() {
    return (
        <div className='msn2docs-div'>
            <Title title="MSN2 Docs" subtitle='Successor to MSNC and MSN1' subtitle2='12/28/2022' back='/github' next="/msn2basics"/>

            <Section title='MSN2: Your Programming Language' subtitle='Never before seen syntactical advantages are just waiting to be discovered 
                and shared as MSN2 grants you the ability to code as you see fit' subtitle2='The below documentation features types, conditionals, loops, system calls, user defined functions,
                threads, processes, API requests, posts and deletions, API endpoint hosting with Flask, interpreter redirections, and different macro varieties for adjusting the language'/>
            <Directory/>

        </div>
    )
}

function Title(props) {
    return (
        <div className='msn2docs-div'>
            <FadeInSection>
                <h className="msn2-title" style={{margin: '0 auto', marginBottom: '1rem', marginTop: '30vh',}}>{props.title}</h>
            </FadeInSection>
            <FadeInSection>
                <h1 className="msn2-ul" style={{color: 'white', fontSize: '1.2rem'}}><i>{props.subtitle}</i></h1>
                <h1 className="msn2-ul" style={{color: 'white', fontSize: '1.2rem'}}><i>{props.subtitle2}</i></h1>
            </FadeInSection>
            <div className='msn2-top-buttons-div' style={{marginBottom: '50vh'}}>
                <FadeInSection>
                    <Link to="/" className='msn2-big-title' style={{color: 'white', margin:0, marginTop: '4.5vh', fontSize: '2rem', textDecoration: 'none'}}>Home</Link>
                </FadeInSection>
                <FadeInSection>
                    <Link to={props.back} className='msn2-big-title' style={{color: 'white', margin:0, marginTop: '4.5vh',fontSize: '2rem', textDecoration: 'none'}}>Directory</Link>
                </FadeInSection>
                <FadeInSection>
                    <Link to={props.next} className='msn2-big-title' style={{color: 'white', margin:0, marginTop: '4.5vh', fontSize: '2rem', textDecoration: 'none'}}>Next</Link>
                </FadeInSection>

            </div>
        </div>
    )
}

function Section(props) {
    return (
        <div style={{marginBottom: '2rem'}}>
            <h1 className="msn2-ul" style={{fontSize: '2rem', marginLeft: '10vw', marginRight: '10vw'}}><i>{props.title}</i></h1>
            <p className='msn2-ul' style={{fontSize: '1rem', marginLeft: '10vw', marginRight: '10vw'}}>{props.subtitle}
            </p>
            <p className='msn2-ul' style={{fontSize: '1rem', marginLeft: '10vw', marginRight: '10vw'}}>{props.subtitle2}</p>
        </div>
    )
}

function Directory() {
    return (
        <div className='msn2-direct-div'>
            <h1 className="msn2-ul" style={{fontSize: '2rem', margin: '0 auto'}}><i>Directory</i></h1>
            <p className='msn2-ul' style={{fontSize: '1rem', margin: '0 auto'}}>Find <i>MSN2</i> programming assistance here</p>
            <div className='msn2-doc-buttons-div'>
                <Link to="/msn2basics" className='msn2-big-title' style={{color: 'white', margin:'0 auto', marginTop: '4.5vh' , fontSize: '2rem', textDecoration: 'none'}}>Basics</Link>
                <Link to="/msn2systemcalls" className='msn2-big-title' style={{color: 'white', margin:'0 auto', marginTop: '4.5vh', fontSize: '2rem', textDecoration: 'none'}}>System Calls</Link>
                <Link to="/msn2threads" className='msn2-big-title' style={{color: 'white', margin:'0 auto', marginTop: '4.5vh', fontSize: '2rem', textDecoration: 'none'}}>Threads</Link>
                <Link to="/msn2apis" className='msn2-big-title' style={{color: 'white', margin:'0 auto', marginTop: '4.5vh' , fontSize: '2rem', textDecoration: 'none'}}>APIs</Link>
                <Link to="/msn2redirection" className='msn2-big-title' style={{color: 'white', margin:'0 auto', marginTop: '4.5vh' , fontSize: '2rem', textDecoration: 'none'}}>Redirection</Link>
                <Link to="/msn2macros" className='msn2-big-title' style={{color: 'white', margin:'0 auto', marginTop: '4.5vh' , fontSize: '2rem', textDecoration: 'none'}}>Macros</Link>
                
                <Link to="/msn2examples" className='msn2-big-title' style={{color: 'white', margin:'0 auto', marginTop: '4.5vh', marginBottom:'10vh' , fontSize: '2rem', textDecoration: 'none'}}>Examples</Link>
            </div>

        </div>
    )
}


// export Title
export {Title, Section}

export default Msn2docs
