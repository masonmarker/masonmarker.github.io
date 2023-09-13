import "./../msn2.css";

// import msn2docs
import { Title, Section } from "./../msn2docs";

import msn2raw from "./../raw/msn2raw";
import { Link } from "react-router-dom";
import React from "react";

var pyodide;

// on window load, prepare pyodide
window.onload = prepare;

async function prepare(out) {

    // preparation message
    if (out) {
        out.innerHTML = "Loading Python backend...";
    }

  pyodide = await window.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.21.0/full/",
  });

  // import MSNScript2 source code
  await pyodide.runPython(msn2raw);
}

var outsprinting = 0;

function Basics() {
  return (
    <div className="msn2docs-div">
      <Title
        title="Basics"
        subtitle="Learn the basics!"
        subtitle2="Difficulty: Easy"
        back="/msn2docs"
        next="/msn2systemcalls"
      />

      <Section
        title="Interpretation"
        subtitle={[
          <i>MSN2</i>,
          "'s backend is with Python, meaning much of the syntax is similar to Python, and Python fallback is requested if an instruction is not recognized as syntax of",
          <i>MSN2</i>,
          ". However, of course, there are many differences.",
          <br />,
          <br />,

          <i>MSN2</i>,
          "'s base syntax generally interprets code line by line, so there's no need for semicolons.",
          <br />,
          "If a line of base code needs to continue to the next line, the line must be entirely surrounded by !{} (aggregate",
          " block syntax), OR the initial line must end with a '(', and eventually end with a ')'.",
          <br />,
          <br />,
          " Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:aggregate"
            code={[
              "print('Saying ', end='')\n\n!{print(\n'hello ', end=''\n)}\n\nprint(\n\t'to the','world!')",
            ]}
            codeheight="11rem"
          />,
        ]}
      />

      <Section
        title="Imports"
        subtitle={[
          "Imports are a way to import code from other files, and are used to import code from other files.",
          <br />,
          "Imports are declared with the import() system call, see the ",
          <a href="/#/msn2systemcalls/">system call documentation</a>,
          " for more information.",
          <br />,
          <br />,
        ]}
      />

      <Section
        title="Assertions"
        subtitle={[
          "Assertions are a key component in verifying the correctness of your code.",
          <br />,
          "Assertions are used to verify that a condition is true, and if it is not, an assertion error will be printed, providing details of the error.",
          <br />,
          "assert() takes any amount of arguments separated by a ','. assert() verifies that every argument evaluates to 1.",
          <br />,
          <br />,
          "Find more about assert() in the ",
          <a href="/#/msn2systemcalls/">system call documentation</a>,
          ".",
          <br />,
          <br />,
          <i>
            Note that the working assertion prints nothing, and the failing
            assertion prints an error message.
          </i>,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:assert"
            code={["assert(True, 1, not 0, not(0), not False)"]}
            codeheight="3.2rem"
          />,
          <br />,
          <ExecutionDisplay
            executionid="ex:assertfailure"
            code={["assert(assert(not True))"]}
            codeheight="3.2rem"
          />,
        ]}
      />

      <Section
        title="Layout"
        subtitle={[
          "The base language is laid out in a way where all instructions can be used as arguments to any function or syntax adjustment.",
          <br />,
          "This means that instructions and syntax intertwining can become very recursive in nature, and",
          <br />,
          "then permits us the ability to program virtually any algorithm with a single line of code.",
          <br />,
          <br />,

          <ExecutionDisplay
            executionid="ex:layout"
            code={[
              "assert(1)\nassert(1, 1)\nassert(1, assert(\n\tassert(\n\t\tassert(\n\t\t\t1\n\t\t),\n\t\tassert(1)\n\t)\n))\n\nassert(1 == 1, 5 in [5], 'hello' in 'hello world')\nassert('key' in {'key': -5438.4382})\nassert(20 - 10 == 10, 5 > 3)",
            ]}
            codeheight="18rem"
          />,
        ]}
      />

      <Section
        title="Comments"
        subtitle={[
          "Comments are a way to write notes in your code, and are ignored by the interpreter.",
          <br />,
          "Comments are denoted by a #, and should be declared at the beginning of an instruction.",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:comment"
            code={["# prints an assertion result\nprint(assert(1, 1, not 0))"]}
            codeheight="7rem"
          />,
        ]}
      />

      <Section
        title="Environment"
        subtitle={[
          "You can access a string representation of the environment of your code with the env() system call.",
          <br />,
          "env() can also be found in the ",
          <a href="/#/msn2systemcalls/">system call documentation</a>,
          ".",
          <br />,
          <br />,

          "env() takes 0 or 1 argument, the argument being a boolean as to whether the environment should be printed or not.",
          <br />,
          <br />,

          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:env"
            code={["env()\nenv(True)"]}
            codeheight="5rem"
          />,
        ]}
      />

      <Section
        title="Variables"
        subtitle={[
          "Variables are a way to store data in your code, and are used to store data for later use.",
          <br />,
          "Variables are declared with the below syntax: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:variable"
            code={[
              'var("integer", 5)\n@ integer2 = 10\n@ integer -= 1\nenv(True)',
            ]}
            codeheight="6.3rem"
          />,
        ]}
      />

      <Section
        title="Variable Comparison"
        subtitle={[
          "Variables can be compared via variable specific methods.",
          <br />,
          "Variable specific methods have many aliases, example, .less() and .l() perform the same operation, see the source code for more information.",
          <br />,
          <ExecutionDisplay
            executionid="ex:varcomparison1"
            code={[
              "@integer = 1\n@integer2 = 2\nassert(integer.less(integer2))\nassert(not(integer.greater(integer2)))",
            ]}
            codeheight="10rem"
          />,
        ]}
      />

      <Section
        title="Variable manipulation"
        subtitle={[
          "Variables can be manipulated in various ways.",
          <br />,
          "Variables should be accessed with their variable name, however there are other ways:",
          <br />,
          "Variables can be accessed with the val(name) system call, taking a single string argument being the name of the variable.",
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:variablemanipulation"
            code={[
              'var("integer", 5)\n\nprint(val("integer"))\nprint(integer)\nprint(integer)',
            ]}
            codeheight="8.5rem"
          />,
          "Variables can be altered many different ways, the below code showcases some of these ways.",
          <br />,
          <ExecutionDisplay
            executionid="ex:variablemanipulation2"
            code={[
              'var("integer", 0)\ninteger.add(1)\nassert(equals(integer, 1))' +
                "\n\nassert(equals(add('integer', 2), 3))\n\n#using the op class\nassert(equals(var('integer', op.add(integer, 3)), 6))\n" +
                `
@ integer = 3
integer.add(1)
assert(equals(integer, 4))
integer.sub(1)
assert(equals(integer, 3))
`,
            ]}
            codeheight="20rem"
          />,
        ]}
      />

      <Section
        title="Variable types"
        subtitle={[
          "Variables can be of any type, and can be changed at any time.",
          <br />,
          "Variables are of types and behave the same way as those in Python.",
          <br />,
          <br />,
          "You can find type specific methods in the ",
          <a href="/#/msn2systemcalls/">system call documentation</a>,
          ".",
          <br />,
          <br />,

          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:variabletypes"
            code={[
              'var("integer", 5)\nvar("float", 5.0)\nvar("string", "hello")\nvar("boolean", True)\nvar("list", [1, 2, 3])\nvar("dictionary", {"key": "value"})\nvar("function", lambda x: x + 1)\n\nprint(integer, float, string, boolean, list, dictionary, function.val(5))',
            ]}
            codeheight="17rem"
          />,
        ]}
      />

      <Section
        title="Inline function"
        subtitle={[
          "Inline functions are a way to create a function in a single line of code.",
          <br />,
          "The inline function system calls () and =>(), similar to the rest of instructions in the base language, can be used as arguments to any function or syntax adjustment.",
          <br />,
          "The inline function takes any amount of arguments returns the evaluation of its last argument.",
          <br />,
          <br />,
          "Again, you can find methodological documentation of any unknown system call or variable method in the ",
          <a href="/#/msn2systemcalls/">system call documentation</a>,
          ".",
          <br />,
          <br />,

          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:inlinefunction"
            code={[
              'print((\n\tvar("variable", [1, 2, 3]), \n\tvariable\n))\n\n# simplifying the instruction\nprint(var("variable", [1, 2, 3]))',
            ]}
            codeheight="10rem"
          />,
        ]}
      />

      <Section
        title="Contexts"
        subtitle={[
          "MSN2 is split into contexts, you can view the context of a certain line of code with the env(should_print) system call.",
          <br />,
          <br />,
          "You can isolate a block of code with the new() or private() system calls, which can be found in the ",
          <a href="/#/msn2systemcalls/">system call documentation</a>,
          ".",
          <br />,
          <br />,

          "In brief, a new context begins with no variables or methods, ",
          <br />,
          "and a private context inherits copies of the variables and methods from the parent context. A private context cannot modify the variables owned by the parent context.",
          <br />,
          <br />,

          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:contexts"
            code={[
              'var("global", 1)\nassert(global)\n\n# asserting the global variable is not visible here\nnew((\n\tassert(not(exists("global")))\n))\n\n# asserting the variable is visible here\n' +
                "private((\n\tassert(exists('global')),\n\tvar('private', 0), \n\tglobal.add(5), \n\tassert(equals(global, 6))))\n\n# private variable should not exist\nassert(not(exists('private')))\n\n# global variable should still exist\nassert(exists('global'))\n\n# global variable should still be 1\nassert(equals(global, 1))" +
                "\nprint('[+] tests passed')",
            ]}
            codeheight="30rem"
          />,
        ]}
      />

      <Section
        title="Built in macro: '@'"
        subtitle={[
          "The @ symbol is a built in macro that can be used to create or adjust a variable.",
          <br />,
          "More about the '@' macro can be found in the ",
          <a href="/#/msn2macros/">macros documentation</a>,
          ".",
          <br />,
          <br />,

          "the '@' utilizes the succeeding instruction to effectively fall back to Python's variable declaration and alteration syntax, ",
          <br />,
          ExecutionDisplay({
            executionid: "ex:atmacro",
            code: ["@integer = assert(1)\nprint(assert(integer))"],
            codeheight: "6.5rem",
          }),
          "The '@' macro can also be used to alter a variable.",
          <br />,
          ExecutionDisplay({
            executionid: "ex:atmacrofunction",
            code: ["@integer=4\n@integer += 3 + 2\nprint(integer)"],
            codeheight: "6.5rem",
          }),
        ]}
      />

      <Section
        title="Built in enclosing syntax: '<<>>'"
        subtitle={[
          "<<>> enclosing syntax, or the Python fallback syntax, allows for msn2 code insertion to a Python statement for evaluation.",
          <br />,
          "More about the '<<>>' syntax can be found in the ",
          <a href="/#/msn2macros/">macros documentation</a>,
          ".",
          <br />,
          <br />,

          "In short, any ",
          <i>MSN2</i>,
          " code surrounded by a pair of '|' will be evaluated and the result will be inserted into the Python statement.",
          <br />,

          "Simple usage: ",
          <br />,
          ExecutionDisplay({
            executionid: "ex:enclosing",
            code: [
              'assert(<< 0 + 1 >>)\nassert(equals(<< (|assert(1)| + 2) * "m" >>, "mmm"))\nprint("[+] tests passed")',
            ],
            codeheight: "5rem",
          }),
          <br />,
          "Demonstrating using both '@' and '<<>>' syntax: ",
          <br />,
          ExecutionDisplay({
            executionid: "ex:enclosing2",
            code: [
              '@list = << [int(i) for i in "|cat(1, " ", 2, " ", 3)|".split()] >>\nassert(equals(list, [1, 2, 3]))\nprint("[+] test passed")',
            ],
            codeheight: "8rem",
          }),
          <br />,
        ]}
      />

      <Section
        title="Built in macro pair: '~' and '--'"
        subtitle={[
          "The '~' and '--' macros are a pair of macros that can be used to create a function.",
          <br />,
          "More about the '~' and '--' macros can be found in the ",
          <a href="/#/msn2macros/">macros documentation</a>,
          ".",
          <br />,
          <br />,

          "In short, the '~' macro is used to declare a function, and the '--' macro is used to add body to the most recently declared function.",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:macros"
            code={[
              "# function that generates a list" +
                "\n" +
                "~ generate_list(length) -> return" +
                "\n" +
                "\t-- @return = << [i for i in range(|length|)] >>\n\n" +
                "# we use private() to isolate the function from its parent context" +
                "\n" +
                "assert(equals(private(generate_list(5)), [0, 1, 2, 3, 4]))\n" +
                "assert(equals(private(generate_list(10)), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))\n" +
                "print('[+] tests passed')" +
                "\n" +
                "\n" +
                "# viewing environment, note the lack of function variables" +
                "\n" +
                "print(env())",
            ]}
            codeheight="20rem"
          />,
          "There is an alternative syntax for declaring a function, which is the system call function().",
          <br />,
          "The function() system call creates a function with a different syntax than the '~' and '--' macros.",
          <br />,
          "More about the function() and ret() system calls can be found in the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:macros2"
            code={[
              "# function that generates a list" +
                "\n" +
                "function('generate_list', ret('generate_list', << [i for i in range(|length|)] >>), 'length')\n" +
                "assert(equals(private(generate_list(5)), [0, 1, 2, 3, 4]))\n" +
                "assert(equals(private(generate_list(10)), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))\n" +
                "print('[+] tests passed')",
            ]}
            codeheight="10rem"
          />,
        ]}
      />

      <Section
        title="Built in enclosing syntax: <2><2>"
        subtitle={[
          "<2><2> enclosing syntax is an ",
          <i>MSN2</i>,
          " insertion to an ",
          <i>MSN2</i>,
          " instruction for evaluation.",
          <br />,
          "More about the <2><2> syntax can be found in the ",
          <a href="/#/msn2macros/">macros documentation</a>,
          ".",
          <br />,
          <br />,
          "Similarly to <<>> enclosing syntax, any ",
          <i>MSN2</i>,
          " code surrounded by a pair of '%' will be evaluated and the result will be inserted into the ",
          <i>MSN2</i>,
          " instruction surrounded by the <2><2> tags.",
          <br />,
          <br />,
          "Example: ",
          <br />,
          ExecutionDisplay({
            executionid: "ex:enclosing3",
            code: ["print(<2> %1% and %assert(not False)% <2>)"],
            codeheight: "5rem",
          }),
          <br />,
          "Use cases may seem unclear, however the importance is more noticeable as code complexity increases.",
          <br />,
        ]}
      />

      <Section
        title="Built in macro: '*'"
        subtitle={[
          "The '*' macro is used to unpack a variable or amount of variables for evaluation.",
          <br />,
          "More about the '*' macro can be found in the ",
          <a href="/#/msn2macros/">macros documentation</a>,
          ".",
          <br />,
          <br />,
          "This macro can be unsafe, as it simply replaces any instance of a variable name with the value of the variable regardless as to whether it may be in a string or not.",
          <br />,
          "However the macro is fine when there is nostring within the argument cannot have a variable name within.",
          <br />,
          <br />,
          "Example: ",
          <br />,
          ExecutionDisplay({
            executionid: "ex:macros3",
            code: ["@integer = 5\nprint(*integer)"],
            codeheight: "5rem",
          }),
          <br />,
        ]}
      />

      <Section
        title="Conditionals"
        subtitle={[
          "Conditionals are a way to control the flow of a program.",
          <br />,
          "Conditionals in ",
          <i>MSN2</i>,
          " are relatively simple.",
          <br />,
          <br />,
          "The if(cond, do, else) system call is used to alter the flow of a program.",
          <br />,
          "The if() system call takes three arguments: a condition, a block of code to execute if the condition is true, and a block of code to execute if the condition is false.",
          <br />,
          "The condition can be any expression that evaluates to a boolean value.",
          <br />,
          "The else argument is optional.",
          <br />,
          <br />,
          "More about the if() system call can be found in the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:if"
            code={[
              "@integer = 5\n" +
                "@ result = if (integer.equals(5), 'correct')\n" +
                "assert(result.equals('correct'))\n" +
                "print('[+] test passed')",
            ]}
            codeheight="10rem"
          />,
          <ExecutionDisplay
            executionid="ex:if2"
            code={[
              "@integer = 5\n" +
                "if (?integer? == 6, assert(False), print('correct!'))\n" +
                "print('[+] test passed')",
            ]}
            codeheight="10rem"
          />,
          "Also, see the ?() system call for a more concise way to write conditionals.",
          <br />,
          "The ?() system call can be found in the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,
        ]}
      />

      <Section
        title="Error Handling"
        subtitle={[
          <i>MSN2</i>,
          " utilizes a try-catch system for error handling.",
          <br />,
          "For more information about the try-catch system, see the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:trycatch"
            code={[
              "try([0, 1, 2, 3][9], print('[*] error caught!'))\nprint('hello')",
            ]}
            codeheight="5rem"
          />,
        ]}
      />

      <Section
        title="Loops"
        subtitle={[
          "Loops provide a way to repeat a block of code.",
          <br />,
          "Loops in ",
          <i>MSN2</i>,
          " are relatively simple.",
          <br />,
          <br />,
          "The while(cond, do) system call is used to repeat a block of code.",
          <br />,
          "The for(start, end, var, do) system call is used to repeat a block of code a certain number of times.",
          <br />,
          "See more about the while() and for() system calls in the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:while"
            code={[
              "@i = 0\n" +
                "# starting a while loop" +
                "\n" +
                "while (i.less(5), i.add(1))\n" +
                "assert(i.equals(5))\n" +
                "print('[+] test passed')",
            ]}
            codeheight="10rem"
          />,
          <ExecutionDisplay
            executionid="ex:for"
            code={[
              "# starting a for loop" +
                "\n" +
                "for (0, 5, 'i', print(i, 'hello!'))",
            ]}
            codeheight="10rem"
          />,
        ]}
      />

      <Section
        title="Classes"
        subtitle={[
          "Classes are a way to create objects in ",
          <i>MSN2</i>,
          ".",
          <br />,
          "In short, classes are created by asking a new context for variables created within it's context.",
          <br />,
          "The class(name, environment) system call is used to create a class.",
          <br />,
          "The class() system call takes two arguments: a name for the class, and a block of code to execute in the context of the class.",
          <br />,
          "See more about the class() system call in the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:class"
            code={[
              "# declaring a class, " +
                "\n" +
                "# we use () to include multiple instructions within the new context" +
                "\n" +
                "class('Person', (@name='',@age=-1))\n\n" +
                "# creating a new instance of the Person class" +
                "\n" +
                "@ john = Person('john', 40)\n" +
                "assert(equals(john.name(), 'john'))\n" +
                "assert(equals(john.age(), 40))\n" +
                "print('[+] test passed')",
            ]}
          />,
          "Altering an instance of a class:",
          <br />,
          <ExecutionDisplay
            executionid="ex:class2"
            code={[
              "# declaring a class, " +
                "\n" +
                "# we use () to include multiple instructions within the new context" +
                "\n" +
                "class('Person', (@name='',@age=-1))\n\n" +
                "# creating a new instance of the Person class" +
                "\n" +
                "@ john = Person('john', 40)\n" +
                "# altering the instance of the class" +
                "\n" +
                "john.name('johnny')\n" +
                "john.age(41)\n" +
                "assert(equals(john.name(), 'johnny'))\n" +
                "assert(equals(john.age(), 41))\n" +
                "print('[+] test passed')",
            ]}
          />,
          "A class is simply a dictionary indexing a specific key." +
            "\n" +
            "To illustrate this, we can print the class:",
          <br />,
          <ExecutionDisplay
            executionid="ex:class3"
            code={[
              "# declaring a class, " +
                "\n" +
                "class('Person', (@name='',@age=-1))\n\n" +
                "# creating a new instance of the Person class" +
                "\n" +
                "@ john = Person('john', 40)\n" +
                "print(john)",
            ]}
          />,
          "The same task can be achieved with the below syntax:",
          <br />,
          <ExecutionDisplay
            executionid="ex:class4"
            code={[
              "# creating an instance of a class" +
                "\n" +
                "@ john = {'name': 'john', 'age': 40}\n\n" +
                "print('name:', john.name())\n" +
                "print('age:', john.age())",
            ]}
          />,
        ]}
      />

      <Section
        title="Macros"
        subtitle={[
          "Macros serve as a mechanism to add or adjust syntax in ",
          <i>MSN2</i>,
          ".",
          <br />,
          "There are several different types of macros, each with their own use cases.",
          <br />,
          "See more about macros in the macros documentation: ",
          <a href="/#/msn2macros/">macros documentation</a>,
          ".",
          <br />,
          <br />,

          "A regular, pre-instruction macro can be created with the macro(token, instruction_var_name, do) system call.",
          <br />,
          "When a macro is defined, its token will be searched for in each following instruction." +
            "\n" +
            "If the token is found, the instruction will be replaced with evaluation of the do argument.",
          <br />,
          <br />,

          "The -(instruction) system call takes a string as an instruction of ",
          <i>MSN2</i>,
          " and returns the result of the instruction.",
          <br />,
          "To see more about the -(instruction) system call, see the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,

          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:macroasdf"
            code={[
              "# defining a macro" +
                "\n" +
                "macro('!', 'line', print(-(line)))" +
                "\n\n" +
                "# invoking the macro" +
                "\n" +
                "! 'hello,'" +
                "\n" +
                "! 'world!'" +
                "\n",
            ]}
          />,
          "With this, we can simplify the amount of code needed to be written to execute an instruction.",
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:macroasdf2"
            code={[
              "# simplifying an assertion" +
                "\n" +
                "macro('test', 'line', if(not(-(line)), print('[-] assertion error : ', line)))" +
                "\n\n" +
                "# invoking the macro with a correct assertion" +
                "\n" +
                "test 1 == 1" +
                "\n" +
                "# invoking the macro with an incorrect assertion" +
                "\n" +
                "test 1 == 2" +
                "\n" +
                "\n" +
                "# more tests" +
                "\n" +
                "test 5 in [1, 2, 3, 4, 5]" +
                "\n" +
                "test 6 in [1, 2, 3, 4, 5]",
            ]}
          />,
        ]}
      />

      <Section
        title="Redirection"
        subtitle={[
          "Interpreter redirection allows for a line of code to be redirected to a custom interpreter for a specific amount of lines.",
          <br />,
          "A few system calls are used for Interpreter redirection, and you can see more about them in both the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          " and the ",
          <a href="/msn2redirect/">redirection documentation</a>,
          ".",
          <br />,
          <br />,
          "In short, the interpreter redirection system calls are:",
          <br />,
          <ul>
            <li>redirect(line_var_name, function)</li>
            <li>stopredirect()</li>
            <li>startredirect()</li>
          </ul>,
          "All code found between redirect() and stopredirect() will be redirected to the function specified in the function argument.",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:redirect"
            code={[
              "# example of a redirection" +
                "\n" +
                "redirect('_line', print('redirected: ', _line))" +
                "\n" +
                "\n" +
                "Hello, World!" +
                "\n" +
                "This line is being redirected." +
                "\n" +
                "This is also being redirected." +
                "\n" +
                "\n" +
                "stopredirect()" +
                "\n" +
                "startredirect()",
            ]}
          />,
          "Simplifying with macros make redirection appear much more friendly.",
          <br />,
          "Macros cannot be used inside of a redirection, see more about this in the ",
          <a href="/#/msn2redirect/">redirection documentation</a>,
          ".",
          <br />,
          <br />,
          "Example: ",
          <br />,
          <ExecutionDisplay
            executionid="ex:redirect2"
            code={[
              "# setting up macros" +
                "\n" +
                "macro('print:', '__unused', redirect('rline', print(rline)))" +
                "\n" +
                "macro('end', '__unused', (stopredirect(), startredirect()))" +
                "\n\n" +
                "# invoking the macros" +
                "\n" +
                "print: " +
                "\n" +
                "\tHello, World!" +
                "\n" +
                "\tThis line is being redirected." +
                "\n" +
                "\tThis is also being redirected." +
                "\n" +
                "end",
            ]}
          />,
        ]}
      />

      <Section
        title={["The purpose of MSN2"]}
        subtitle={[
          "The below code shows a more complex example of how the SHOWN ",
          <i>MSN2</i>,
          " features can be combined to create new syntax.",
          <br />,
          "The code demonstrates the Collatz Conjecture, showing that for an arbitrary positive integer, if the integer is even, divide it by 2, and if the integer is odd, multiply it by 3 and add 1, the sequence will always reach 1.",
          <br />,
          "See more about the random() system call in the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,
          <ExecutionDisplay
            executionid="ex:complex"
            code={[
              "# base language code" +
                "\n" +
                "@num = 100" +
                "\n" +
                "while (not(num.equals(1)), if (equals(num.%(2), 0), @num/=2,(@num*=3,@num+=1)))" +
                "\n" +
                "print('[-] num:', num)",
            ]}
          />,
          "The below code shows the same Collatz Conjecture example, but provides the Collatz algorithm as a function to a macro.",
          <br />,
          "See information about system calls used in the below code in the ",
          <a href="/#/msn2systemcalls/">system calls documentation</a>,
          ".",
          <br />,
          <br />,
          <ExecutionDisplay
            executionid="ex:complex3"
            code={[
              "# simplifying with macros" +
                "\n" +
                "\n" +
                "# defining a macro" +
                "\n" +
                "macro('collatz', 'number', (\n\t@number=-(number),\n\twhile (number != 1,\n\t\tif (equals(number.%(2), 0), @number/=2,(\n\t\t\t@number*=3,@number+=1))),\n\tnumber\n\t\n))" +
                "\n" +
                "\n" +
                "# adding another macro to simplify printing" +
                "\n" +
                "macro('p ', '__line', print(-(__line)))" +
                "\n" +
                "\n" +
                "# testing the Collatz Conjecture" +
                "\n" +
                "p cat('testing Collatz Conjecture with ', 1000, ': ', collatz 1000)" +
                "\n" +
                "p cat('testing Collatz Conjecture with ', @rint1=random(0,1000,), ': ', collatz rint1)" +
                "\n" +
                "p cat('testing Collatz Conjecture with ', @rint2=random(0,1000,), ': ', collatz rint2)" +
                "\n" +
                "\n" +
                "# the final simplification" +
                "\n" +
                "macro('testcollatz ', 'cnumber', (@cnumber=-(cnumber), p cat('testing Collatz Conjecture with ', cnumber, ': ', collatz cnumber)))" +
                "\n" +
                "testcollatz 1000" +
                "\n" +
                "testcollatz random(0,1000,)" +
                "\n" +
                "testcollatz random(0,1000,)" +
                "\n" +
                "\n" +
                "print()\n" +
                "\n" +
                "# environment variables" +
                "\n" +
                "env(True)",
            ]}
          />,
        ]}
      />

      <Section
        title="Those were the basics! Onto the next topic?"
        subtitle={[
          <Link
            to="/msn2systemcalls"
            className="msn2-big-title"
            style={{
              color: "white",
              margin: 0,
              marginTop: "4.5vh",
              fontSize: "2rem",
              textDecoration: "none",
            }}
          >
            Next Topic
          </Link>,
        ]}
      />
    </div>
  );
}

