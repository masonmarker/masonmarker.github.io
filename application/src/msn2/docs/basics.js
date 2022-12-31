

import './../msn2.css'

// import msn2docs
import Msn2docs, { Title, Section } from './../msn2docs';


import msn2raw from './../raw/msn2raw'
import {Link} from 'react-router-dom';
//import react typing   
import ReactTypingEffect from 'react-typing-effect';
import React from 'react';

var pyodide;

window.addEventListener('load', prepare, false);

window.onload = prepare() 

async function prepare() {
    pyodide = await window.loadPyodide({
        indexURL : "https://cdn.jsdelivr.net/pyodide/v0.21.0/full/"
    });

    // import MSNScript2 source code
    await pyodide.runPython(msn2raw)
}

var outsprinting = 0

function Basics() {
    return (
        <div className='msn2docs-div'>

            <Title title='Basics' subtitle='Learn the basics!' subtitle2='Difficulty: Easy' back='/msn2docs' next='/msn2systemcalls'/>


            <Section title="Interpretation" subtitle={[
                <i>MSN2</i>, "'s backend is with Python, meaning much of the syntax is similar to Python, and Python fallback is requested if an instruction is not recognized as syntax of", <i>MSN2</i> ,". However, of course, there are many differences.",<br/>,<br/>,
                

                <i>MSN2</i>, "'s base syntax generally interprets code line by line, so there's no need for semicolons.", <br/>,
                "If a line of base code needs to continue to the next line, the line must be entirely surrounded by !{} (aggregate",
                " block syntax), OR the initial line must end with a '(', and eventually end with a ')'.", <br/>, <br/>,
                " Example: ", <br/>,
                <ExecutionDisplay executionid='ex:aggregate' code={["print('Saying ', end='')\n\n!{print(\n'hello ', end=''\n)}\n\nprint(\n\t'to the','world!')"]} codeheight='11rem'/>
            ]}/>

            <Section title="Assertions" subtitle={[
                "Assertions are a key component in verifying the correctness of your code.", <br/>,
                "Assertions are used to verify that a condition is true, and if it is not, an assertion error will be printed, providing details of the error.", <br/>,
                "assert() takes any amount of arguments separated by a ','. assert() verifies that every argument evaluates to 1.", <br/>, <br/>,
                "Find more about assert() in the ", <a href='/msn2systemcalls/'>system call documentation</a>, ".", <br/>, <br/>,
                <i>Note that the working assertion prints nothing, and the failing assertion prints an error message.</i>, <br/>,
                "Example: ", <br/>,
                <ExecutionDisplay executionid='ex:assert' code={["assert(True, 1, not 0, not(0), not False)"]} codeheight='3.2rem'/>, <br/>,
                <ExecutionDisplay executionid='ex:assertfailure' code={["assert(assert(not True))"]} codeheight='3.2rem'/>
            ]} />

            <Section title="Layout"  subtitle={[
                "The base language is laid out in a way where all instructions can be used as arguments to any function or syntax adjustment.", <br/>,
                "This means that instructions and syntax intertwining can become very recursive in nature, and", <br/>,
                "then permits us the ability to program virtually any algorithm with a single line of code.", <br/>, <br/>,

                <ExecutionDisplay executionid='ex:layout' code={["assert(1)\nassert(1, 1)\nassert(1, assert(\n\tassert(\n\t\tassert(\n\t\t\t1\n\t\t),\n\t\tassert(1)\n\t)\n))\n\nassert(1 == 1, 5 in [5], 'hello' in 'hello world')\nassert('key' in {'key': -5438.4382})\nassert(20 - 10 == 10, 5 > 3)"]} codeheight='18rem'/>
            ]} />

            <Section title="Comments" subtitle={[
                "Comments are a way to write notes in your code, and are ignored by the interpreter.", <br/>,
                "Comments are denoted by a #, and should be declared at the beginning of an instruction.", <br/>, <br/>,
                "Example: ", <br/>,
                <ExecutionDisplay executionid='ex:comment' code={["# prints an assertion result\nprint(assert(1, 1, not 0))"]} codeheight='7rem'/>
            ]}/>

            <Section title="Environment" subtitle={[
                "You can access a string representation of the environment of your code with the env() system call.", <br/>,
                "env() can also be found in the ", <a href='/msn2systemcalls/'>system call documentation</a>, ".", <br/>, <br/>,

                "env() takes 0 or 1 argument, the argument being a boolean as to whether the environment should be printed or not.", <br/>, <br/>,

                "Example: ", <br/>,
                <ExecutionDisplay executionid='ex:env' code={["env()\nenv(True)"]} codeheight='5rem'/>
            ]} />

            <Section title="Variables" subtitle={[
                "Variables are a way to store data in your code, and are used to store data for later use.", <br/>,
                "Variables are declared with the below syntax: ", <br/>,
                <ExecutionDisplay executionid='ex:variable' code={['var("integer", 5)\nenv(True)']} codeheight='6.3rem'/>,
            ]}/>

            <Section title="Variable manipulation" subtitle={[
                "Variables can be manipulated in various ways.", <br/>,
                "Variables can be accessed with the val(name) system call, taking a single string argument being the name of the variable.", <br/>,
                "Variables can also be accessed with the common variable method .val()", <br/>, <br/>,
                "Example: ", <br/>,
                <ExecutionDisplay executionid='ex:variablemanipulation' code={['var("integer", 5)\n\nprint(val("integer"))\nprint(integer.val())']} codeheight='8.5rem'/>,
            ]}  />

            <Section title="Variable types" subtitle={[
                "Variables can be of any type, and can be changed at any time.", <br/>,
                "Variables are of types and behave the same way as those in Python.", <br/>, <br/>,
                "You can find type specific methods in the ", <a href='/msn2systemcalls/'>system call documentation</a>, ".", <br/>, <br/>,

                "Example: ", <br/>,
                <ExecutionDisplay executionid='ex:variabletypes' code={['var("integer", 5)\nvar("float", 5.0)\nvar("string", "hello")\nvar("boolean", True)\nvar("list", [1, 2, 3])\nvar("dictionary", {"key": "value"})\nvar("function", lambda x: x + 1)\n\nprint(integer.val(), float.val(), string.val(), boolean.val(), list.val(), dictionary.val(), function.val(5))']} codeheight='17rem'/>
            ]} />

            <Section title="Inline function" subtitle={[
                "Inline functions are a way to create a function in a single line of code.", <br/>,
                "The inline function system call (=>()), similar to the rest of instructions in the base language, can be used as arguments to any function or syntax adjustment.", <br/>, 
                "The inline function takes any amount of arguments returns the evaluation of its last argument.", <br/>, <br/>,
                "Again, you can find methodological documentation of any unknown system call or variable method in the ", <a href='/msn2systemcalls/'>system call documentation</a>, ".", <br/>, <br/>,

                "Example: ", <br/>,
                <ExecutionDisplay executionid='ex:inlinefunction' code={[
                    'print(=>(\n\tvar("variable", [1, 2, 3]), \n\tvariable.val()\n))\n\n# simplifying the instruction\nprint(var("variable", [1, 2, 3]))'
                ]} codeheight='10rem'/>
            ]} />
            
            <Section title="Contexts" subtitle={[
                "MSN2 is split into contexts, you can view the context of a certain line of code with the env(should_print) system call.", <br/>, <br/>,
                "You can isolate a block of code with the new() or private() system calls, which can be found in the ", <a href='/msn2systemcalls/'>system call documentation</a>, ".", <br/>, <br/>,

                "In brief, a new context begins with no variables or methods, ", <br/>,
                "and a private context inherits copies of the variables and methods from the parent context. A private context cannot modify the variables owned by the parent context.", <br/>, <br/>,
                
                "Example: ", <br/>,
                <ExecutionDisplay executionid='ex:contexts' code={[
                    'var("global", 1)\nassert(global.val())\n\n# asserting the global variable is not visible here\nnew(=>(\n\tassert(not(exists("global")))\n))\n\n# asserting the variable is visible here\n' + 
                    "private(=>(\n\tassert(exists('global')),\n\tvar('private', 0), \n\tglobal.add(5), \n\tassert(equals(global.val(), 6))))\n\n# private variable should not exist\nassert(not(exists('private')))\n\n# global variable should still exist\nassert(exists('global'))\n\n# global variable should still be 1\nassert(equals(global.val(), 1))" +
                    "\nprint('[+] tests passed')"
                ]} codeheight='30rem'/>
            ]} />
            
            <Section title="You've learned the basics! Onto the next topic?" subtitle={[
                    <Link to="/msn2systemcalls" className='msn2-big-title' style={{color: 'white', margin:0, marginTop: '4.5vh', fontSize: '2rem', textDecoration: 'none'}}>Next Topic</Link>
            ]} />



        </div>
    )
}

