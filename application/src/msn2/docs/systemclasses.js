

import {Title, Section} from './../msn2docs'
import { ExecutionDisplay } from './basics'
import {Drop, ScrollerToSearch} from './systemcalls'
import Dropdown from 'react-dropdown';
import Arrow from 'react-dropdown'
var systemclassnames = []

function Systemclasses() {

    var calls = SystemClasses()
    var systemcalls = calls.props.children
    var as_string_array = []
    // add all system call names to the buffer
    for (var i = 0; i < systemcalls.length; i++) {
        as_string_array.push(systemcalls[i].props.title)
    }
    
    // remove duplicates
    as_string_array = [...new Set(as_string_array)]
    
    // sort alphabetically
    as_string_array.sort()

    // add everything from as string array to the systemcallnames array
    for (var i = 0; i < as_string_array.length; i++) {
        systemclassnames.push(as_string_array[i])
    }


    return (
        <div className='msn2docs-div'>
            <Title title="System Classes" subtitle="More tools for you!" subtitle2="Difficulty: Medium" back="/msn2docs" next="/msn2threads"/>

            <Section id="scrolltotop"title='Introduction' subtitle={[
                "System classes are essentially collections of system calls grouped by purpose.", <br/>,   
                "There aren't many system classes implemented due to the existence of Python fallback within MSN2, ", <br/>,
                "however they prove useful with more readability within the base language for commonly used tasks.", <br/>, <br/>,
                "Nothing has to be done on the programmer's side to import any of the system classes, as they come pre-implemented and ready to use at any time.", <br/>,
                <Dropdown id='dropdown' onChange={dropChanged} arrowClassName="msn2-arrow" arrowClosed={<span>show all</span>} arrowOpen={<span>hide all</span>} placeholderClassName='msn2-drop-place' controlClassName="msn2-drop-control" menuClassName='msn2-drop-menu' options={as_string_array} placeholder="Select a system class" />, <br />,
                <div Style="margin-bottom: 45vh"/>
            ]}/>

        <ScrollerToSearch />

            <SystemClasses/>

        </div>
    )
}

// when dropdown changes, scroll to the system call
function dropChanged(newvalue) {
    var e = newvalue.value
    var allelements = document.getElementsByTagName('*');

    for (var i = 0; i < allelements.length; i++) {

        // replaces all greater than signs with &gt;
     //   e = e.replaceAll('&gt;', '>').replaceAll('&lt;', '<')
        console.log(allelements[i].id)
        if (allelements[i].id == e) {
            console.log(allelements[i])
            allelements[i].scrollIntoView()
            document.getElementsByClassName('Dropdown-placeholder msn2-drop-place').item(0).innerHTML = 'Select a system class'
            return            
        }
    }
}

