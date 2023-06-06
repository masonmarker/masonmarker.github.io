


import './../msn2.css'

import {Title, Section} from './../msn2docs'
import { ExecutionDisplay } from './basics'
import {Drop, ScrollerToSearch} from './systemcalls'
import Dropdown from 'react-dropdown';
import Arrow from 'react-dropdown'


function Threads() {
    return (
        <div className="msn2docs-div">
            <Title title="Threads" subtitle="Things happening at once?" subtitle2="Difficulty: Medium" back="/msn2docs" next="/msn2auto"/>
            <Section title="Multiprogramming documentation coming soon!"/>
        </div>
    )
}

export default Threads