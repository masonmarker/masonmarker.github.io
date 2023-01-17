


import React from 'react'
import {Title, Section} from './../msn2docs'
import { ExecutionDisplay } from './basics'



var serial = 0;

function Examples() {
    return (
        <div className='msn2docs-div'>


            <Title title='Examples' subtitle="Finally, why you came!" subtitle2="Difficulty: Hard" back="/msn2docs" next="/msn2docs"/>



            <Example title="Basic Syntax Additions"  desc={[
                "The following are some examples of how new syntax additions to the base language can look.",
                "This first example demonstrates how list comprehension can be created and customized with macros",
                "The method at which the macro interprets the instruction is generally unsafe considering the possibility of any one string could contain the tokens",
                "This example simply demonstrates the syntax possibilities and not the vastly detailed and programmatically safe syntax implementations.",
                "Creating this macro does not deter the fact that Python's list comprehension is easily accessible from the base language, and simply demonstrates a possibility from the small quantity of system calls and value methods",
            ]} code={`
# defining a basic macro for list comprehension
macro('in ', '__inline', private(=>(
    @__incompret = [],

    # with keyword should be surrounded with whitespace
    @ __sp1 = __inline.split(' with '),

    # no need for whitespace around >>> because its symbolic
    # and readability is not a concern
    @ __sp2 = split(__sp1.get(1), '>>>'),

    # the first part of the with statement is the iterable
    @ __iterable = -(__sp1.get(0)),

    # the second part of the with statement is the variable name for each
    # element
    @ __varname = strip(__sp2.get(0)),

    # the third part of the with statement is the expression to be evaluated
    # for each element
    @ __expr = __sp2.get(1),

    # iterate over the iterable
    __iterable.each('__inel', =>(
            
            # set the variable name to the current element
            var(__varname.val(), __inel.val()),
    
            # append the expression value to the return list
            __incompret.append(-(__expr.val()))
    )),

    # return new list
    __incompret.val()
)))

# invoking the new comprehension mechanism
print(in [1, 2, 3, 4, 5] with x >>> x.mul(2))

# different variation
@ l = [5, 4, 3, 2, 1]
print(in l.val() with x >>> x.str())

# more complex variation
print(in l.val() with x >>> if (?x? % 2 == 0, x.str(), x.val()))

# even more complex variation (does nothing to the list lol)
print(in l.val() with x >>> =>(
    @ tmp = from(x.val(), x.val(), x.val()),
    @ tmp = tmp.slice(0, 1),
    tmp.get(0)    
))

# same algorithm with Python's list comprehension
print([x * 2 for x in [1, 2, 3, 4, 5]])
            `} />



            <Example title="Basic Syntax Additions 2"  desc={[
                "This example demonstrates how a an Interpreter redirect can understand a macro and interpret it as a block of code.",
                "This block of code is managed by the Interpreter redirection mechanism, and is not a macro itself.",
            ]} code={`
# utilizing Interpreter redirection with macros to define a an if block
macro('if:', '__ifline', =>(
    @ __recif = -(__ifline.val()),
    redirect('__rline', if(__recif.val(), -(__rline.val())))
))

# implementing if block closure
macro('endif', '__endifline', =>(stopredirect(), startredirect()))

@ v = 0
if: v.++()
    print('Hello,')
    print('World!')
endif
v.print()
            `} />

            <Example title="Basic Syntax Additions 3"  desc={[
                "This example shows how the above example can be implemented with a single elif block.",
                "This process can be scaled to any number of elif blocks, or whatever type of block you want to implement.",
            ]} code={`
# utilizing Interpreter redirection with macros to define a an if block
macro('if:', '__ifline', =>(
    @ __recif = -(__ifline.val()),
    redirect('__rline', if (<<|__rline.val()|.startswith('elif:')>>,
        if(not(__recif.val()), @__recif= -(__rline.slice(5, __rline.len())), @__recif=0),
        if(__recif.val(), 
            -(__rline.val())
        ))
    )
))


# implementing if block closure
macro('endif', '__endifline', =>(stopredirect(), startredirect()))

@ v = [1, 2, 3]

# invoking the new if block
if: v.equals([3, 2, 1])
    print('Hello,')
    print('World!')
elif: v.equals([1, 2, 3])
    print('Goodbye,')
    print('World!')
endif
            `} />




            <Example title="Basic Syntax Additions 4"  desc={[
                "Demonstrates how a function and it's body can be declared via macro invoked Interpreter redirection.",
            ]} code={`
# creating an approach to line by line function declaration
macro('func ', '__funcdec', =>(

    @__sp = __funcdec.split(' : '),
    @__fname = strip(__sp.get(0)),

    # declares the basics of the new function
    function(__fname.val(),),

    # add each argument variable to the function
    each(split(strip(__sp.get(1)), ' '), '__var', =>(
        function.addarg(__fname.val(), __var.val())
    )),

    # requests for an Interpreter redirect
    redirect('__funcline', =>(
        function.addbody(__fname.val(), __funcline.val())
    ))
))

# declares a function and ends Interpreter redirection
macro('end', '__unused', =>(stopredirect(), startredirect()))

# declaring a function
func pyth : a b
    var('c', math.sqrt(?a? ** 2 + ?b? ** 2))
    ret('pyth', c.val())
end

# invoking the function
print(<<pyth of |@n1=3| and |@n2=4| is>>, pyth(n1.val(), n2.val()))

# redeclaring the function with a more optimal approach
func pyth : a b
    ret('pyth', math.sqrt(?a? ** 2 + ?b? ** 2))
end

# invoking the function
print(<<pyth of |@n1=6| and |@n2=8| is>>, pyth(n1.val(), n2.val()))

# function() system call equivalent
function('pyth', ret('pyth', math.sqrt(?a? ** 2 + ?b? ** 2)), 'a', 'b')

print(<<pyth of |@n1=5| and |@n2=12| is>>, pyth(n1.val(), n2.val()))
            `} />

            <Example title="Basic Syntax Additions 5"  desc={[
                "This example is fairly simple, but is valuable as if shows how to define programming syntax to shorten the amount of time coding.",
                "The demonstration below shows new ways to retrieve the values of variables, a very commonly used programming requirement."
            ]} code={`
# for obtaining a value
function('getval', ret('getval', val(strip(__valine.val()))),)

# example of obtaining value with macro

=>(@m1 = 'v:', @m2 = '!!', @m3 = '+')

macro(m1.val(), '__valine', getval(__valine.val()))
macro(v: m2, '__valine', getval(__valine.val()))
macro(!!m3, '__valine', getval(__valine.val()))

@ variable = 'Hello, World!'

print(+m1, ':', v: variable)
print(+m2, ':', !!variable)
print(+m3, ':', + variable)

# example of obtaining value with enclosedsyntax
enclosedsyntax('(', ')', '__encline', getval(__encline.val()))
enclosedsyntax('val:', ':val', '__encline', getval(__encline.val()))

# my personal favorite of the bunch
print('() :', (variable))

print('val::val :', val:variable:val)


# example of obtaining value with postmacro
postmacro(':', '__valine', getval(__valine.val()))
postmacro('<-', '__valine', getval(__valine.val()))

print(': :', variable:)
print('<- :', variable <-)

# example of obtaining value with syntax
syntax('|', '__valine', getval(__valine.val()))
syntax('==', '__valine', getval(__valine.val()))
syntax('^', '__valine', getval(__valine.val()))

print('| :', |variable|)
print('^ :', ^variable^)
            `} />


            <Example title="Basic Syntax Additions 6"  desc={[
                "This example demonstrates how you can define your own loop syntax."
            ]} code={`
# creating a protected for loop mechanism
macro('loop ', '__loopdef', =>(

    # obtain the loop parameters
    @ __loopthings = -(__loopdef.val()),

    # create a looping function
    function('__recloop',),

    # redirect loop context to a new function
    redirect('__rline', function.addbody('__recloop', __rline.val()))
))

# loop closure
macro('endloop', '__unused', =>(

    # close and interpret redirection
    stopredirect(), 
    startredirect(), 

    # now that the loop body is closed, perform the loop in an isolated context
    private(for(__loopthings.get(0), __loopthings.get(1), __loopthings.get(2), 
        __recloop()
    ))
))

# invoke the loop macro
loop from(0, 3, 'i')
    print(i.val(), ": Hello, World!")
    print(i.val(), ": Goodbye, World!")
endloop

# reversing a list
@ list = [1, 2, 3, 4, 5]
@ cp = list.copy()

# invoking the loop macro
loop from(0, list.len(), 'i')

    # reversing the list
    list.set(i.val(), cp.get(op.sub(op.sub(list.len(), i.val()), 1)))

    # we are in a private context, so we can use private variables
    var('priv', 0)
    assert(exists('priv'))
endloop

assert (
    list.equals([5, 4, 3, 2, 1]), 
    not(list.equals([1, 2, 3, 4, 5])),

    # private context variables do not exist outside of the context
    not(exists('priv'))
)`          } />
            

        </div>
    )
}

function Example(props) {
    return (
        <div>
            <Section title={props.title} subtitle={<b>Example</b>} subtitle2={[
                
                <ul>{props.desc.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}</ul>,

                "If you see any documentation that may be confusing, read the docs again, it's all there! ", 
                "If you still have questions, feel free to reach out to me on my socials.", <br/>, <br/>,
                <b>Demonstration:</b>, <br/>,
                <ExecutionDisplay  executionid={"ex:example_" + serial++} code={props.code} />
            ]} />
        </div>
    )
}

export default Examples