function ExecutionDisplay(props) {
    return (
        <div className='msn2-execution-display-div'>
            <CodeDisplay codeid={props.executionid} code={props.code} codeheight={props.codeheight}/>
            <ExecuteButton executionid={props.executionid}/>
            <Out outid={props.executionid} text='Ready for execution'/>
        </div>
    )
}

function Out(props) {
    return (
        <div id={props.outid + "out"} className='msn2-out-div'>
            
        </div>
    )
}

// on click, function run should run with parameter executionid
function ExecuteButton(props) {
    return <div className='msn2-execute-button-div' id={props.executionid + 'button'} onClick={()=>run(props.executionid)}>execute</div>
}

function CodeDisplay(props) {
    return (
        <div className='msn2-code-div' style={{height: props.codeheight}}>
            <p style={{margin: 0,padding: 0, fontSize: ".7rem", marginLeft: '90%', userSelect: 'none'}}>Edit Me!</p>
            <textarea  id={props.codeid + 'code'} contentEditable="true" className="msn2-code-area">{props.code}</textarea>
        </div>
    )
}

function run(executionid) {

    outsprinting ++

    var code = document.getElementById(executionid + 'code').value
    var out = document.getElementById(executionid + 'out')
    var button = document.getElementById(executionid + 'button')

    // run code
    pyodide.runPython('inter = Interpreter()')
    pyodide.runPython('sc = ' + JSON.stringify(code))
   
    pyodide.runPython('thisout = inter.execute(sc)')
    var stdout = pyodide.runPython("sys.stdout.getvalue()")

    // for each line in stdout, add a <p> then break tag to out
    var lines = stdout.split('\n')
    
    
    



    // animate out to print stdout
    // can only print if this is the only out printing

    if (outsprinting == 1) {

        // we use an invisible character thats not a space to 
        // avoid shrinking the output for a few milliseconds
        // before the animation starts
        out.innerHTML = '‎'    
        var i = 0
        var interval = setInterval(function() {
            if (i < stdout.length) {
                if (stdout[i] == '\n') {
                    out.innerHTML += '<br/>' 
                } else {
                    out.innerHTML += stdout[i]
                }
                i++
            } else {
                clearInterval(interval)
                outsprinting --
            }
        }, Math.max(1, 1000 / stdout.length))
    } else {
        outsprinting --
    }

    // clear stdout
    pyodide.runPython("sys.stdout.truncate(0)")
    pyodide.runPython("sys.stdout.seek(0)")

}


export {ExecutionDisplay}
export default Basics