function SystemClasses() {
    return (
        <div>


            <SystemClass title="math" desc="The math class is a collection of math functions that are commonly used in programming." methods={[
                <ClassMethod name="add" args={["any", "any"]} return="any" aliases={[]} desc={[
                    "Adds two values together."
                ]}/>,
                <ClassMethod name="subtract" args={["any", "any"]} return="any" aliases={[]} desc={[
                    "Subtracts two values."
                ]} />,
                <ClassMethod name="multiply" args={["any", "any"]} return="any" aliases={[]} desc={[
                    "Multiplies two values."
                ]} />,
                <ClassMethod name="divide" args={["any", "any"]} return="any" aliases={[]} desc={[
                    "Divides two values."
                ]} />,
                <ClassMethod name="power" args={["any", "any"]} return="any" aliases={[]} desc={[
                    "Raises the first value to the power of the second value."
                ]} />,
                <ClassMethod name="sqrt" args={["any"]} return="any" aliases={[]}  desc={[
                    "Computes the square root of the value."
                ]} />,
                <ClassMethod name="mod" args={["any", "any"]} return="any" aliases={[]} desc={[
                    "Computes the remainder of the first value divided by the second value."
                ]} />,
                <ClassMethod name="abs" args={["any"]} return="any" aliases={[]} desc={[
                    "Computes the absolute value of the value."
                ]} />,
                <ClassMethod name="round" args={["any"]} return="any" aliases={[]} desc={[
                    "Rounds the value to the nearest integer."
                ]} />,
                <ClassMethod name="floor" args={["any"]} return="any" aliases={[]} desc={[
                    "Rounds the value down to the nearest integer."
                ]} />,
                <ClassMethod name="ceil" args={["any"]} return="any" aliases={[]} desc={[
                    "Rounds the value up to the nearest integer."
                ]} />,
                <ClassMethod name="sin" args={["any"]} return="any" aliases={[]} desc={[
                    "Computes the sine of the value."
                ]} />,
                <ClassMethod name="cos" args={["any"]} return="any" aliases={[]} desc={[
                    "Computes the cosine of the value."
                ]} />,
                <ClassMethod name="tan" args={["any"]} return="any" aliases={[]} desc={[
                    "Computes the tangent of the value."
                ]} />    
            ]} code={
`# add method
assert(equals(=>(
    @v1=1, @v2=2, @r=math.add(v1, v2), print(v1, '+', v2, '=', r), r), 
    3
))

# subtract method
assert(equals(=>(
    @v1=1, @v2=2, @r=math.subtract(v1, v2), print(v1, '-', v2, '=', r), r),
    -1
))

# multiply method
assert(equals(=>(
    @v1=1, @v2=2, @r=math.multiply(v1, v2), print(v1, '*', v2, '=', r), r),
    2
))

# divide method
assert(equals(=>(
    @v1=1, @v2=2, @r=math.divide(v1, v2), print(v1, '/', v2, '=', r), r),
    0.5
))

# power method
assert(equals(=>(
    @v1=2, @v2=3, @r=math.power(v1, v2), print(v1, '^', v2, '=', r), r),
    8
))

# sqrt method
assert(equals(=>(
    @v1=4, @r=math.sqrt(v1), print('sqrt(', v1, ') =', r), r),
    2
))

# mod method
assert(equals(=>(
    @v1=5, @v2=2, @r=math.mod(v1, v2), print(v1, '%', v2, '=', r), r),
    1
))

# abs method
assert(equals(=>(
    @v1=-1, @r=math.abs(v1), print('|', v1, '| =', r), r),
    1
))

# round method
assert(equals(=>(
    @v1=1.5, @r=math.round(v1), print('round(', v1, ') =', r), r),
    2
))

# floor method
assert(equals(=>(
    @v1=1.5, @r=math.floor(v1), print('floor(', v1, ') =', r), r),
    1
))

# ceil method
assert(equals(=>(
    @v1=1.5, @r=math.ceil(v1), print('ceil(', v1, ') =', r), r),
    2
))

# sin method
assert(equals(=>(
    @v1=0, @r=math.sin(v1), print('sin(', v1, ') =', r), r),
    0
))

# cos method
assert(equals(=>(
    @v1=0, @r=math.cos(v1), print('cos(', v1, ') =', r), r),
    1
))

# tan method
assert(equals(=>(
    @v1=0, @r=math.tan(v1), print('tan(', v1, ') =', r), r),
    0
))`}/>


            <SystemClass title="op" desc={[
                "The operation (op) class is used to perform operations on values, and is similar to that of the math class.", <br/>,
                "The math class has more mathematically focused computation methods, while the op class has more general purpose methods.", <br/>,
                "The op class also has many method aliases implemented for convenience, meaning one method can have more than one name, but will perform the same computation.", <br/>,
                "Another benefit of using the op class is the fact that for each method, any amount of arguments can be passed in, and the method will perform the computation on all of them.", <br/>,
            ]} methods={[
                <ClassMethod name="add" args={["any", "..."]} return="any" aliases={[
                    "append", "push", "plus", "concat", "concatinate", "join", "merge", "sum", "+"
                ]} desc={[
                    "Adds all values passed in.", <br/>,
                    "If the first argument is a list, then the rest of the arguments will be appended to the list.", <br/>,
                    "Otherwise, the arguments will be added together.", <br/>,
                ]} />,
                <ClassMethod name="sub" args={["any", "..."]} return="any" aliases={[
                    "minus", "subtract", "-"
                ]} desc={[
                    "Subtracts all values passed in.", <br/>,
                ]} />,
                <ClassMethod name="mul" args={["any", "..."]} return="any" aliases={[
                    "times", "multiply", "x", "*"
                ]} desc={[
                    "Multiplies all values passed in.", <br/>,
                ]} />,
                <ClassMethod name="div" args={["any", "..."]} return="any" aliases={[
                    "divide", "over", "÷", "/"
                ]} desc={[
                    "Divides all values passed in.", <br/>,
                ]} />,
                <ClassMethod name="pow" args={["any", "..."]} return="any" aliases={[
                    "power", "exponent", "**"
                ]} desc={[
                    "Raises all values passed in to the power of the next value.", <br/>,
                ]} />,
                <ClassMethod name="mod" args={["any", "..."]} return="any" aliases={[
                    "modulo", "modulus", "remainder", "%"
                ]} desc={[
                    "Returns the remainder of the first value divided by the second value.", <br/>,
                ]} />,

            ]} code={`
# add method
print(op.add([1, 2, 3], 9))
print(op.add(3, 4))

# subtract method
print(op.-(5, 4))
print(op.subtract(10, 8))

# etc...
            `}/>


            <SystemClass title="var" desc={[
                "The var class offers variable specific methods."
            ]} methods={[
                <ClassMethod name="equals" args={["str", '...']} return="bool" aliases={[]} desc={[
                    "Checks that all values of all variable names passed in are equal.", <br/>
                ]} />,
            ]} code={`
# create variable
@v1=1
@v2 = 1

# make assertion
print(assert(var.equals('v1', 'v2')))
            `}/>
            
            <SystemClass title="trace" desc={[
                "The trace class offers methods for tracing the execution of code.", <br/>,
                "Tracing is not the same as logging each individual line ran, but each sub line.", <br/>,
                "The concept of tracing in", <i>MSN2</i>, "is similar to that of debugging in other languages.", <br/>,
                "For each interpretation step in the language, that instruction is logged for usage by the trace class.", <br/>,
                "Tracing in the example below is different from that in a normal programming environment, but the concept is the same.", <br/>,
                "In a web environment, the server executing the base language's backend Python code does not stop, therefore the trace will only grow unless cleared."
            ]} methods={[
                <ClassMethod name="len" args={[]} return="str" aliases={[]} desc={[
                    "Returns the number of interpretations logged since the program started."
                ]} />,
                <ClassMethod name="before" args={["int"]} return="list" aliases={[]} desc={[
                    "Gets the last arg1 instructions interpreted.", <br/>
                ]} />,
                <ClassMethod name="this" args={[]} return="str" aliases={[]} desc={[
                    "Generally not that useful, but gets the current trace instruction."
                ]}/>, 
                <ClassMethod name="all" args={[]} return="list" aliases={[]} desc={[
                    "Gets all trace instructions interpreted since the program started."
                ]} />,
                <ClassMethod name="clear" args={[]} return="True" aliases={[]} desc={[
                    "Clears all logged trace instructions."
                ]} />,

                
            ]} code={               
`trace.clear()
@ v = 10
print(trace.all())
            `}/>

            <SystemClass title="file" desc={[
                "The file class offers a simplified approach to file manipulation.", <br/>,
                "All path arguments are relative to the directory at which the msnint2.py (Interpreter driver) file lies", <br/>,
                "The file class is thread-protected, meaning threads should not have intertwining issues reading and writing to files.", <br/>,
                "Mutual exclusion is already implemented in the file class source code, so there is no need to program this yourself."
            ]} methods={[
                <ClassMethod name="create" args={["str"]} return="True" aliases={[]} desc={[
                    "Creates a file at the path provided.", <br/>,
                    "file.create() creates an empty file.", <br/>,
                    "file.create() does NOT have to be called before any of the below methods, as each method below will create the file if it does not exist."
                ]} />,
                <ClassMethod name="read" args={["str"]} return="str" aliases={[]} desc={[
                    "Reads the contents of a file at the path provided.", <br/>,
                ]} />,
                <ClassMethod name="write" args={["str", "str"]} return="str" aliases={[]} desc={[
                    "Writes the contents of the second argument to the file at the path provided in the first argument.", <br/>,
                    "file.write() returns the str written to the file.",
                    "file.write() "
                ]} />,
                <ClassMethod name="writemsn" args={["str", "block"]} return="str" aliases={[]} desc={[
                    "Writes the second argument as a string to the file passed as the first argument.", <br/>,
                    "writemsn('/text.txt', print('hello world')) -> 'print('hello, world')'"
                ]} />,
                <ClassMethod name="clear" args={["str"]} return="True" aliases={[]} desc={[
                    "Clears the contents of a file at the path provided."
                ]} />,
                <ClassMethod name="append" args={["str", "str"]} return="str" aliases={[]} desc={[
                    "Appends the contents of the second argument to the file at the path provided in the first argument.", <br/>,
                    "file.append() returns the str appended to the file."
                ]} />,
                <ClassMethod name="delete" args={["str"]} return="True" aliases={[]} desc={[
                    "Deletes a file at the path provided."
                ]} />,
                <ClassMethod name="rename" args={["str", "str"]} return="str" aliases={[]} desc={[
                    "Renames a file at the path provided in the first argument to the path provided in the second argument."
                ]} />,
                <ClassMethod name="copy" args={["str", "str"]} return="str" aliases={[]} desc={[
                    "Copies a file at the path provided in the first argument to the path provided in the second argument."
                ]} />,
                <ClassMethod name="move" args={["str", "str"]} return="str" aliases={[]} desc={[
                    "Moves a file at the path provided in the first argument to the path provided in the second argument."
                ]} />,
                <ClassMethod name="exists" args={["str"]} return="bool" aliases={[]} desc={[
                    "Checks if a file exists at the path provided."
                ]} />,
                <ClassMethod name="isfile" args={["str"]} return="bool" aliases={[]} desc={[
                    "Determines if the path provided is a file."
                ]} />,
                <ClassMethod name="isdir" args={["str"]} return="bool" aliases={[]} desc={[
                    "Determines if the path provided is a directory."
                ]} />,
                <ClassMethod name="listdir" args={["str"]} return="list" aliases={[]} desc={[
                    "Lists all files in a directory at the path provided."
                ]} />,
                <ClassMethod name="mkdir" args={["str"]} return="True" aliases={[]} desc={[
                    "Creates a directory at the path provided."
                ]} />,
                <ClassMethod name="rmdir" args={["str"]} return="True" aliases={[]} desc={[
                    "Deletes a directory at the path provided."
                ]} />,
                <ClassMethod name="getcwd" args={[]} return="str" aliases={[]} desc={[
                    "Gets the current working directory."
                ]} />,
                <ClassMethod name="getsize" args={["str"]} return="int" aliases={[]} desc={[
                    "Gets the size of a file at the path provided."
                ]} />,
                <ClassMethod name="emptydir" args={["str"]} return="str" aliases={[]} desc={[
                    "Deletes all files in a directory at the path provided."
                ]} />,
            ]}  code={
`@ path = 'teststuff/text.txt'

# make the directory
file.mkdir('teststuff')

# write to the file
file.write(path, 'hello!')
print(file.listdir('teststuff'))

# read the file
print(file.read(path))

# empty the test directory
file.emptydir('teststuff')`}/>

                <SystemClass title="function" desc={[
                    "Provides user defined function specific operations."
                ]} methods={[
                    <ClassMethod name="addbody" args={["str", "str"]} return="str" aliases={[]} desc={[
                        "Adds a ", <i>MSN2</i>, " instruction to the function specified by the first argument.", <br/>,
                        "The second argument is the instruction to add to the function.", <br/>,
                        "function.addbody() returns the function's name."
                    ]} />,
                    <ClassMethod name="addarg" args={["str", "str"]} return="str" aliases={[]} desc={[
                        "Adds an argument to the function specified by the first argument.", <br/>,
                        "The second argument is the argument to add to the function.", <br/>,
                        "function.addarg() returns the function's name."
                    ]} />,
                    <ClassMethod name="addreturn" args={["str", "str"]} return="str" aliases={[]} desc={[
                        "Adds a return value to the function specified by the first argument.", <br/>,
                        "The second argument is the return value to add to the function.", <br/>,
                        "function.addreturn() returns the function's name."
                    ]} />,
                    <ClassMethod name="getbody" args={["str"]} return="list" aliases={[]} desc={[
                        "Gets the body of the function specified by the first argument."
                    ]} />,
                    <ClassMethod name="getargs" args={["str"]} return="list" aliases={[]} desc={[
                        "Gets the arguments of the function specified by the first argument."
                    ]} />,
                    <ClassMethod name="getreturn" args={["str"]} return="str" aliases={[]} desc={[
                        "Gets the return value of the function specified by the first argument."
                    ]} />,
                    <ClassMethod name="destroy" args={["str"]} return="str" aliases={[]} desc={[
                        "Destroys the function specified by the first argument within the working context."
                    ]} />,
                    <ClassMethod name="run" args={["str", "..."]} return="any" aliases={[]} desc={[ 
                        "Runs the function specified by the first argument with function arguments being all arguments after.", <br/>,
                        "See an example in the demonstration below."                        
                    ]} />,
                ]} code={
`# defining an empty function with the function() system call (not related to the class)
function('test',,)

# add some arguments to the function
function.addarg('test', 'a')
function.addarg('test', 'b')

# add an instruction to the body of the function
function.addbody('test', 'ret("test", ?a? + ?b?)')

# running the function
print(function.run('test', 3, 4))
print(function.run('test', op.add(3, 1), 6))
`}/>

                <SystemClass title="html" desc={[
                    "Provides HTML specific operations for ease of manipulation."
                ]} methods={[
                    <ClassMethod name="soup" args={["str"]} return="BeautifulSoup" aliases={[]} desc={[
                        "Obtains a BeautifulSoup object for the URL specified by the first argument.", <br/>,
                        "See the BeautifulSoup docs ", <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">here</a>, "."
                    ]} />,
                    <ClassMethod name="from" args={["str"]} return="list" aliases={[]} desc={[
                        "Extracts a list of HTML elements within the page specified by the URL.", <br/>,
                        "Each element in the list returned is a dictionary with the following keys:", <br/>,
                        "- 'tag' : tag name for the element", <br/>,
                        "- attrs : all attributes of the element", <br/>,
                        "- text : the text value of the element"
                    ]} />,
                ]} code={``}/>

                <SystemClass title="ai" desc={[
                    "Provides an instant gateway to OpenAI's most advanced AI models to date (12/28/22).", <br/>,
                    "The ai class simplifies API interactions with OpenAI with several models predefined in the base language.", <br/>,
                    "To use the ai class, you must have added an environment variable for your OpenAI API key, or an exception will be thrown.", <br/>, <br/>,
                    "The prompts specified in each class method should be written as explained by OpenAI: ", <a href = "https://help.openai.com/en/collections/3675931-openai-api#prompt-engineering">here</a>, "."
                ]} methods={[
                    <ClassMethod name="basic" args={["str"]} return="str" aliases={[]} desc={[
                        "Generates a response to the prompt specified by the first argument using the general OpenAI GPT-3 model.", <br/>,
                        "This model has a creativity level of 0"
                    ]} />,
                ]} code={``}/>

        </div>
    )
}

