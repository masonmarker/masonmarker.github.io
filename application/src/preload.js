

// create a const object
const preloaders = {
    "Integers": 

`integer = 3
integer += 3
integer2=5
integer=integer-integer2

:: assertions verify a certain condition is true
assert integer && 1

:: you can print variables with the below syntax
print "integer is {integer}"
print "integer2 is {integer2}"

integer = 3
integer -= 1
check_integer = 2
assert integer && check_integer

:: variables should be destroyed after use
System.destroy(integer, integer2, check_integer)`,
    "Strings": 
`string = "Hello"
string2 = "World"

:: note that strings must be within double quotes

:: you can concatenate strings with the below syntax
string3 = "{string} {string2}"
assert string3 && "Hello World"
print "{string3}"

:: you can use $$ to span one instruction across multiple lines
$$
longstring =
"
hey, how are you doing
 today? I'm doing great, thanks!
"
$$
print "{longstring}"
System.destroy(string, string2, string3, longstring)`,
    "Conditions":
`integer = 5
{integer && 5} integer -= 1
assert integer && 4


::    &&    :       equals
::    &&-   :       less than
::    &&+   :       greater than
::    &&-e  :       less than / equal to
::    &&+e  :       greater than / equal to
::    !&&   :       not equal

:: 'and' logic is simple to implement:
boolean = True
boolean2 = True

{boolean&&True}{boolean2&&True}boolean=False
assert boolean && False

:: 'or' logic has been implemented via the 'Boolean' class of operations
Boolean.or (boolean, boolean2)->result
assert result && True

:: the 'Boolean' class has several methods associated with it besides 'or'
Boolean.and (boolean, boolean2)->result
assert result && False

Boolean.eval(0 && 1)->result
assert result && False

:: 'not' logic:
boolean = True
Boolean.not(boolean)->boolean 
assert boolean && False

Boolean.not(boolean)->boolean
assert boolean && True

:: comparing values
string = "this is a string"
string.length()->length
assert length && 16

string.get(0)->first_char
assert first_char && "t"

integer = 5
integer2 = 10
{integer2 &&+ integer}integer2 -= 1
assert integer2 && 9
System.destroy(integer, integer2, boolean, boolean2, string, length, first_char, result)`,
    "Loops":
`integer = 0
{0:10}integer+=1
assert integer && 10

:: loops allow for repetition of code
:: loops can also incorporate a variable
string = ""
{0:3:integer}string += "{integer}"
assert string && "012"

{0:5:integer}print "{integer}"
System.destroy(integer, string)`,
    "Methods": 
`integer=0

:: methods are defined with the below syntax
~function()->ret
>    integer+=1
>    ret = integer

:: functions can be invoked with the below syntax
Local.function()->result
assert result && 1

:: while a function does not have to utilize a return value, it must declare one with '->'
:: a function's return value can have any name

integer += 2
~ gen_string()->string
>    string = ""
>    {0:integer}string+="{integer}"

:: once invoked, the storage for a function's return value can have any name
Local.gen_string()->return_string
assert return_string && "333"

:: a void method can be utilized with the below syntax
~ void_method()->nothing
>    print "this is a void method"
Local.void_method()

:: a function isn't required to have a name
integer = 0
~()->result
>    integer += 1
Local.()
assert integer && 1

:: the most recent function written can be invoked with the below syntax
^^^
assert integer && 2
^^^|^^^
assert integer && 4

:: a function can incorporate parameters
~ add(integer, integer2)->result
>    result = integer + integer2
Local.add(1, 2)->result
assert result && 3

~ length_of(__array)->result
>    __array.length()->result

:: an array cannot be passed as a parameter, but it can be passed as a variable
array = [1, 2, 3, 4, 5]
Local.length_of(array)->result
assert result && 5

:: when destroying, you can use '__' to destroy all variables prefixed with '__'
System.destroy(integer, result, return_string, array, integer2, ret, string, nothing, __)

:: you can also destroy functions with the below syntax

:: destroying functions without a name:
System.destroy()

:: destroying functions with a name:
System.destroy(function, gen_string, add, length_of, void_method)`,
"Arrays": 
`array = []
:: arrays are declared with the above syntax

array methods are accessed the same as any other object

array.add(3)
array.add(4)
array.add(5)
assert array && [3, 4, 5]

array.remove(4)
assert array && [3, 5]

array.get(0)->result
assert result && 3

array.length()->length
assert length && 2

array.reverse()->array
assert array && [5, 3]

array.copy()->array2
assert array2 && [5, 3]

:: the 'each' method allows for operations to be performed on each element of an array
array = [1, 2, 3, 4, 5]

:: there is no limit to the number of arguments to the 'each' method, however the first argument must be the current element
:: while the rest are string representations of instructions

iterations = 0
$$
array.each (item, 
    "print 'current item is {item}'",
    "iterations += 1"
    )
$$
assert iterations && 5


:: computing the sum of an array with functions

~ sum (__array) -> result
>    result = 0
>    __array.each (item, "result += item")

Local.sum(array)->result
assert result && 15
System.destroy(array, array2, result, length, iterations, item, __, sum)`,
    "Nests": 
`array = [1, 2, 3, 4, 5]

:: functions permit nested functions for subroutines

:: computing the sum of an array with nested functions
~ sum (__array) -> result
>    result = 0
>    __array.length()->__length
>    ~(__index) ->_
>    >    __array.get(__index)->__curr
>    >    result += __curr

:: nested functions should have closure via 'done_' to prevent execution issues
>    >    done_
>    {0:__length:__i}Local.(__i)
Local.sum(array)->result
assert result && 15


:: complex example
~_()->__void
>~__()->__void
>   >   ~___()->__void
>   >   >   ~____()->__void
>   >   >   >   ~_____()->__void
>   >   >   >   >   a += 1
>   >   >   >   >   done_
>   >   >   >   {0:2}Local._____()
>   >   >   >   done_
>   >   >   {0:2}Local.____()
>   >   >   done_
>   >   {0:2}Local.___()
>   >   done_
>   {0:2}Local.__()

~()->__v
>  a = 0
>  Local._()
>  assert a && 16

{0:2}Local.()
System.destroy(__,)
System.destroy(array, result, _, sum)`,
    "Objects": 
`Object.new("List")
:: declare a new object with the above syntax

:: objects in MSNScript have attributes and methods
:: add attributes with the below syntax
list = []
List.setattr("list", list)

:: methods are not unique to each object as of MSNScript 1.0
~size()->result
>    List.getattr("list")->__list
>    __list.length()->result

:: add methods to an object with the below syntax
List.has("size")

:: invoke object methods with the below syntax
List.size()->result
assert result && 0

~append(item)->success
>    List.getattr("list")->__list
>    __list.add(item)
>    List.setattr("list", __list)
List.has("append")

List.append(5)
List.append(10)
List.append(15)
List.size()->result
assert result && 3
print "List size is {result}"


:: as of MSNSCRIPT 1.0, more than one instance of an object cannot be created at once,
:: object serialization is planned for a future version

:: you can destroy objects with the below syntax
System.destroy(List, __, success, result, item, __list, list, size, append)`,
    "FizzBuzz": 
`
~fizzbuzz(number)->nothing
>   mod3 = number % 3 == 0
>   mod5 = number % 5 == 0
>   {mod3 && True} {mod5 && True} print "{number} : FizzBuzz"
>   {mod3 && True} {mod5 && False} print "{number} : Fizz"
>   {mod3 && False} {mod5 && True} print "{number} : Buzz"
>   {mod3 && False} {mod5 && False} print "{number}"
{1:20:i} Local.fizzbuzz(i)

System.destroy(fizzbuzz, i, mod3, mod5, __, number, nothing)`,
}

export default preloaders;