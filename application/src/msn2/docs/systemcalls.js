


import { list } from '@chakra-ui/react'
import './../msn2.css'

import {Title, Section} from './../msn2docs'
import { ExecutionDisplay } from './basics'

import { useRef } from 'react'
import Dropdown from 'react-dropdown';
import React from 'react';

var systemcallnames = []

// system call page
function Systemcalls() {

    var calls = SystemCalls()
    var systemcalls = calls.props.children
    var as_string_array = []
    // add all system call names to the buffer
    for (var i = 0; i < systemcalls.length; i++) {
        as_string_array.push(systemcalls[i].props.name)
    }
    
    // remove duplicates
    as_string_array = [...new Set(as_string_array)]
    
    // sort alphabetically
    as_string_array.sort()

    // add everything from as string array to the systemcallnames array
    for (var i = 0; i < as_string_array.length; i++) {
        systemcallnames.push(as_string_array[i])
    }


    return (
        <div className='msn2docs-div' style={{
            margin:'0 auto',
            position:'relative',
            overflow: 'hidden'
        }}>


            <Title title='System Calls' subtitle='Tools for you!' subtitle2='Difficulty: Medium' back='/msn2docs' next='/msn2threads'/>
            <div id='scrolltotop'/>
            <Section title='Introduction' subtitle={[
                "System calls, as well as object methods make up the majority of the computation in ", <i>MSN2</i>, ".", <br />,
                "They are the tools that you use to manipulate data and perform actions.", <br />,
                "System calls are the functions that are built into the ", <i>MSN2</i>, " base language.", <br />,
                "This means that they are the functions that you can use without importing any modules.", <br />, <br />,
                "Object methods are the functions that are built into the ", <i>MSN2</i>, " base language.", <br />,
                "Objects methods are attached to either a specific type of object, or all objects (a global method).", <br />, <br />,
                "You will see different method types listed in the documentation, here are some definitions: ", <br />,
                <ul>
                    <li><b>System Call</b> - A function that is built into the base language</li>
                    <li><b>Global Method</b> - A method attached to all types</li>
                    <li><b>Number Method</b> - A method attached to all numbers (int and float)</li>
                    <li><b>String Method</b> - A method attached to a str</li>
                    <li><b>List Method</b> - A method attached to a list</li>
                    <li><b>Object Method</b> - A method attached to an object or dict</li>
                </ul>, <br />,
                "Also note that the documentation utilizes the type of ", <b>block</b>, " as a parameter type.", <br />,
                "This means that the parameter will be used as a function that is invoked when the method conditions are met.", <br />, <br />, 

                "This is a complete list of tools that are built into the ", <i>MSN2</i>, " base language.", <br />, <br />,
                "Use the search bar below to search for a specific method.", <br />, <br />,
                <Drop options={as_string_array}/>, <br />,
            ]}/>

            {calls}
            <ScrollerToSearch />

         </div> 
    )
}

function ScrollerToSearch() {
    return (

        // just testing out style instead of className for a change
        <div style={{
            // put the scroll to top button at the bottom of the page
            display: 'flex',
            justifyContent: 'center',   
            alignItems: 'center',
            padding: '0.5rem',
            position: 'fixed',
            bottom: '0',
            right: '0',
            margin: '1rem',
            cursor: 'pointer',
            color: 'white',
            backgroundColor: 'black',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.5rem black',
            zIndex: '1000',
            fontSize: '1.5rem',
            fontFamily: 'Segoe UI',
        }} onClick={scrollToTop}>
            
            Scroll to top
        </div>
    )
}

function scrollToTop() {
    document.getElementById('scrolltotop').scrollIntoView( {behavior: 'smooth'} )
}

// gets an array of all element id's with id's that include 'systemcall'
function allSystemCalls() {
    var allelements = document.getElementsByTagName('*');
    var systemcalls = [];
    for (var i = 0; i < allelements.length; i++) {
        if (allelements[i].id.endsWith('systemcall')) {
            systemcalls.push(allelements[i].id);
        }
    }
    return systemcalls;
}

function Drop(props) {
    return <Dropdown id='dropdown' onChange={dropChanged} arrowClassName="msn2-arrow" arrowClosed={<Arrow text="show all"/>} arrowOpen={<Arrow text="hide all"/>} placeholderClassName='msn2-drop-place' controlClassName="msn2-drop-control" menuClassName='msn2-drop-menu' options={props.options} placeholder="Select a system call"   />
}

function Arrow(props) {
    return <h2 style={{fontSize: '1.1rem'}}>{props.text}</h2>
}

// when dropdown changes, scroll to the system call
function dropChanged(newvalue) {
    var e = newvalue.value
    var allelements = document.getElementsByTagName('*');

    for (var i = 0; i < allelements.length; i++) {

        // replaces all greater than signs with &gt;
     //   e = e.replaceAll('&gt;', '>').replaceAll('&lt;', '<')
        if (allelements[i].id == e) {
            allelements[i].scrollIntoView()
            document.getElementsByClassName('Dropdown-placeholder msn2-drop-place').item(0).innerHTML = 'Select a system call'
            return            
        }
    }
}

function Args(props) {
    return (
        <div>
            <Section title={[<h2 style={{fontSize: '1.1rem'}}>Arguments</h2>]} subtitle={[
                props.args.map((arg, i) => <h2 style={{fontWeight: 'normal', fontSize: '1rem' }}>{i+1}. <b>{arg[0]}</b> : <b>{arg[1]}</b> -> {arg[2]}</h2>)
            ]} />
        </div>
    )
}

function KnownIssues(props) {
    return (
        <div>
            <Section title={[<h2>Known Issues</h2>]} subtitle={props.issues} />
        </div>
    )
}


// displays a System call nicely, possibly with an example
function SystemCall(props) {

    var argstring = ''
    for (var i = 0; i < props.args.length; i++) {
        argstring += props.args[i]
        if (i != props.args.length - 1) {
            argstring += ', '
        }
    }


    return (
        <div id={props.name}>
            <Section title={<h1 Style="font-size: 4rem">{props.name} ({argstring}) -> {props.return}</h1>} subtitle={[<h2 Style="font-size: 2rem">{props.type}</h2>]}  subtitle2={props.description}/>
            {props.example}
        </div>
    )
}


