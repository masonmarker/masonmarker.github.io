import {Link} from 'react-router-dom'
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import SourceCode from './msnscriptraw';
import preloads from './../preload';

var pyodide;

async function prepare() {

    var out = document.getElementById('out')

    if (out)
        out.value = "Preparing Python handler\n\nDo not execute..."    
    pyodide = await window.loadPyodide({
        indexURL : "https://cdn.jsdelivr.net/pyodide/v0.21.0/full/"
    });

    // import MSNScript source code
    await pyodide.runPython(SourceCode)
    if (out)
        out.value = 'Ready for execution'
}

const Msnscript = () => {
    var starter = `print "Hello, World!"`
    return (
        <div className="msnscript1-div"> 
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
            </style>    
 
            <h1 className="msnscript-title" Style="color: var(--darkpurple); margin-top: 0;">&lt;MSN&gt;</h1>
            <h3 Style="margin-top: 0; color: gray; font-size: 1rem">stable release 1.0 : 8-19-22</h3>
            <div className="msnscript1-body">
                <Link className="download-button" to='/github' Style="color: white">Back</Link>
                <Link className="download-button" to='/' Style="color: white">Home</Link>
            </div>
            <div className="msnscript1-yourself">
            <h4 Style="color: gray">Before running code, be sure to start MSNScript's backend handler</h4>
                <div id="execute"className="download-button" Style="color: white; background-color: var(--darkpurple); width: 14rem; height: 3rem; margin: 0; margin-bottom: 3rem" onClick={prepare}>
                    Start MSNScript Handler
                </div> 
                <div className="msnscript1-textarea">
                <h4 Style="color: gray">Your MSNScript</h4>
                    <div className="msnscript1-coding">
                        <CodeMirror className="msnscript1-code" theme={okaidia} height="75%" id="code" value={starter} highlightSelectionMatches = {{minChars: 2, showToken: /Hello/, style: "matchhighlight"}}/> 
                        <div className="msnscript1-buttons">
                            <div id="execute"className="download-button" Style="color: white; width: 9rem; margin: 0;" onClick={run}> 
                                Execute
                            </div>
                            <h4 Style="color: gray; margin-top: 2rem">Pre-written code: </h4>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("Integers")}>
                                Integers
                            </div>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("Strings")}>
                                Strings
                            </div>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("Conditions")}>
                                Conditions
                            </div>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("Loops")}>
                                Loops
                            </div>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("Methods")}>
                                Functions
                            </div>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("Arrays")}>
                                Arrays
                            </div>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("Nests")}>
                                Nests
                            </div>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("Objects")}>
                                Objects
                            </div>
                            <div id="execute"className="download-button" Style="color: white; background-color: var(--lightpurple); width: 6rem; height: 2rem; margin: 0; margin-bottom: .5rem" onClick={() => load("FizzBuzz")}>
                                FizzBuzz
                            </div>
                        </div>
                    </div>
                </div>
                <h4 Style="color: gray">Out</h4>
                <textarea id="out" className="msnscript1-out" readOnly></textarea>
            </div>
        </div>
    )
}

function load(code) {
    var cm = document.getElementsByClassName("cm-content");
    // remove all children from cm
    while (cm[0].firstChild)
        cm[0].removeChild(cm[0].firstChild);
    var lines = preloads[code].split("\n");
    // create a div
    for (var i = 0; i < lines.length; i++) {
        cm = document.getElementsByClassName("cm-content")[0]; 
        var line = document.createElement("div");
        line.className = "cm-line";
        line.innerText = lines[i];
        cm.appendChild(line);
    }
}

function run() {
    var cm = document.getElementsByClassName("cm-content")[0]; 
    var out = document.getElementById('out');
    out.value = "Preparing for launch..."
    var code = '';
    for (var i = 0; i < cm.childNodes.length; i++) {
        if (cm.childNodes[i].innerText !== "\n" && cm.childNodes[i].innerText !== "") {
            if (i !== cm.childNodes.length - 1) {
                code += cm.childNodes[i].innerText + "|";
            } else {
                code += cm.childNodes[i].innerText
            }
        }
    }
    const writtenMsn = "sc = " + JSON.stringify(code);
    pyodide.runPython(writtenMsn);
    try {
        pyodide.runPython("sc = " + JSON.stringify(code));
        pyodide.runPython(`
        stdout, linesran, comptime = Interpreter(sc).exe(sc)
    `)
    } catch (error) {
        console.log(error)
        prepare()
    }
    const stdout = pyodide.globals.toJs().get('stdout')
    const linesran = pyodide.globals.toJs().get('linesran')
    out.value = `${stdout}\nran ${linesran} line(s)\n\n`;
}

export default Msnscript;
export {prepare, pyodide, run, load}