var serial = 0
function SystemClass(props) {
    return <div className="msn2-sysclass"><Section id={props.title} title={"class: " + props.title} subtitle={[ 
        props.desc, <br/>, <br/>,
        props.methods, <br/>, <br/>,
        props.code != '' ? <b>Usage of this class:</b> : <div/>,
        props.code != '' ? <ExecutionDisplay executionid={"ex:systemclasses:" + serial++} code={props.code} /> : <div/>
    ]}/></div>
}

// gets a class method
function ClassMethod(props) {

    var argstring = ''
    for (var i = 0; i < props.args.length; i++) {
        argstring += props.args[i]
        if (i != props.args.length - 1) {
            argstring += ', '
        }
    }
    // make a copy of props aliases
    var copy = props.aliases.slice()
    
    // insert the name of the method as the first alias
    copy.unshift(props.name)
 
    return <div className="msn2-sysclassmethod">
        <Section title={copy.map((alias, i) => <h2 Style={i == 0 ? "font-size: 1.4rem; margin-bottom: 0" : "font-size: 0.8rem; margin-bottom: 0"}> {i != 0 ? 'alias:' : ''} {alias} ({argstring}) -> {props.return} </h2>)} subtitle={props.desc}/>
        </div>
}

export default Systemclasses

// <h2 Style="font-size: 1.4rem; margin-bottom: 0">{alias} ({argstring}) -> {props.return} </h2>