// gets all React system call components
function SystemCalls() {
    return (
        <div style={{
            width: '100%'
        }}>
            <SystemCall style={{}} type="System Call" name='print' args={["any", "..."]} return="str" description={["Prints any amount of strings to the console.", <br />,
            "Returns the last string printed.", <br />, <br />,
            "It is important to note that there is a different between ", <i>MSN2</i>, "'s print() and Python's print().", <br />,
            "as both are able to be utilized.", <br />, <br />,
            <i>MSN2</i>, "'s print() is invoked by nesting ",<i>MSN2</i>," code as arguments to print(), otherwise Python's print() is invoked.", <br /> ,   
            "It should be noted that when Python's print() is invoked, print()'s return value is None, which is not the same as the base language", <br />, <br />,
            <b>Example:</b>,
            <ExecutionDisplay executionid='ex:printsystemcall' code="print('Hello,', 'World!')"/>
            ]}/>

            <SystemCall type="System Call" name='redirect' args={["str", "block"]} return="list" description={[
                "Redirects each line after redirect() and before stopredirect() as a variable to the block passed as a second parameter with a variable name that is the first parameter.", <br />,
                "Returns a list that is [arg1, arg2]", <br />, <br />,
                "This method is Interpreter specific, however should not be nested.", <br />, <br />,
                "This method works in unison with stopredirect() and startredirect().", <br />, <br />,
                "This is essentially powerful because it grants the opportunity to save a large amount of time when writing code.", <br />,
                "This is because it allows you to write code that is more readable and easier to understand in the long term.", <br />,
                "It also allows for possible multi-line interpretations.", <br />, <br />,

                <KnownIssues issues={
                    <ul>
                        <li>Though not necessarily a massive issue, macros invoked within a redirected context can create problems for the rest of the code that will be interpreted in the future</li>
                        <li>an Interpreter's redirection can be tedious and prove
                            to be a fragile component of the language because of a certain kink
                              in msn2's design:</li>
                            <li>Priority handling within the backend accepts macros before recognizing
                            an active Interpreter redirection request. this was implemented to simplify 
                            the redirection cancellation process, being two system calls, 
                            stopredirect() and startredirect() by enabling a getaway mechanism 
                            via macros</li>
                            <li>This restricts all macros from being used within redirected code
                            including built in @, python fallback and embedded syntax and user defined macros/ postmacros /
                            syntax and enclosed syntax. this is specifically because macros were developed
                            to interpret multiple instructions as a single, stringed argument.
                            however when an Interpreter is asked to redirect an instruction,
                            and the instruction is a one of the macro types listed above, it will 
                            incorrectly proceed to adhere to the macro's instructions instead of 
                            redirecting the instruction to a block of code, as it was designed. </li>
                            <li>There is a fix to this issue, being that each macro used within the redirected
                            context should be have a private() block overseeing the logic performed, see below
                            for examples</li>
                            <li>The issue is not the case when a macro is tasked with ending the redirection.
                            as this instruction is not a component of redirected code</li>
                    </ul>
                }/>,

                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:redirectsystemcall" code={[
                    "@ l = []\n\n" +
                    "# start redirection\n" +
                    "redirect('rline', each(-(rline.val()), 'rel', l.add(rel.val())))\n\n" +
                    "# in redirected context\n" +
                    "[i for i in range(0, 3)]\n" +
                    "[int(i) for i in '3 4 5'.split()]\n" +
                    "[6, 7, 8]\n\n" +
                    "stopredirect()\n" +
                    "startredirect()\n\n" +
                    "if(assert(l.equals([0, 1, 2, 3, 4, 5, 6, 7, 8])), print('[+] test passed!'))\n" +
                    "l.print()"
                ]} />
            ]} />

            <SystemCall type="System Call" name='stopredirect' args={[]} return="True" description={[
                "stopredirect() goes hand in hand with redirect() and startredirect().", <br />,
                "stopredirect() is used to stop the redirection of instructions to a block of code.", <br />,
                "stopredirect() always returns True.", <br />, <br />,
                "This method is Interpreter specific, however should not be nested.", <br />, <br />,
                <b>Example</b>, " with redirect() and startredirect()",
                <ExecutionDisplay executionid="ex:stopredirectsystemcall" code={[
                    "# starting redirection\n" + 
                    "redirect('__unused', print('Hello, World!'))\n\n" +
                    "...\n" +
                    "...\n" +
                    "...\n\n" +

                    "# stopping redirection\n" +
                    "stopredirect()\n\n" +
                    "print('[*] Starting redirection block...')\n\n" + 
                    "startredirect()"
                ]} />
            ]} />

            <SystemCall type="System Call" name='startredirect' args={[]} return="any" description={[
                "Starts a recorded block for redirection to a block of code.", <br />,
                "Returns the redirect block's evaluation for the last line redirected.", <br />,
                "This method is Interpreter specific, however should not be nested.", <br />, <br />,
                <b>Example</b>, " with redirect() and stopredirect()",
                <ExecutionDisplay executionid="ex:startredirectsystemcall" code={[
                    "# starting redirection\n" +
                    "redirect('__unused', print('Hello, World!'))\n\n" +
                    "...\n" +
                    "...\n\n" +
                    "stopredirect()\n\n" +
                    "# invoking the redirected block to the function specified in redirect()\n" +
                    "startredirect()\n" +
                    "startredirect()" 
                ]} />
            ]} />

            <SystemCall type="System Call" name='function' args={['str', 'block', 'str', '...']} return="str" description={[

                <Args args={[
                    ['fname', 'str', "serves as the new function's name"],
                    ['function body', 'block', "the function that will be interpreted when the function is called"],
                    ['function arg 1', 'str' , "A string name for the variable that will be used as the first argument to this function"],
                    ['function arg x', 'str', "A string name for the variable that will be used as the rest of the arguments to this function"]
                ]}/>,
                "function() creates a function that can be exactly replicated with '~' and '--' function definition syntax", <br />,
                "function() is used to create a new function that can be called later on.", <br />,
                "function() as a system call was created to allow for nested user defined functions.", <br />,
                "function() returns the name of the function that was created.", <br />,
                "After the second argument, function() takes any amount of arguments, being variable names for arguments corresponding to the function." +
                "that will be created.", <br />, <br />,
                "function() should be used in unison with system call ret(), which returns a value to a function", <br />,
                "function() will be switched to a zero-argument system call if any of the function variable name arguments are None", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:functionsystemcall" code={[
                    "# defining a function that takes two arguments\n" +
                    "function('printf', print(arg1.val(), arg2.val()), 'arg1', 'arg2')\n\n" +
                    "# calling the function\n" +
                    "printf('Hello, ', 'World!')\n\n" +
                    "# privately calling the function to replicate a Pythonic function call, hiding function variables from other contexts\n" +
                    "private(printf('Hello, ', 'World!'))"
                ]} />,

                <b>Example with ret():</b>,
                <ExecutionDisplay executionid="ex:functionsystemcall2" code={[
                    "# defining a function that takes two arguments and returns to add()\n" +
                    "function('addnum', ret('addnum', arg1.add(arg2.val())), 'arg1', 'arg2')\n\n" +
                    "# calling the function\n" +
                    "print(@v1 = random(0,10,), '+', @v2 = random(0,10,), '=', addnum(v1.val(), v2.val()))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='ret' args={['str', 'any']} return="any" description={[
                <Args args={[
                    ['function name', 'str', "the name of the function that will be returned to"],
                    ['return value', 'any', "the value that will be returned to the function"]
                ]} />,
                "ret() works in unison with function() to return a value to a function.", <br />,
                "See the above example for usage of ret() with function()"
            ]} />

            <SystemCall type="System Call" name='from' args={['any', '...']} return="list" description={[
                "from() creates a list with the arguments provided", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:fromsystemcall" code={[
                    "print(from(1, -5.3, {}, [], 'Hello, World!', @v=random(0, 10,)))"
                ]} />,
                "It's worth noting that {} and [] syntax cannot accept base language code, which further emphasizes the need for from()", <br />,
                "Fortunately there are many ways to create a list, as shown below:", <br />,

                <ExecutionDisplay executionid="ex:fromsystemcall2" code={[
                    "# literals only\n" +
                    "print([1, -5.3, {}, [], 'Hello, World!', 10])\n\n" + 
                     
                    "# with <<>> Python fallback enclosing syntax\n" +
                    "print(<< [1, -5.3, {}, [], 'Hello, World!', |random(10, 10,)|] >>)\n\n" +

                    "# with <2><2> msn2 embedding syntax\n" +
                    "print(<2> [1, -5.3, {}, [], 'Hello, World!', %random(10,10,)%] <2>)\n\n" +

                    "# by adding msn2 values to a list\n" +
                    "print(=>(@a=[1,-5.3,{},[],'Hello, World!'], a.add(random(10,10,))))\n\n"
                ]} />,
                
            ]} />
            
            <SystemCall type="System Call" name='dictfrom' args={['any', '...']} return="dict" description={[

                <Args args={[
                    ['even index', 'str', 'the key for the dictionary'],
                    ['odd index', 'any', 'the value for the dictionary']
                ]} />,

                "dictfrom() creates a dictionary with the arguments provided", <br />, <br />,
                "Similarly to from(), dictfrom() was created to fix issues with {} syntax", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:dictfromsystemcall" code={[
                    "print(dictfrom('a', 1, 'b', 2, 'c', 3))"
                ]} />,

            ]} />

            <SystemCall type="System Call" name='split' args={['str', 'str']} return="list" description={[
                <Args args={[
                    ['string', 'str', 'the string to split'],
                    ['delimiter', 'str', 'the delimiter to split the string by']
                ]} />,
                "split() splits a string by a delimiter and returns a list", <br />, 
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:splitsystemcall" code={[
                    "print(split('Hello, World!', ', '))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='between' args={['str', 'str']} return="str" description={[
                <Args args={[
                    ['token', 'str', 'a token that should be paired within the string, tokens should surround text to extract into the return list'],
                    ['string', 'str', 'the string to extract text from']
                ]} />,
                "between() extracts all occurances of text between two tokens and returns it", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:bewtweensystemcall" code={[
                    "print(between('--', '--Hello--, --World--!'))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='isstr' args={['any']} return="bool" description={[
                <Args args={[
                    ['value', 'any', 'the value to check if it is a string']
                ]} />,
                "isstr() checks if a value is a string and returns a boolean", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:isstrsystemcall" code={[
                    "print(isstr('Hello, World!'))\n" + 
                    "print(isstr(1))"
                    
                ]} />,
            ]} />

            <SystemCall type="System Call" name='islist' args={['any']} return="bool" description={[
                <Args args={[
                    ['value', 'any', 'the value to check if it is a list']
                ]} />,
                "islist() checks if a value is a list and returns a boolean", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:islistsystemcall" code={[
                    "print(islist([1, 2, 3]))\n" +
                    "print(islist(1))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='isdict' args={['any']} return="bool" description={[
                <Args args={[
                    ['value', 'any', 'the value to check if it is a dictionary']
                ]} />,
                "isdict() checks if a value is a dictionary and returns a boolean", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:isdictsystemcall" code={[
                    "print(isdict({1: 2, 3: 4}))\n" +
                    "print(isdict(1))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='isfloat' args={['any']} return="bool" description={[
                <Args args={[
                    ['value', 'any', 'the value to check if it is a float']
                ]} />,
                "isfloat() checks if a value is a float and returns a boolean", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:isfloatsystemcall" code={[
                    "print(isfloat(1.0))\n" +
                    "print(isfloat(1))"
                ]} />
            ]}/>

            <SystemCall type="System Call" name='isint' args={['any']} return="bool" description={[
                <Args args={[
                    ['value', 'any', 'the value to check if it is an integer']
                ]} />,
                "isint() checks if a value is an integer and returns a boolean", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:isintsystemcall" code={[
                    "print(isint(1))\n" +
                    "print(isint(1.0))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='sum' args={['list', '...']} return="num" description={[
                <Args args={[
                    ['list', 'list', 'the list to sum'],
                    ['...', 'any', 'any number of lists to add to the sum']
                ]} />,
                "sum() sums a list of numbers and returns the sum", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:sumsystemcall" code={[
                    "print(sum([1, 2, 3]))\n" +
                    "print(sum([1, 2, 3], [3, 2, 1]))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='var' args={['str', 'any']} return="any" description={[
                <Args args={[
                    ['name', 'str', 'the name of the variable'],
                    ['value', 'any', 'the value of the variable']
                ]} />,
                "var() creates a variable with a name and value", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:varsystemcall" code={[
                    "var('x', 1)\n" +
                    "x.print()"
                ]} />
            ]} />

            <SystemCall type="System Call" name='list' args={['any']} return="list" description={[
                <Args args={[
                    ['value', 'any', 'the value to convert to a list']
                ]} />,
                "list() converts a value to a list", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:listsystemcall" code={[
                    "print(list(range(0, 5)))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='exists' args={['str']} return="bool" description={[
                <Args args={[
                    ['name', 'str', 'the name of the variable to check if it exists']
                ]} />,
                "exists() checks if a variable exists and returns a boolean", <br />,
                "This method checks only the scope of the current Interpreter, and cannot detect variables existing in an isolated context", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:existssystemcall" code={[
                    "var('x', 1)\n" +
                    "assert(exists('x'))\n" +
                    "assert(not(exists('y')))\n\n" + 
                    "# checking in a new context\n" + 
                    "new(=>(print(exists('x'), '\\n', exists('y'))))\n\n" +
                    "# checking in a private() context\n" +
                    "private(=>(print(exists('x'), '\\n', not(exists('y')))))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='len' args={['indexable']} return="int" description={[
                <Args args={[
                    ['indexable', 'indexable', 'the indexable to get the length of']
                ]} />,
                "len() gets the length of an indexable", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:lensystemcall" code={[
                    "print(len([1, 2, 3]))\n" +
                    "print(len('hello'))\n" + 
                    "print(len({'key': 3, 'key2': 4}))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='assert' args={['any', '...']} return="bool" description={[
                <Args args={[
                    ['value', 'any', 'the value to check if it is true'],
                    ['...', 'any', 'any number of values to check if they are true']
                ]} />,
                "assert() checks if all arguments evaluate to True, if this does not happen, an assertion error is printing with details about the assertion", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:assertsystemcall" code={[
                    "assert(1 == 1)\n" +
                    "assert(1 == 1, 2 == 2)\n" +
                    "assert(1 == 1, 2 == 3)"
                ]} />
            ]} />

            <SystemCall type="System Call" name='if' args={['bool', 'block', '(opt) block']} return="any" description={[
                <Args args={[
                    ['condition', 'bool', 'the condition to check if it is true'],
                    ['block', 'block', 'the block to execute if the condition is true'],
                    ['(opt) block', 'block', 'the block to execute if the condition is false']
                ]} />,
                "if() checks if a condition is true, and executes a block if it is", <br />,
                "The else block is optional, and if it is not provided, nothing will be executed if the condition is false", <br />,
                "Returns the value of the block that was executed", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:ifsystemcall" code={[
                    "if(1==1, print('Hello, World!'))\n" +
                    "if(1==2,, print('Hello, World!'))\n"
                ]} />

            ]} />

            <SystemCall type="System Call" name='while' args={['bool', 'block']} return="True" description={[
                <Args args={[
                    ['condition', 'bool', 'the condition to check if it is true'],
                    ['block', 'block', 'the block to execute if the condition is true']
                ]} />,
                "while() constantly checks if a condition is true, and executes a block if it is", <br />,
                "Returns True when the loop is finished", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:whilesystemcall" code={[
                    "@ x = 0\n" +
                    "while(x < 5, print(@x += 1))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='for' args={['int', 'int', 'str', 'block']} return="int" description={[
                <Args args={[
                    ['start', 'int', 'the starting value'],
                    ['end', 'int', 'the ending value'],
                    ['var', 'str', 'the name of the index variable to use'],
                    ['block', 'block', 'the block to execute for each value']
                ]} />,
                "for() iterates over a range of integers, and executes a block for each integer", <br />,
                "Returns the last value of the index variable", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:forsystemcall" code={[
                    "for (0, 5, 'x', x.print())"
                ]} />
            ]} />

            <SystemCall type="System Call" name='each' args={['indexable', 'str', 'block']} return="indexable" description={[
                <Args args={[
                    ['indexable', 'indexable', 'the indexable to iterate over'],
                    ['var', 'str', 'the name of the index variable to use'],
                    ['block', 'block', 'the block to execute for each value']
                ]} />,
                "each() iterates over an indexable, and executes a block for each value", <br />,
                "Returns the indexable", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:eachsystemcall" code={[
                    "each([1, 2, 3], 'x', x.print())"
                ]} />
            ]} />

            <SystemCall type="System Call" name='add' args={['str', 'any']} return="num" description={[
                <Args args={[
                    ['var', 'str', 'the variable to add to'],
                    ['value', 'any', 'the value to add to the variable']
                ]} />,
                "add() adds a value to a variable", <br />,
                "Returns the new value of the variable", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:addsystemcall" code={[
                    "@ x = 0\n" +
                    "add('x', 1)\n" +
                    "x.print()"
                ]} />
            ]} />

            <SystemCall type="System Call" name='sub' args={['str', 'any']} return="num" description={[
                <Args args={[
                    ['var', 'str', 'the variable to subtract from'],
                    ['value', 'any', 'the value to subtract from the variable']
                ]} />,
                "sub() subtracts a value from a variable", <br />,
                "Returns the new value of the variable", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:subsystemcall" code={[
                    "@ x = 0\n" +
                    "sub('x', 1)\n" +
                    "x.print()"
                ]} />
            ]} />

            <SystemCall type="System Call" name='mul' args={['str', 'any']} return="num" description={[
                <Args args={[
                    ['var', 'str', 'the variable to multiply'],
                    ['value', 'any', 'the value to multiply the variable by']
                ]} />,
                "mul() multiplies a variable by a value", <br />,
                "Returns the new value of the variable", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:mulsystemcall" code={[
                    "@ x = 2\n" +
                    "mul('x', 2)\n" +
                    "x.print()"
                ]} />
            ]} />

            <SystemCall type="System Call" name='div' args={['str', 'any']} return="num" description={[
                <Args args={[
                    ['var', 'str', 'the variable to divide'],
                    ['value', 'any', 'the value to divide the variable by']
                ]} />,
                "div() divides a variable by a value", <br />,
                "Returns the new value of the variable", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:divsystemcall" code={[
                    "@ x = 2\n" +
                    "div('x', 2)\n" +
                    "x.print()"
                ]} />
            ]} />

            <SystemCall type="System Call" name='append' args={['str', 'any']} return="indexable" description={[
                <Args args={[
                    ['var', 'str', 'the variable to append to'],
                    ['value', 'any', 'the value to append to the variable']
                ]} />,
                "append() appends a value to a variable", <br />,
                "Returns the new value of the variable", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:appendsystemcall" code={[
                    "@ x = [1, 2, 3]\n" +
                    "append('x', 4)\n" +
                    "x.print()"
                ]} />
            ]} />

            <SystemCall type="System Call" name='->' args={['indexable', 'any']} return="any" description={[
                <Args args={[
                    ['indexable element', 'indexable', 'the element to get'],
                    ['value', 'any', 'the value to get from the indexable']
                ]} />,
                "->() indexes an indexable", <br />,
                "Returns the value at the index specified", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:arrow" code={[
                    "@ x = [1, 2, 3]\n" +
                    "print(->(x.val(), 1))\n\n" +
                    "@ y = {'a': 1, 'b': 2, 'c': 3}\n" +
                    "print(->(y.val(), 'b'))"
                ]} />
            ]} />

            <SystemCall type="System Call" name='version' args={[]} return='num' description={[
                "version() returns the version of the interpreter", <br />,
                "Returns the version of the interpreter", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:versionsystemcall" code={[
                    "print(version())"
                ]} />
            ]} />

            <SystemCall type="System Call" name='destroy' args={['str', '...']} return='True' description={[
                <Args args={[
                    ['var', 'str', 'the variable to destroy'],
                    ['...', '...', 'any other variables to destroy']
                ]} />,
                "destroy() destroys a variable for the working context", <br />,
                "if provided with '__' as an argument, it will destroy all variables beginning with '__'", <br />,
                "Returns True", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:destroysystemcall" code={[
                    "@ x = 1\n" +
                    "env(True)\n" +
                    "destroy('x')\n" +
                    "env(True)"
                ]} />
            ]} />

            <SystemCall type="System Call" name='random' args={['num', 'num', '(opt) any']} return='num' description={[
                <Args args={[
                    ['min', 'num', 'the minimum value'],
                    ['max', 'num', 'the maximum value'],
                    ['(opt) type', 'any', 'used as a switch for return type']
                ]} />,
                "random() returns a random number between the min and max values", <br />,
                "random() will return a float if provided with the default 2 arguments", <br />,
                "If provided with a third argument, regardless of what that argument may be, random() will return an integer", <br />,
                "Returns a random number", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:randomsystemcall" code={[
                    "# random float\n" +
                    "print(random(1, 10))\n\n" +
                    "# random integer return invoked\n" +
                    "print(random(1, 10,))"
                ]} />
            ]} />

            <SystemCall type="System Call" name="syntax" args={['str', 'str', 'block']} return="list" description={[
                <Args args={[
                    ['token', 'str', 'the token that will invoke the macro block'],
                    ['name', 'str', 'the name of the variable to store the interpreting line in'],
                    ['block', 'block', 'the block to execute when the token is found surrounding text']
                ]} />,
                "syntax() creates a macro that will execute a block of code when a token is found surrounding a piece of text", <br />,
                "The token specified in the macro is highly recommended to be unique to avoid conflicts with other macros or base language syntax", <br />,
                "Returns a list of the token, name, and block", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:syntaxsystemcall" code={[
                    "syntax('$$', 'x', x.print())\n" +
                    "$$Hello, World!$$\n\n" +
                    "syntax('$$', 'x', op.div(-(x.val()), 2))\n" +
                    "print($$16$$)\n" + 
                    "print($$ 8 $$)"
                ]} />
            ]} />

            <SystemCall type="System Call" name='enclosedsyntax' args={['str', 'str', 'str', 'block', '(opt) any']} return="list" description={[
                <Args args={[
                    ['start', 'str', 'the token that will invoke the macro block'],
                    ['end', 'str', 'the token that will end the macro block'],
                    ['name', 'str', 'the name of the variable to store the interpreting line in'],
                    ['block', 'block', 'the block to execute when the start and end tokens are found surrounding text'],
                    ['(opt) return', 'any', 'used as a switch for what will be returned']
                ]} />,
                "enclosedsyntax() creates a macro that will execute a block of code when a start and end token are found surrounding a piece of text as an instruction", <br />,
                "enclosedsyntax() will return a list of the start, end, name, and block if provided with the default 4 arguments", <br />,
                "If provided with a fifth argument enclosedsyntax() will return the value passed as the 5th argument instead of the the evaluation of the block.", <br />, <br/>,
                "The token specified in the macro is highly recommended to be unique to avoid conflicts with other macros or base language syntax", <br />,

                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:enclosedsyntaxsystemcall" code={[
                    "# creating an enclosing syntax for creating a range of numbers\n" +
                    "enclosedsyntax('rng[', ']', 'encline', private(=>(@sp=encline.split(' '), @i1=-(sp.get(0)), @i2=-(sp.get(1)), <<list(range(|i1.val()|, |i2.val()|))>>)))\n\n" + 
                    "print(rng[1 5])\n" +
                    "print(rng[5 10])"
                ]} />,
                "an enclosedsyntax() call should usually utilize only 4 arguments, the 5th argument can become useful with nested enclosing syntax calls", <br />,
                "This won't be demonstrated here, however it has been demonstrated in my GitHub", <br />, <br/>,
                "Another enclosedsyntax() example:", <br />,
                <ExecutionDisplay executionid="ex:enclosedsyntaxsystemcall2" code={[
                    '# defining new variable syntax up to 10\n' +
                    "for(0, 10, 'i', enclosedsyntax('number ', i.str(), '__unused',, i.val()))\n\n" +
                    "print(number 3)\n" +
                    "print(number 5)\n" +
                    "print(number 9)"
                ]} />
            ]} />

            <SystemCall type="System Call" name="macro" args={['str', 'str', 'block', '(opt) any']} return="list" description={[
                <Args args={[
                    ['token', 'str', 'the token that will invoke the macro block'],
                    ['name', 'str', 'the name of the variable to store the interpreting line in'],
                    ['block', 'block', 'the block to execute when the token is found surrounding text'],
                    ['(opt) return', 'any', 'used as a switch for what will be returned']
                ]} />,
                "macro() creates a starting token for the working Interpreter to recognize as the Interpreter consumes each line of code", <br />,
                "macro() will return a list of the token, name, and block if provided with the default 3 arguments", <br />,
                "If provided with a fourth argument macro() will return the value passed as the 4th argument instead of the the evaluation of the block, similar to enclosedsyntax().", <br />, <br/>,
                "The token specified in the macro is highly recommended to be unique to avoid conflicts with other macros or base language syntax", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:macrosystemcall" code={[
                    "# defining a macro\n" +
                    "macro('$$', 'x', x.print())\n\n" +
                    "$$Hello, World!"
                ]} />,
                "macro() calls should usually utilize only 3 arguments, the 4th argument can become useful with nested macro calls", <br />,
                <b>Example:</b> ,
                <ExecutionDisplay executionid="ex:macrosystemcall2" code={[
`# creates new syntax to set a variable
# new syntax specifically evaluates the first two arguments provided
# as per C syntax, the variable name cannot contain spaces
macro('define', '__def', =>(

    # prepares the variable definition
    __def.replace('"', ''),
    __def.strip(),

    # prepare to create the new variable
    @vn = '',
    @vl = '',
    @at_value = 0,

    # using val() for complex return values
    each( val ('__def'), 'char', =>(
        if (not(?at_value?), =>(
            if (?char? == ' ',  @at_value = 1),
            if (?char? != ' ', vn.add(?char?))
        ), vl.add(?char?))
    )),

    # strip value and evaluate according to the type contained in the value string 
    vl.strip(),

    if (?vl? != 'None' and ?vl? != None, =>(
        var('__ev', -(?vl?)),
        if (?__ev? != None, var('vl', ?__ev?))
    )),

    print('[+] creating macro:', ?vn?, 'with value:', ?vl?),

    # creates a new macro that will replace the variable name specified
    # with the value stored
    # note that macro can take a fourth argument in place of the third
    # to return a specific value as opposed to running a block of code
    macro(?vn?, '__unused', None , ?vl?)
))

define hello 'Hello'
define world 'World!'

print(cat(hello, ','), world)`
                ]} />

            ]} />

            <SystemCall type="System Call" name="postmacro" args={['str', 'str', 'block', '(opt) any']} return="list" description={[
                <Args args={[
                    ['token', 'str', 'the token that will invoke the macro block'],
                    ['name', 'str', 'the name of the variable to store the interpreting line in'],
                    ['block', 'block', 'the block to execute when the token is found surrounding text'],
                    ['(opt) return', 'any', 'used as a switch for what will be returned']
                ]} />,
                "postmacro(), as opposed to macro(), creates an ending token that should be placed at the end of the line that will invoke the macro block", <br />,
                "postmacro() will return a list of the token, name, and block if provided with the default 3 arguments", <br />,
                "If provided with a fourth argument postmacro() will return the value passed as the 4th argument instead of the the evaluation of the block, similar to enclosedsyntax().", <br />, <br/>,
                "The token specified in the postmacro is highly recommended to be unique to avoid conflicts with other macros or base language syntax", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:postmacrosystemcall" code={[`
# defining a postmacro that makes assertions
postmacro('??', '__line', if(not(-(__line.val())), print('[!] assertion failed:', __line.val())))

# this line will print '[!] assertion failed: 1 == 2'
1 == 2 ??

# this line will not print anything
1 == 1 ??
                `]} />
            ]} />


            <SystemCall type="System Call" name="val" args={['str']} return="any" description={[
                <Args args={[
                    ['variable name', 'str', "the string name of the variable's value to return"]
                ]} />,
                "val() returns the value of the variable specified by the string argument", <br />,
                "val() is different from any ?? number replacement syntax, as it's used to retrieve a value from any complex variable type", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:valsystemcall" code={[
                    "var('x', [1, 2, 3])\n" + 
                    "print(val('x'))"
                ]} />

            ]} />


            <SystemCall type="System Call" name='type' args={['any']} return="class" description={[
                <Args args={[
                    ['variable', 'any', 'the variable to return the type of']
                ]} />,
                "type() returns the type of the variable specified by the argument", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:typesystemcall" code={[
                    "print(type(1))\n" +
                    "print(type('Hello'))\n" +
                    "print(type([1, 2, 3]))\n" +
                    "print(type({1: 'one', 2: 'two'}))\n" +
                    "print(type(1.0))\n" +
                    "print(type(True))\n" +
                    "print(type(None))"
                ]} />
            ]} />


            <SystemCall type="System Call" name="set" args={['indexable', 'any', 'any']} return="any" description={[
                <Args args={[
                    ['indexable', 'any', 'the indexable variable to set the value of'],
                    ['index', 'any', 'the index to set the value at'],
                    ['value', 'any', 'the value to set at the index']
                ]} />,

                "set() sets the value of the indexable variable at the index specified to the value specified", <br />,
                "set() returns the value that was set", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:setsystemcall" code={[
                    "var('x', [1, 2, 3])\n" +
                    "print(<<setting index |@i1=1| to>>, set('x', i1.val(), 5))\n" +
                    "print('resulting list:', x.val())"
                ]} />
            ]}/>

            <SystemCall type="System Call" name="del" args={['str', '...']} return="True" description={[
                <Args args={[
                    ['variable name', 'str', 'the name of the variable to delete'],
                    ['...', '...', 'any additional variables to delete']
                ]} />,
                "del() deletes the variables specified by the string arguments", <br />,
                "del() is the same as destroy(), however destroy() implements '__' deletion", <br />,
                "del() returns True", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:delsystemcall" code={[
                    "var('x', 1)\n" +
                    "var('y', 2)\n" +
                    "print('x:', x.val())\n" +
                    "print('y:', y.val())\n" +

                    "print('deleting x and y...')\n" +
                    "del('x', 'y')\n\n" +

                    "# x and y do not exist anymore, so the Interpreter proceeds to interpret the invalid code as a string\n" +
                    "print('x:', x.val())\n" +
                    "print('y:', y.val())"
                ]} />
            ]} />

            <SystemCall type="System Call" name="cat" args={['any', '...']} return="str" description={[
                <Args args={[
                    ['variable', 'any', 'the variable to concatenate'],
                    ['...', '...', 'any additional variables to concatenate']
                ]} />,
                "cat() concatenates the variables specified by the arguments", <br />,
                "cat() returns the concatenated string", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:catsystemcall" code={[
                    "print(cat('Hello,', ' ', 'World!'))\n\n" + 
                    "# printing literals\n" +
                    "print(cat(1, [1, 2, 3], {'key': 3}, -5.7))"
                ]} />
            ]} />

            <SystemCall type="System Call" name="equals" args={['any', '...']} return="bool" description={[
                <Args args={[
                    ['value', 'any', 'the value to compare'],
                    ['...', '...', 'any additional value to compare']
                ]} />,
                "equals() compares the values passed", <br />,
                "equals() returns True if all values are equal, False otherwise", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:equalssystemcall" code={[
                    "print(equals(1, 1, 1, 1))\n" +
                    "print(equals(1, 1, 1, 2))\n"
                ]} />
            ]} />

            <SystemCall type="System Call" name="not" args={['bool']} return="bool" description={[
                <Args args={[
                    ['value', 'bool', 'the value to negate'],
                ]} />,
                "not() negates the value passed", <br />,
                "not() returns the negated value", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:notsystemcall" code={[
                    "print(not(True))\n" +
                    "print(not(False))\n\n"
                ]} />
            ]} /> 

            <SystemCall type="System Call" name="and" args={['bool', '...']} return="bool" description={[
                <Args args={[
                    ['value', 'bool', 'the value to compare'],
                    ['...', '...', 'any additional value to compare']
                ]} />,
                "and() compares the values passed", <br />,
                "and() returns True if all values are True, False otherwise", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:andsystemcall" code={[
                    "print(and(True, True, True, True))\n" +
                    "print(and(True, True, True, False))"
                ]} />
            ]} />

            <SystemCall type="System Call" name="or" args={['bool', 'bool']} return="bool" description={[
                <Args args={[
                    ['value', 'bool', 'the value to compare'],
                    ['value 2', 'bool', 'the value to compare']
                ]} />,
                "or() compares the values passed", <br />,
                "or() returns True if any value is True, False otherwise", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:orsystemcall" code={[
                    "print(or(True, True))\n" +
                    "print(or(True, False))\n" +
                    "print(or(False, False))"
                ]} />
            ]} />

            <SystemCall type="System Call" name="=>" args={['any', '...']} return="any" description={[
                <Args args={[
                    ['instruction', 'any', 'the instruction to execute'],
                    ['...', '...', 'any additional instructions to execute']
                ]} />,
                "=>() is called the inline function system call", <br />,
                "=>() executes the instructions passed", <br />,
                "=>() returns the value of the last instruction executed", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:arrowfunctionsystemcall" code={[`
@ lst = [1, 2, 3, 4, 5]

# using the inline function to summarize objective of algorithm
@ a = private(=>(

    # creating a slice of the list
    @ tmp = lst.slice(0, 3),
    tmp.each('el', el.print()),
    sum(tmp.val())
))

a.print()

                `]} />
            ]} />


            <SystemCall type="System Call" name="class" args={['str', 'any']} return="dict" description={[
                <Args args={[
                    ['name', 'str', 'the name of the class'],
                    ['body', 'any', 'the body of the class']
                ]} />,
                "class() is used to define a class", <br />,
                "class() returns the dict of the variables defined in the class's body", <br />, <br/>,
                
                <KnownIssues issues={[
                    "As of 2.0, there are some setbacks to the class system:",
                    <ul>
                        <li>Variables are the only resource recorded in the class body</li>
                        <li>Default values of variables don't always work properly, so it's best not to have a default value</li>
                    </ul>
                ]} />,

                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:classsystemcall" code={[`
# defining the class
class('person', =>(
    @ name =,
    @ age =
))

# creating an instance of the class
@ p = person()

p.print()
                `]} />,
                "Creating an instance of a class is similar to that of Python", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:classsystemcall2" code={[`
# defining the class
class('person', =>(@name=,@age=))

# creating an instance of the class
@ p = person('joe', 20)
p.print()
                `]} />

            ]} />

            <SystemCall type="System Call" name="get" args={['indexable', 'any']} return="any" description={[
                <Args args={[
                    ['indexable', 'indexable', 'the indexable to get the value from'],
                    ['index', 'any', 'the index to get the value from']
                ]} />,
                "get() is used to get the value at the index of the indexable", <br />,
                "get() returns the value at the index of the indexable", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:getsystemcall" code={[`
@ lst = [1, 2, 3, 4, 5]
@a = get(lst.val(), 2)
a.print()
                `]} />
            ]} />

            <SystemCall type="System Call" name="keys" args={['dict']} return="dict_keys" description={[
                <Args args={[
                    ['dict', 'dict', 'the dict to get the keys from']
                ]} />,
                "keys() is used to get the keys of the dict", <br />,
                "keys() returns the dict_keys of the dict", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:keyssystemcall" code={[`
@ d = {1: 'a', 2: 'b', 3: 'c'}
@ k = keys(d.val())
k.print()
                `]} />
            ]} />


            <SystemCall type="System Call" name="import" args={['str']} return="None" description={[
                <Args args={[
                    ['path', 'str', 'the path to the file to import (relative to the directory at which the .msn2 program is executed)']
                ]} />,
                "import() is used to import", <i>MSN2</i>, "code from another file", <br />,
                "import() returns None", <br />, <br/>,
                "import() simply executes the code in the file in the working context as import() can be called from anywhere", <br />,
                "import() can be invoked on one path more than one time, but if the Interpreter has already imported a file, it will not import it again", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:importsystemcall" code={[`
# importing a file
# import('test.msn2')
                `]} />
            ]} />

            <SystemCall type="System Call" name="prnt" args={['any', '...']} return="any" description={[
                <Args args={[
                    ['value', 'any', 'the value to print'],
                    ['...', '...', 'any additional values to print']
                ]} />,
                "prnt() is used to add the values passed to the internal memory buffer exclusive to each Interpreter, equivalent to that of an STDOUT", <br />,
                "prnt() returns the last value passed", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:prntsystemcall" code={[`
prnt('Hello,', 'World!')
env(True)
                `]} />
            ]} />



            <SystemCall type="System Call" name="print" args={['any', '...']} return="any" description={[
                <Args args={[
                    ['value', 'any', 'the value to print'],
                    ['...', '...', 'any additional values to print']
                ]} />,
                "print() is used to print the values passed to the console", <br />,
                "This is the base languages version of print(), and not that of a Python fallback print()", <br />,
                "print() returns the last value passed", <br />, <br/>,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:printsystemcall2" code={[`
print('Hello,', 'World!')
                `]} />
            ]} />

            <SystemCall type="System Call" name="sleep" args={['num']} return="None" description={[
                <Args args={[
                    ['time', 'num', 'the time to sleep for in seconds']
                ]} />,
                "sleep() is used to sleep the Interpreter for a specified amount of seconds", <br />,
                "Use parameters below 1 to sleep for a specified amount of milliseconds", <br />,
                "sleep() is thread specific, and will not affect other threads", <br />,
                "sleep() returns None", <br />, <br/>,
            ]} />

            <SystemCall type="System Call" name="me" args={[]} return="str" description={[
                "me() gets a string representation of the working Interpreter", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:mesystemcall" code={["print(me())"]} />
            ]} />

            <SystemCall type="System Call" name="env" args={['bool']} return="str" description={[
                <Args args={[
                    ['(opt) print environment', 'bool', 'whether or not to print the environment']
                ]} />,
                "env() gets a string representation of the environment", <br />,
                "env() returns the string representation of the environment", <br />,
                "env() can be passed a boolean to print the environment", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:envsystemcall" code={["env(True)"]} />,
                "The code above is the same as the code below", <br />,
                <ExecutionDisplay executionid="ex:envsystemcall2" code={["print(env())"]} />

            ]} />

            <SystemCall type="System Call" name="-" args={['str']} return="any" description={[
                <Args args={[
                    ['value', 'any', 'the string representation of MSN2 code to execute']
                ]} />,
                "-() is used to execute " , <i>MSN2</i>, " code", <br />,
                "-() returns the return value of the code executed", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:systemcall" code={[`
-('print("Hello, World!")')
                `]} />
            ]} />

            <SystemCall type="System Call" name="strip" args={['str']} return="str" description={[
                <Args args={[
                    ['value', 'str', 'the string to strip']
                ]} />,
                "strip() is used to strip whitespace from the beginning and end of a string", <br />,
                "strip() returns the stripped string", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:stripsystemcall" code={[`
print(strip(' Hello, World! '))
                `]} />
            ]} />

            <SystemCall type="System Call" name="async" args={['block']} return="str" description={[
                <Args args={[
                    ['block', 'block', 'the block to obtain to be executed later, asynchronously']
                ]} />,
                "async() is used to execute a block asynchronously", <br />,
                "async() returns the string representation of the block", <br />,
                "async() is used mainly by the processes library to launch processes", <br />,
                "See ",<i>MSN2</i> , " in my GitHub for more information on the processes library", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:asyncsystemcall" code={[`
print(async(=>(
    assert(1 == 1),
    print('Hello, World!')
)))
                `]} />
            ]}/>

            <SystemCall type="System Call" name="now" args={[]} return="num" description={[
                "now() is used to get the number of seconds since the last epoch", <br />,
                "now() is used to time portions of code", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:nowsystemcall" code={[`
print(now())
print(now())
                `]} />,
                "Example of now() being used to time code", <br />,
                <ExecutionDisplay executionid="ex:nowsystemcall2" code={[`
# sorting array of 500,000 numbers
@ arr = list(reversed([i for i in range(500000)]))

@ start = now()
arr.sort()

print('time taken:', op.sub(now(), start.val()), 'seconds')
                `]} />
            ]}/>

            <SystemCall type="System Call" name="private" args={['block']} return="any" description={[
                <Args args={[
                    ['block', 'block', 'the block to privately execute']
                ]} />,
                "private() is used to privately execute a block of code", <br />,
                "private() returns the return value of the block", <br />,
                "Inside a private context, all variables and methods are inherited from the parent context.", <br />,
                "Once inside a private context, however, the private context cannot modify the same variables and methods in the parent context.", <br />,
                "This is useful for creating a private context for a block of code that you do not want to modify the parent context.", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:privatesystemcall" code={[`
@ a = 1
@ b = 2

print('a:', a.val(), 'b:', b.val())

@ c = private(=>(
    print('private a:', a.val(), 'b:', b.val()),
    @a = 3,
    @b = 4,
    print('private a:', a.val(), 'b:', b.val()),
    b.val()
))

print('a:', a.val(), 'b:', b.val())
print('c:', c.val())
                `]} />
            ]} />

            <SystemCall type="System Call" name="new" args={['block']} return="any" description={[
                <Args args={[
                    ['block', 'block', 'the block to execute in a new context']
                ]} />,
                "new() is used to execute a block in a new context", <br />,
                "new() returns the return value of the block", <br />,
                "Inside a new context, no variables and methods are inherited from the parent context.", <br />,

                <b>Example:</b>, <br />,
                <ExecutionDisplay executionid="ex:newsystemcall" code={[`
@ a = 1
@ b = 2

print('a:', a.val(), 'b:', b.val())

@ c = new(=>(

    # a and b are not defined in this context, so the Interpreter
    # will fail to recognize them and will return a string representation
    print('new a:', a.val(), 'b:', b.val()),
    @a = 3,
    @b = 4,
    print('new a:', a.val(), 'b:', b.val()),
    b.val()
))

print('a:', a.val(), 'b:', b.val())
print('c:', c.val())

            `]}/>
            ]} />

            <SystemCall type="System Call" name="break" args={[]} return="None" description={[
                "break() is used to leave an Interpreter's context", <br />,
                "break() returns None", <br />,
                "break() is used to leave a context and return to the parent context", <br />,
                "break() can be used for many things, from complex Interpreter redirections to exiting a loop", <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:breaksystemcall" code={[`
# create a private context
private(=>(
    @ n = 0,
    for(0, 100, 'i', if(n.greater(50), =>(

        # bring n to the parent context
        export('n'), break()
    ), n.++())),
    assert(False)
))
n.print()
                `]} />
            ]} />

            <SystemCall type="System Call" name="inherit:vars" args={[]} return="True" description={[
                "inherit:vars() is used to inherit all variables from the parent context", <br />,
                "inherit:vars() returns True", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:inheritvarssystemcall" code={[`
@ a = 1
@ b = 2
new(=>(
    inherit:vars(),
    print('a:', a.val(), 'b:', b.val())
))
                `]} />
            ]} />

            <SystemCall type="System Call" name="inherit:methods" args={[]} return="True" description={[
                "inherit:methods() is used to inherit all methods from the parent context", <br />,
                "inherit:methods() returns True", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:inheritmethodssystemcall" code={[`
function('ADD', ret('ADD', op.add(a.val(), b.val())), 'a', 'b')
print(ADD(1, 2))
new(=>(
    inherit:methods(),
    print(ADD(3, 4))
))
                `]} />
            ]} />

            <SystemCall type="System Call" name="process" args={['path']} return="subprocess" description={[
                <Args args={[
                    ['path', 'string', 'the path to the file to execute']
                ]} />,
                "process() is used to execute a .msn2 file in a new context", <br />,
                "process() returns a subprocess object", <br />,
                <KnownIssues issues={[
                    <ul>
                        <li>process() is only implemented for Windows</li>
                        <li>There can be issues with nested processes</li>
                    </ul>
                ]} />,
                "See my GitHub for more information on process()", <br />,
            ]} />

            <SystemCall type="System Call" name="pid" args={[]} return="int" description={[
                "pid() is used to get the current process's id", <br />,
                "pid() returns an int", <br />,
            ]} />

            <SystemCall type="System Call" name="thread" args={['str', 'block']} return="True" description={[
                <Args args={[
                    ['str', 'string', 'the name of the thread'],
                    ['block', 'block', 'the block to execute in a new thread']
                ]} />,
                "thread() is used to execute a block in a new thread", <br />,
                "A new thread of execution is created to execute the specified block upon interpreting thread()", <br />,
                "thread() returns True", <br />,
                "See the threads documentation ", <a href="/msn2threads">here</a>, <br />,
            ]} />


            <SystemCall type="System Call" name="acquire" args={[]} return="bool" description={[
                "acquire() is used to acquire the global lock designed for the processing library", <br />,
                "See more about the processing library on my GitHub", <br />,
                "acquire() returns True if the lock was acquired, False otherwise", <br />
            ]} />

            <SystemCall type="System Call" name="release" args={[]} return="bool" description={[
                "release() is used to release the global lock designed for the processing library", <br />,
                "See more about the processing library on my GitHub", <br />,
                "release() returns True if the lock was released, False otherwise", <br />
            ]} />

            <SystemCall type="System Call" name="join" args={['str', '...']} return="True" description={[
                <Args args={[
                    ['str', 'string', 'the name of the thread to join'],
                    ['...', '...', 'any number of strings, each representing a thread to join']
                ]} />,
                "join() is used to wait for a thread to finish executing", <br />,
                "join() returns True", <br />,
                "See the threads documentation ", <a href="/msn2threads">here</a>, <br />
            ]} />

            <SystemCall type="System Call" name="stop" args={[]} return="death" description={[
                "stop is the all powerful off button for an ", <i>MSN2</i>, " program", <br />,
                "stop() returns nothing to the calling process", <br />,
                "stop() is not required to stop an ", <i>MSN2</i>, " program", <br />,
                "stop() is normally used to stop remaining / lost threads / processes", <br />, <br />,
            ]} />
                
            <SystemCall type="System Call" name="try" args={['block', 'block']} return='any' description={[
                <Args args={[
                    ['try', 'block', 'the block to try to execute'],
                    ['catch', 'block', 'the block to execute if the first block fails']
                ]} />,
                "try() is used to execute a block and catch any errors that occur", <br />,
                "try() returns the result of the first block if it succeeds, otherwise it returns the result of the second block", <br />, <br />,
                <b>Examples:</b>,
                <ExecutionDisplay executionid="ex:trysystemcall" code={[`
try(
    print('try'),
    print('catch')
)
                `]} />,
                <ExecutionDisplay executionid="ex:trysystemcall2" code={[`
try(=>(
    print('try'),
    @ list = [1, 2, 3],

    # index() throws an error, as opposed to find()
    list.index(4)
), 
    print('catch')
)
                `]} />
            ]} />

            <SystemCall type="System Call" name="wait" args={['bool', '(opt) block']} return='True' description={[
                <Args args={[
                    ['bool', 'bool', 'the boolean to wait to be True'],
                    ['(opt) block', 'block', 'the block to execute while waiting']
                ]} />,
                "wait() is used to wait for a boolean to be True", <br />,
                "wait() returns True", <br />,
                "wait() is used within the multiprogramming features of ", <i>MSN2</i>, <br />,
                "See the threads documentation ", <a href="/msn2threads">here</a>, <br />
            ]} />

            <SystemCall type="System Call" name="export" args={['str', '...']} return='True' description={[
                <Args args={[
                    ['str', 'string', 'the name of the variable or function to export to the parent context'],
                    ['...', '...', 'any number of strings, each representing a variable or function to export to the parent context']
                ]} />,
                "export() is used to export variables or functions to the parent context", <br />,
                "export() returns True", <br />,
                "export() is used in a multicontext environment when a variable or function needs to be brought out from say, a private() context", <br />, <br />,
                <b>Examples:</b>,
                <ExecutionDisplay executionid="ex:export" code={[`
# create child context
private(=>(
    @ v = 0,
    export('v')
))
v.print()
                `]} />,
                <ExecutionDisplay executionid="ex:export2" code={[`
# create child context
private(=>(
    @ v = 0,
    function('zero', ret('zero', 0),),
    export('v', 'zero')
))
v.print()
print(zero())
                `]} />
            ]} />

            <SystemCall type="System Call" name="exportas" args={['str', 'any']} return="any" description={[
                <Args args={[
                    ['str', 'string', 'the name of the new variable to export to the parent context'],
                    ['any', 'any', 'the value of the new variable to export to the parent context']
                ]} />,
                "exportas() is used to export a value to the parent context as a variable with the name specified as the first argument", <br />,
                "exportas() returns the value of the second argument", <br />,
                "exportas() is used in a multicontext environment when a variable needs to be brought out from say, a private() context", <br />, <br />,
                "exportas() cannot accept function names as arguments", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:exportas" code={[`
# create child context
private(exportas('v', 0))

# print the value of v in parent context
v.print()
                `]} />
            ]} />

    
            <SystemCall type="System Call" name="exportall" args={[]} return="True" description={[
                "exportall() is used to export all variables and functions to the parent context", <br />,
                "exportall() returns True", <br />,
                "exportall() is used in a multicontext environment when all variables and functions need to be brought out from say, a private() context", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:exportall" code={[`
# create child context
private(=>(
    @ v = 0,
    function('zero', ret('zero', 0),),
    exportall()
))

v.print()
print(zero())
                `]} />
            ]} />

            <SystemCall type="System Call" name="console" args={['str', '...']} return="True" description={[
                <Args args={[
                    ['str', 'string', 'the console / terminal command to execute'],
                    ['...', '...', 'any number of strings, each representing a command to the console / terminal']
                ]} />,
                "console() is used to execute command(s) in the console / terminal", <br />,
                "console() returns True", <br />, <br />,
                "console() executes a command on your personal computer's terminal, so it is operating system specific, ", <br />,
                "meaning you should be wary of the operating system of those who you share your code with.", <br />, <br />,
                "See the windows(), linux() and mac() system calls for handling this."
            ]} />

            <SystemCall type="System Call" name="request" args={['str', '(opt) dict']} return="dict" description={[
                <Args args={[
                    ['str', 'string', 'the url to request'],
                    ['(opt) dict', 'dict', 'the headers to send with the request']
                ]} />,
                "request() is used to send a request to a url", <br />,
                "request() returns a dict containing the response", <br />, <br />
            ]} />


            <SystemCall type="System Call" name="pubip" args={[]} return="str" description={[
                "pubip() is used to get the public ip address of the machine executing a .msn2 program", <br />,
            ]} />

            <SystemCall type="System Call" name="privips" args={[]} return="list" description={[
                "privips() is used to get the private ip addresses of the machine executing a .msn2 program", <br />,
            ]}/>

            <SystemCall type="System Call" name="ENDPOINT" args={['str', '(opt)', '(opt)', '(opt)']} return="None" description={[
                <Args args={[
                    ['1 arg supplied:', 'ENDPOINT(str)', <Args args={[
                        ['path', 'string', "the path on the 127.0.0.1:5000 to the endpoint"]
                    ]} />],
                    ['2 args supplied:', 'ENDPOINT(str, dict)', <Args args={[
                        ['path', 'string', "the path on 127.0.0.1:5000 to the endpoint"],
                        ['initial data', 'dict', "the json to initialize at the endpoint"]
                    ]}/>],
                    ['4 args supplied:', 'ENDPOINT(str, int, str, dict)', <Args args={[
                        ['host', 'string', "the host"],
                        ['port', 'int', "the port"],
                        ['path', 'string', "the path on the host:port/path to the endpoint"],
                        ['initial data', 'dict', "the json to initialize at the endpoint"]
                    ]} />]
                ]} />,

                "ENDPOINT() is used to create a Flask server endpoint on either the network or local machine", <br />,
                "ENDPOINT() returns None", <br />, <br />,
                "ENDPOINT() halts the process in it's tracks, so manipulating the endpoint after calling ENDPOINT() will not work.", <br />,
                "To work around this, the endpoint can be started in a separate process, see the threads documentation: ", <a href="/msn2threads">here</a>, <br />, <br />, 
                
                <KnownIssues issues={[
                    <ul>
                        <li>HTTP endpoints can only exist on localhost or the local machine's network due to server safety reasons</li>
                        <li>Endpoints aren't required to be started in another process, this is only true if the same file wishes to manipulate the endpoint. Regardless, processes, as of 2.0, can only be started on Windows</li>
                    </ul>
                ]}/>
            ]} />


            <SystemCall type="System Call" name="POST" args={['str', 'int', 'str', 'dict']} return="dict" description={[
                <Args args={[
                    ['host', 'string', "the host"],
                    ['port', 'int', "the port"],
                    ['path', 'string', "the path on the host:port/path to the endpoint"],
                    ['data', 'dict', "the json to send to the endpoint, updating it"]
                ]} />,
                "POST() is used to send a POST request to an endpoint", <br />,
                "POST() returns the response from the endpoint", <br />, <br />,
                "POST() is used to update the data at an endpoint", <br />,
                "Internally, POST() essentially calls .update() on the existing dict at the endpoint", <br />
            ]} />

            <SystemCall type="System Call" name="GET" args={['str', 'int', 'str']} return="dict" description={[
                <Args args={[
                    ['host', 'string', "the host"],
                    ['port', 'int', "the port"],
                    ['path', 'string', "the path on the host:port/path to the endpoint"]
                ]} />,
                "GET() is used to send a GET request to an endpoint", <br />,
                "GET() returns the response from the endpoint", <br />, <br />,
                "GET() is used to get the data at an endpoint", <br />
            ]} />

            <SystemCall type="System Call" name="DELETE" args={['str', 'int', 'str']} return="dict" description={[
                <Args args={[
                    ['host', 'string', "the host"],
                    ['port', 'int', "the port"],
                    ['path', 'string', "the path on the host:port/path to the endpoint"]
                ]} />,
                "DELETE() is used to send a DELETE request to an endpoint", <br />,
                "DELETE() returns the response from the endpoint", <br />, <br />,
                "DELETE() is used to delete the data at an endpoint", <br />
            ]} />

            <SystemCall type="System Call" name="windows" args={[]} return="bool" description={[
                "windows() is used to check if the current machine is running Windows", <br />,
                "windows() returns a bool", <br />, <br />
            ]} />

            <SystemCall type="System Call" name="linux" args={[]} return="bool" description={[
                "linux() is used to check if the current machine is running Linux", <br />,
                "linux() returns a bool", <br />, <br />
            ]} />

            <SystemCall type="System Call" name="mac" args={[]} return="bool" description={[
                "mac() is used to check if the current machine is running Mac", <br />,
                "mac() returns a bool", <br />, <br />
            ]} />

            <SystemCall type="System Call" name="getattr" args={['indexable', 'any']} return="any" description={[
                <Args args={[
                    ['object', 'indexable', "the indexable to get the attribute from"],
                    ['attr', 'any', "the attribute to get from the object"]
                ]} />,
                "getattr() is used to get an attribute from an object", <br />,
                "getattr() returns the attribute", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:getattrsystemcall" code={[`
@ obj = {'key': 'value'}
print(getattr('obj', 'key'))
                `]} />
            ]} />

            <SystemCall type="System Call" name="setattr" args={['indexable', 'any', 'any']} return="any" description={[
                <Args args={[
                    ['indexable', 'indexable', "the indexable to set the attribute on"],
                    ['attr', 'any', "the attribute to set on the object"],
                    ['value', 'any', "the value to set the attribute to"]
                ]} />,
                "setattr() is used to set an attribute on an object", <br />,
                "setattr() returns the value set", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:setattrsystemcall" code={[`
@ obj = {'key': 'value'}
obj.print()
print(setattr('obj', 'key', 'newvalue'))
obj.print()
                `]} />
            ]} />


            <SystemCall type="System Call" name="start|end|var" args={['block']} return="None" description={[
                <Args args={[
                    ['value', 'any', "the block to repeatedly execute"]
                ]} />,
                "||() is used to repeatedly execute a block a literal amount of times", <br />,
                "The arguments inside '||' cannot contain parenthases, as this would disrupt the parsing of the loops functional arguments", <br />, 
                "||() returns None", <br />, <br />,
                "This is one of the few system calls that can have a varying name", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:loopsystemcall" code={[`
# loop with variable
0|5|i (i.print())

# loop with unused variable
0 | 5 | _ (print('hello'))
                `]} />
            ]} /> 

            <SystemCall type="System Call" name="?" args={['block', '(opt) block']} return="any" description={[
                <Args args={[
                    ['true block', 'block', "block to execute if the prefunction argument is True"],
                    ['false block', '(opt) block', "block to execute if the prefunction argument is False"]
                ]} />,

                "The prefunctional argument to ?() goes after the '?' and before the first parenthases", <br />,
                "The prefunctional argument to ?() can be any valid expression that doesn't include parenthases", <br />,
                "?() is used to execute a block if a prefunction is True", <br />,
                "?() returns the result of the interpretedblock", <br />, <br />,
                <b>Example:</b>,
                <ExecutionDisplay executionid="ex:if?sytemcall" code={[`
# if statement
? True (print('True'))
?0(assert(False), print(assert(True)))
                `]} />,
                "Testing ?() with variables", <br />,
                <ExecutionDisplay executionid="ex:if?sytemcall2" code={[`
# example using ?? number replacement syntax
@ a = 1
? ?a? (print('True'))
                `]} />
            ]} />
        </div>
    )
}



export default Systemcalls