// Automation!



import {Title, Section} from './../msn2docs'
import { ExecutionDisplay } from './basics'
import {Drop, ScrollerToSearch} from './systemcalls'
import Dropdown from 'react-dropdown';
import Arrow from 'react-dropdown'

// function Section(props) {
//     return (
//         <div id={props.id} style={{marginBottom: '2rem'}}>
//             <h1 className="msn2-ul" style={{fontSize: '2rem', marginLeft: '10vw', marginRight: '10vw'}}><i>{props.title}</i></h1>
//             <p className='msn2-ul' style={{fontSize: '1rem', marginLeft: '10vw', marginRight: '10vw'}}>{props.subtitle}
//             </p>
//             <p className='msn2-ul' style={{fontSize: '1rem', marginLeft: '10vw', marginRight: '10vw'}}>{props.subtitle2}</p>
//         </div>
//     )
// }



function Automation() {
    return (
        <div className="msn2docs-div">
            <Title title="Automation" subtitle="Let the computer do the work" subtitle2="Difficulty: Easy" back="/msn2docs" next="/msn2examples"/>
            <Section title="Automation documentation coming soon!"/>
        </div>
    )
}

export default Automation;