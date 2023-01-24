// class for MSNScript2 / MSN2 / msn2
//
// author : Mason Marker
// date   : 12/27/2022
import './msn2.css';
import ReactTypingEffect from 'react-typing-effect';
import {Link} from 'react-router-dom';

function Msn2() {


    const print1 = 'print("CODE YOUR WAY")'
    const func1 = 'function("foo", =>(), "arg")'
    const loop1 = 'for(0, 10, "i", print())'
    const thread1 = 'thread("t1", print())'
    const process1 = 'fork("p1", print())'

    return (
        <div className='msn2-div'>
            <BigTitle/>
            <Typer messages={[print1, func1, loop1, thread1, process1]} _style={{
                fontSize: '3vw',
                marginBottom: '1rem'
            }}/>
            <Typer messages={[fix('log: "CODE YOUR WAY"', print1.length), fix('function foo(arg)', func1.length), fix('0|10|i (print())', loop1.length),
                fix('/t print()', thread1.length), fix('proc p1 : print()', process1.length)
            ]} _style={{
                fontSize: '3vw',
                marginBottom: '1rem'
            }}/>
            <Typer messages={[fix('print "CODE YOUR WAY"', print1.length), fix('func foo(arg)', func1.length), fix('loop 0|10: print()', loop1.length),
                fix('thread t1: print()', thread1.length), fix('process: print()', process1.length)
            ]} _style={{
                fontSize: '3vw',
                marginBottom: '1rem'
            }}/>
            <Typer messages={[fix('disp "CODE YOUR WAY"', print1.length), fix('f foo : arg', func1.length), fix('FROM 0 -> 10 DO print()', loop1.length),
                fix('thrd t1 does print()', thread1.length), fix('proc("p1", print())', process1.length)
            ]} _style={{
                fontSize: '3vw',
                marginBottom: '1rem'

            }}/>
            <Typer messages={[fix('-> CODE YOUR WAY', print1.length), fix('f foo : arg -> __result', func1.length), fix('for -0- -10- -i- print()', loop1.length),
                fix(':t1 prnt()', thread1.length), fix('p p1 print()', process1.length)
            ]} _style={{
                fontSize: '3vw',
            }}/>
            <Info/>
        </div>
    )
}

// converts the string specified to a string of a correct width
function fix(string, maxlen) {
    var length = string.length
    var str = new Array(maxlen - length + 1).join('\n')
    return string + str
}


function Info() {
    return (
        <div className='msn2-grid'>

            <Card text='What is MSN2?'>
                <ul className="msn2-ul">
                    <li>MSNScript2 was developed to bring to light the advantages of it's predecessors, as well as incorporate safer and more optimized syntactical advantages.</li>
                    <li>After researching more efficient interpretation methods than that of MSNC and MSN1, MSN2 could then recursively interpret nested functions.</li>
                    <li>With this, capabilities of the language grew beyond that of base syntax. Pro's of having a backend language as Python and recursive interpretation
                        grant even deepter capabilities. 
                    </li>
                    <li>Inspiration to continue the MSN programming language projects stemmed from the increase in public awareness involving the concept of AI and machine learning. 
                        Considering the potential of AI and complex modern day usage of AI API's by programmers, I decided to craft what could be a more easily accessible programming interface
                        for working with API's such as these.
                    </li>
                </ul>
            </Card>
            <Card text='Advantages'>
                <ul className="msn2-ul">
                    <li>As advertised, MSN2 offers the capability to write your own syntax to program with</li>
                    <li>With countless syntactical adjustments to be made, advantages to writing code only increase</li>
                    <li>MSNScript2 is a recursively interpreting language, meaning that it can now interpret nested functions</li>
                    <li>Incorporates inline functions</li>
                    <li>Simplified the thread / process creation mechanism</li>
                    <li>Simplified starting a local HTTP server on localhost and on network IP's</li>
                    <li>Simplified HTTP API service call convention (GET, POST, DELETE)</li>
                    <li>Added classes</li>
                    <li>More safety and confidence with dictionary setting and indexing</li>
                </ul>
            </Card>
            <Card text='Limitations'>
                <ul className="msn2-ul">
                    <li>Though you can implement your own syntax, the syntax at which you can create is limited to your imagination beyond, but not including the base language.
                        This means that you can create your own syntax for your personal use, however this syntax cannot involve tokens, symbols, or keywords that are already
                        used in the base language. Finding such tokens are not difficult, its simply recommended to grasp an understanding of the base language before you should create your own.
                    </li>
                    <li>Processes can only be forked in a Windows OS</li>
                    <li>This language has not been massively tested, as it has 1 constributor, leaving an unbelievable amount of room for interpretation error with code variety</li>
                    <li>HTTP API endpoints can only be started on localhost and local network as of 12/28/2022</li>
                </ul>
            </Card>
            <Card text='Documentation'>
                <ul className="msn2-ul">
                    <li>Current documentation explains how the language works under the hood, as well as provide information regarding
                        system calls, classes, types, threads, processes, API's, AI, and more
                    </li>
                    <li>
                        <i>MSN2</i> documentation includes tutorials with interactive programming environments to help you get started with the language
                    </li>
                </ul>
                <Link to="/msn2docs" className='msn2-big-title' style={{color: 'white', margin:0, marginTop: '4.5vh', marginBottom: '10vh', fontSize: '2rem', textDecoration: 'none'}}>Go to the docs</Link>
            </Card>


        </div>
    )
}

// creates a <style> class for the card
function Card(props) {
    return (
        <div className='msn2-card'>
            <h1 className='msn2-small-non-typing-title'>{props.text}</h1>
            {props.children}
        </div>
    )
}


function BigTitle() {
    return (
        <div className='msn2-big-title-div'>
            <h1 className='msn2-big-title'>MSNScript2</h1>
            <p className='msn2-big-title' style={{color: 'white', marginTop: 0, marginBottom: '10vh', marginLeft:"50vw" , fontSize: '2vw'}}>12/28/2022</p>
        </div>
    )
}

function SmallTitle(props) {
    return <Typer messages={props.messages} _style={{
        fontSize: '3vw',
        marginTop: '1rem',
        marginLeft: '1rem',
        marginRight: '1rem'
    }}/>
}

function Typer(props) {
    return <ReactTypingEffect className="msn2-title" speed={100} eraseSpeed={25} typingDelay={50} cursor=" _" text={props.messages} style={props._style} />
}

export default Msn2