function ExecutionDisplay(props) {
  return (
    <div className="msn2-execution-display-div">
      <CodeDisplay
        codeid={props.executionid}
        code={props.code}
        codeheight={props.codeheight}
      />
      <ExecuteButton executionid={props.executionid} />
      <Out outid={props.executionid} text="Ready for execution" />
    </div>
  );
}

function Out(props) {
  return <div id={props.outid + "out"} className="msn2-out-div"></div>;
}

// on click, function run should run with parameter executionid
function ExecuteButton(props) {
  return (
    <div
      className="msn2-execute-button-div"
      id={props.executionid + "button"}
      onClick={() => run(props.executionid)}
    >
      <p Style="margin: 0.4rem; padding: 1rem;">execute</p>
    </div>
  );
}

function CodeDisplay(props) {
  return (
    <div className="msn2-code-div" style={{ height: "fit-content" }}>
      <p
        style={{
          margin: 0,
          padding: 0,
          fontSize: ".7rem",
          marginLeft: "90%",
          userSelect: "none",
        }}
      >
        Edit Me!
      </p>
      <textarea
        id={props.codeid + "code"}
        contentEditable="true"
        className="msn2-code-area"
      >
        {props.code}
      </textarea>
    </div>
  );
}

var doneLoading = false;

// executes the code within the code display specified by executionid
// prints the out of the code to the out display specified by executionid
async function run(executionid) {
  outsprinting++;
  // run code
  var code = document.getElementById(executionid + "code").value;
  var out = document.getElementById(executionid + "out");
  await prepare(out)

  if (out.innerHTML.includes("Traceback")) {
    out.innerHTML = "";
  }

  pyodide.runPython("inter = Interpreter()");
  pyodide.runPython("sc = " + JSON.stringify(code));
  try {
    pyodide.runPython("thisout = inter.execute(sc)");
    var stdout = pyodide.runPython("sys.stdout.getvalue()");
    // animate out to print stdout
    // can only print if this is the only out printing

    if (outsprinting === 1) {
      // we use an invisible character thats not a space to
      // avoid shrinking the output for a few milliseconds
      // before the animation starts
      out.innerHTML = "‎";
      var i = 0;
      var interval = setInterval(function () {
        if (i < stdout.length) {
          if (stdout[i] === "\n") {
            out.innerHTML += "<br/>";
          } else {
            out.innerHTML += stdout[i];
          }
          i++;
        } else {
          clearInterval(interval);
          outsprinting--;
        }
      }, Math.max(1, 1000 / stdout.length));
    } else {
      outsprinting--;
    }

    // clear stdout
    pyodide.runPython("sys.stdout.truncate(0)");
    pyodide.runPython("sys.stdout.seek(0)");
  } catch (e) {
    printOut(out, e.message);
    outsprinting--;

    // continuously add '.' to the out until the code is done loading
    doneLoading = false;
    load(out);
    prepare(out).then(() => {
      doneLoading = true;

      // remove the last line before a break tag
      // this is to remove the entire last line

      var lastLine = out.innerHTML.split("<br>").pop();

      out.innerHTML = out.innerHTML.replace(lastLine, "");
    });
  }
}

// prints a string to out
function printOut(out, message) {
  // replace all newlines with <br/> tags
  message = message.replace(/\n/g, "<br/>");
  out.innerHTML += message;
}

async function load(element) {
  element.innerHTML += "<br/>Please wait, reloading Python...";
  // add a '.' to the element for as long as the element's innerHTML contains 'PythonError'
  // this is to indicate that the code is still loading
  var interval = setInterval(function () {
    if (element.innerHTML.includes("Traceback") && !doneLoading) {
      element.innerHTML += ".";
    } else if (doneLoading) {
      clearInterval(interval);
    }
  }, 25);
}

export { ExecutionDisplay };
export default Basics;
