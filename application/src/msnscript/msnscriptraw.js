const SourceCode = `
# Interprets MSNScript


import os
import time

# Timer class
class Timer:
    def __init__(self):
        self.start = time.time()
    def elapsed(self):
        return time.time() - self.start





# --------------------------------------------------------



class Interpreter:
    # execution message
    exemsg = ''

    # script version
    version = 1.0

    # variables
    vars = {}

    # methods
    methods = {}
    loggedmethod = []

    # objects
    objects = {}

    def __init__(self, script):
        self.script = script
        self.vars = {}
        self.methods = {}
        self.loggedmethod = []
        self.objects = {}
        self.version = 1.0

    def verify(self, script):
        timer = Timer()
        ec = 0
        em = 'No error'
        lines = script.split('\\n')
        lines = [i for i in lines if i]

        # TODO perform verification

        elapsed = timer.elapsed() * 1000
        return lines, (ec, em), elapsed

    def exe(self, script):
        os.system('cls' if os.name == 'nt' else 'clear')
        self.exemsg += (f'MSNScript v{self.version}\\n')
        lines = self.verify(script)
        ec = lines[1][0]
        em = lines[1][1]

        if ec != 0:
            return f'Compilation Error {ec}: {em}'
        self.exemsg += ('Executing...\\n')
        self.exemsg += ('~~~~~~~~~~OUT~BEGIN~~~~~~~~~~\\n')

        ran = 0
        inbacktick = False
        backtickline = ''
        # for each line of code
        for line in lines[0]:
            if not line.lstrip().startswith('::'):
                seqlines = line.split('|')
                for seqline in seqlines:
                    if not inbacktick and seqline.replace(' ', '').startswith('$$'):
                        inbacktick = True
                        backtickline += seqline.replace('$$', '')
                    elif inbacktick and seqline.replace(' ', '').startswith('$$'):
                        inbacktick = False
                        self.interpret(backtickline)
                        ran += 1
                        backtickline = ''
                    elif inbacktick:
                        backtickline += seqline
                    else:
                        self.interpret(seqline)
                        ran += 1
                        

        self.exemsg += ('~~~~~~~~~~~OUT~END~~~~~~~~~~~\\n')
        self.exemsg += f"""    variables:\\n"""
        for var in self.vars:
            self.exemsg += f"""\\t{var} ({str(type(self.vars[var]))}): {self.vars[var]}\\n"""
        self.exemsg += f"""    methods:\\n"""
        for method in self.methods:
            self.exemsg += f"""\\t{method}\\n"""
        self.exemsg += f"""    objects:\\n"""
        for o in self.objects:
            self.exemsg += f"""\\t{o}: vars: {len(self.objects[o].vars)}, methods: {len(self.objects[o].methods)}\\n"""
        return self.exemsg, ran, lines[2]

    def interpret(self, line):
        element = ''
        variable = ''

        for i in range(0, len(line)):
            c = line[i]
            if c != ' ':
                if c == '+' and line[i + 1] == '=':
                    variable = element
                    element = ''
                    for j in range(i + 2, len(line)):
                        element += line[j]

                    # if element is a number
                    if isinstance(element, float) or isinstance(element, int):
                        value = element
                        self.vars[variable] += self.evaluate(element, 'number')
                    # if element is a string
                    elif isinstance(element, str):
                        try:
                            self.vars[variable] += self.evaluate(element, 'string')
                        except:
                            try:
                                self.vars[variable] += self.evaluate(element, 'number')
                            except TypeError:
                                self.exemsg += "Runtime Error: Out Of Bounds: " + element + '\\n'
                                
                    break
                elif c == '-' and line[i + 1] == '=':
                    variable = element
                    element = ''
                    for j in range(i + 2, len(line)):
                        element += line[j]
                    self.vars[variable] -= self.evaluate(element, 'number')
                    break
                elif c == '*' and line[i + 1] == '=':
                    variable = element
                    element = ''
                    for j in range(i + 2, len(line)):
                        element += line[j]
                    self.vars[variable] *= self.evaluate(element, 'number')
                    break
                elif c == '/' and line[i + 1] == '=':
                    variable = element
                    element = ''
                    for j in range(i + 2, len(line)):
                        element += line[j]
                    self.vars[variable] /= self.evaluate(element, 'number')
                    break
                elif c == '=':
                    variable = element
                    element = ''
                    string = False
                    array = False
                    for j in range(i+1, len(line)):   
                        if line[j] == '"':
                            string = True
                        if line[j] == '[':
                            array = True                     
                        element += line[j]
                    if string:
                        self.vars[variable] = self.evaluate(element, 'string')
                    elif array:
                        self.vars[variable] = self.evaluate(element, 'array')
                    else:
                        self.vars[variable] = self.evaluate(element, 'number')
                    break
                elif c=='.':
                    variable = element
                    element = ''
                    self.method(variable, line, i)
                    break
                elif c == '~':
                    returnvariable = ''
                    self.loggedmethod.append('')
                    for j in range(i + 1, len(line)):
                        if line[j] != ' ':
                            if line[j] == '(':
                                args = self.get_args(line, j)
                                for k in range(args[1], len(line)):
                                    if line[k] != ' ':
                                        if line[k] == '-' and line[k + 1] == '>':
                                            for l in range(k + 2, len(line)):
                                                if line[l] != ' ':
                                                    returnvariable += line[l]
                                break
                            self.loggedmethod[-1] += line[j]
                    if self.loggedmethod[-1] not in self.methods.keys():
                        self.methods[self.loggedmethod[-1]] = self.Method(self.loggedmethod[-1], self)
                    else:
                        break
                    for arg in args[0]:
                        if arg != '':
                            self.vars[arg] = None
                            self.methods[self.loggedmethod[-1]].add_arg(arg)
                    self.methods[self.loggedmethod[-1]].add_return(returnvariable)
                    self.methods[self.loggedmethod[-1]].update_interpreter(self)
                    break
                elif element == 'done':
                    try:
                        self.methods[self.loggedmethod[-1]].ended = True
                    except:
                        None
                    try:
                        self.loggedmethod.remove(self.loggedmethod[-1])
                    except:
                        None
                    break
                elif c=='>':
                    line = line[i + 1:]
                    try:
                        if not self.methods[self.loggedmethod[-1]].ended:
                            self.methods[self.loggedmethod[-1]].add_body(line)
                    except:
                        None
                    break
                elif element == 'print':
                    self.exemsg += self.evaluate(line[i:], 'string') + '\\n'
                    break
                elif "{" in element and "}" in element:
                    if ":" not in element:
                        expression = element.replace("{", '').replace("}", '')
                        willrun = self.boolean(expression)
                        
                        if willrun:
                            line = line[line.index("}") + 1:]
                            self.interpret(line)
                    else:
                        times = self.loop(element)
                        first = times[0]
                        last = times[1]
                        optvar = times[2]
                        try:
                            first = self.vars[first]
                        except: 
                            None
                        try:
                            last = self.vars[last]
                        except:
                            None
                        first = int(first)
                        last = int(last)
                        if first <= last:
                            for i in range(first, last):
                                if optvar != '':
                                    self.vars[optvar] = i
                                self.interpret(line.replace(' ', '').replace(element, ''))
                        else:
                            for i in range(last, first):
                                if optvar != '':
                                    self.vars[optvar] = i
                                self.interpret(line.replace(' ', '').replace(element, ''))
                    break
                elif element == '^^':
                    self.methods[self.loggedmethod[-1]].run([])
                    break
                elif element == 'assert':
                    expression = ''
                    instring = False
                    for j in range(i, len(line)):
                        if line[j] == '"' and instring:
                            instring = False
                        elif line[j] == '"' and not instring:
                            instring = True
                        if instring:
                            expression += line[j]
                        elif line[j] != ' ':
                            expression += line[j]
                    if not self.boolean(expression):
                        self.exemsg += f'assertion failed: {expression}\\n'
                    break
                elif element == 'run':
                    l = line[i:]
                    try:
                        self.interpret (self.vars[l])
                    except:
                        try:
                            self.interpret (string(l))
                        except:
                            self.interpret(l)
                    break
                else:
                    element += c

    def throw(self, msg):
        raise Exception(self.evaluate(msg, 'string'))


    def loop(self, section):
        first = ''
        last = ''
        optvar = ''
        optvarfound = False
        for i in range(1, len(section)):
            if section[i] == ':':
                for j in range(i + 1, len(section)):
                    if section[j] == ':':
                        for k in range(j + 1, len(section)):
                            if section[k] == '}':
                                optvarfound = True
                                break
                            optvar += section[k]    
                    if section[j] == '}':
                        break
                    if optvarfound:
                        break
                    last += section[j]
                break
            first += section[i]
        return first, last, optvar


    def boolean(self, expression):
        first = ''
        last = ''
        op = ''
        for i in range(0, len(expression)):
            if  expression[i] == '&' and expression[i + 1] == '&' and expression[i + 2] != '-' and expression[i + 2] != '+':
                for j in range(i + 2, len(expression)):
                    last += expression[j]
                op = '==' 
                break
            elif expression[i] == '!' and expression[i + 1] == '&' and expression[i + 2] == '&'  and expression[i + 3] != '-' and expression[i + 3] != '+':
                for j in range(i + 3, len(expression)):
                    last += expression[j]
                op = '!=' 
                break
            elif expression[i] == '&' and expression[i + 1] == '&' and expression[i + 2] == '-' and expression[i + 3] != 'e':
                for j in range(i + 3, len(expression)):
                    last += expression[j]
                op = '<' 
                break
            elif expression[i] == '&' and expression[i + 1] == '&' and expression[i + 2] == '+' and expression[i + 3] != 'e':
                for j in range(i + 3, len(expression)):
                    last += expression[j]
                op = '>' 
                break
            elif expression[i] == '&' and expression[i + 1] == '&' and expression[i + 2] == '-' and expression[i + 3] == 'e':
                for j in range(i + 4, len(expression)):
                    last += expression[j]
                op = '<=' 
                break
            elif expression[i] == '&' and expression[i + 1] == '&' and expression[i + 2] == '+' and expression[i + 3] == 'e':
                for j in range(i + 4, len(expression)):
                    last += expression[j]
                op = '>=' 
                break
            else:
                first += expression[i]
        
        try:
            firsteval = self.vars[first]
        except KeyError:
            firsteval = self.evaluate(first, 'string')

        try:
            lasteval = self.vars[last]
        except KeyError:
            lasteval = self.evaluate(last, 'string')

        if op == '==':
            return firsteval == lasteval
        if op == '!=':
            return firsteval != lasteval
        if op == '<':
            return firsteval < lasteval
        if op == '>':
            return firsteval > lasteval
        if op == '<=':
            return firsteval <= lasteval
        if op == '>=':
            return firsteval >= lasteval
        return False

    def method(self, variable, line, i):
        method = ''
        for j in range(i + 1, len(line) - 1): 
            if line[j] != ' ':
                if line[j] == '(':
                    if variable == 'System':
                        self.system(line, self.get_args(line, j), method)
                        break
                    if variable == 'Local':
                        self.local(line, self.get_args(line, j), method)
                        break
                    if variable == 'Boolean':
                        self.bool(line, self.get_args(line, j), method)
                    if variable == 'Object':
                        self.obj(line, self.get_args(line, j), method)
                    # ARRAYS
                    if method == 'add':
                        args = self.get_args(line, j)
                        for arg in args[0]:
                            try:
                                self.vars[variable].append(self.evaluate(arg, "string"))
                            except:
                                self.vars[variable].append(self.evaluate(arg, "number"))
                        break
                    # ARRAYS
                    elif method == 'remove':
                        args = self.get_args(line, j)
                        ret = 0
                        try:
                            for arg in args[0]:
                                evaluation = self.evaluate(arg, "string")
                                self.vars[variable].remove(evaluation)
                            ret = 1
                        except:
                            ret = 0

                        # if function has a return value
                        # use ret as the return value
                        self.store(line, args[1], ret)
                        break

                    # ARRAYS
                    elif method == 'clear':
                        self.vars[variable] = []
                        break
                    # ARRAYS
                    elif method == 'reverse':
                        self.store(line, self.get_args(line, j)[1], self.vars[variable][::-1])
                        break
                    # ARRAYS, STRINGS
                    elif method == 'length':
                        self.store(line, self.get_args(line, j)[1], len(self.vars[variable]))
                        break

                    # ARRAYS, STRINGS
                    elif method == 'get':
                        args = self.get_args(line, j)
                        try:
                            self.store(line, args[1], self.vars[variable][int(self.evaluate(args[0][0], 'number'))])
                        except:
                            # if variable is a dict, get the value of the key and store it
                            if isinstance(self.vars[variable], dict):
                                try:
                                    self.store(line, args[1], self.vars[variable][self.evaluate(args[0][0], 'string')])
                                except:
                                    self.store(line, args[1], None)
                        break

                    # ARRAYS, STRINGS
                    elif method == 'set':
                        args = self.get_args(line, j)
                        try:
                            self.vars[variable][int(self.evaluate(args[0][0], 'number'))] = self.evaluate(args[0][1], 'unknown')
                        except:
                            self.vars[variable][int(self.evaluate(args[0][0], 'number'))] = self.evaluate(args[0][1], 'string')
                    elif method == 'put':
                        args = self.get_args(line, j)
                        key = self.evaluate(args[0][0], 'string')
                        value = self.evaluate(args[0][1], 'unknown')
                        self.vars[variable][key] = value
                    # STRINGS
                    elif method == 'replace':
                        args = self.get_args(line, j)
                        self.store(line, args[1], self.vars[variable].replace(self.evaluate(args[0][0], 'string'), self.evaluate(args[0][1], 'string')))
                        break
                    elif method == 'each':
                        args = self.get_args (line, j)[0]
                        for i in range(1, len(args)):
                            l = args[i]
                            if l[0] =='"':
                                l = l[1:]
                            if l[-1] == '"':
                                l = l[0:len(l) - 1]
                            copy = self.vars[variable].copy()
                            for el in copy:
                                self.vars[args[0]] = el
                                try:
                                    self.interpret(self.vars[l])
                                except:
                                    self.interpret(l)
                            del self.vars[args[0]]
                    elif method == 'copy':
                        args = self.get_args (line, j)
                        self.store(line, args[1], self.vars[variable].copy())
                
                    elif variable in self.objects.keys():
                        self.get_args(line, j)
                        self.obj (line, (self.get_args(line, j), variable), method)
                        break
                            
                method += line[j]

    def get_args(self, line, j):
        argstring = ''
        instring = False
        for k in range(j + 1, len(line)):
            if line[k] == '"' and not instring:
                instring = True
            elif line[k] == '"' and instring:
                instring = False
            if not instring:
                if line[k] != ' ':
                    if line[k] == ')':
                        break
                    argstring += line[k]
            else:
                argstring += line[k]
        return argstring.split(','), k

        
    def store(self, line, k, ret):
        location = ''
        for i in range(k + 1, len(line)):
            if line[i] != ' ':
                if line[i] == '-' and line[i + 1] == '>':
                    for j in range(i + 2, len(line)):
                        if line[j] != ' ':
                            location += line[j]
                    self.vars[location] = ret
                    break
        return ret

    import re

    def findall(sub, string):
        """
        >>> text = "Allowed Hello Hollow"
        >>> tuple(findall('ll', text))
        (1, 10, 16)
        """
        index = 0 - len(sub)
        try:
            while True:
                index = string.index(sub, index + len(sub))
                yield index
        except ValueError:
            pass

    def evaluate(self, postop, type):
        new = postop
        
        if type == 'number':
            new = self.replace(new) 
            try:
                return eval(new)
            except:
                return eval('"' + new + '"')
        elif type == 'string':
            return self.string(postop)
        elif type == 'array':
            return self.array(postop)
        elif type == 'unknown':
            new = self.replace(new) 
            try:
                evaluation = eval(str(self.string(new)))
            except:
                try:
                    evaluation = self.array(self.vars[new])
                except:
                    try:
                        evaluation = self.vars[self.string(eval(new))]
                    except:
                        try:
                            evaluation = eval(new)
                        except:
                            evaluation = new
            return evaluation
                
    def replace(self, new):

        # decending required to avoid variable replacement complications with
        # substring variables
        
        decendinglength = list(self.vars.keys())
        decendinglength.sort(key=len, reverse=True)
        for var in decendinglength:
            new = new.replace(var, str(self.vars[var]))
        return new


    def string(self, string):
        strn = ''
        isv = False
        try:
            string = self.vars[string]
            isv = True
        except KeyError:
            None

        if isv and '"' not in string:
            string = '"' + string + '"'

        
        try:
            strn = eval(string);
        except:
            None
        try:
            for var in self.vars:
                strn = strn.replace("{" + var + "}", str(self.vars[var]))
                strn = strn.replace('<' + var + '>', '"' + str(var) + '"')
            for obj in self.objects.keys():
                strn = strn.replace("{" + obj + "}", str(self.objects[obj].vars) + str(self.objects[obj].methods))
            for method in self.methods.keys():
                toprint = ''
                body = self.methods[method].body
                for line in body:
                    toprint += line + '\\n'
                strn = strn.replace("{" + method + "}", toprint)
        except:
            None
        return strn

    def array(self, postop):
        array = []
        try:
            array = eval(postop)
        except:
            None
        return array

    def system(self, line, args, method):
        if method == 'print':
            for arg in args[0]:
                self.exemsg += self.evaluate(arg, 'string') + '\\n'
        if method == 'destroy':
            for arg in args[0]:
                try:
                    del self.vars[arg]
                    self.store(line, args[1], 1)
                except:
                    None
                    self.store(line, args[1], 0)
                try:
                    if arg == '__':
                        removing = []
                        for var in self.vars:
                            if var.startswith('__'):
                                removing.append(var)
                        for var in removing:
                            del self.vars[var]
                        removemethods = []
                        for var in self.methods:
                            if var.startswith('__'):
                                removemethods.append(var)
                        for var in removemethods:
                            del self.methods[var]
                except:
                    None
                try:
                    del self.methods[arg]
                    
                except:
                    None
                try:
                    del self.objects[arg]
                except:
                    None
        if method == 'verify':
            k = args[1]
            args = args[0]
            for arg in args:
                self.interpret (self.string(arg) + "=" + self.vars[eval(arg)])
        if method == 'throw':
            self.throw(args[0][0])
        if method == 'input':
            ip = input(self.evaluate(args[0][0], 'string'))
            try:
                self.store(line, args[1], eval(ip))
            except:
                self.store(line, args[1], ip)

    def local(self, line, args, method):
        self.methods[method].run(args[0])
        try:
            self.store(line, args[1], self.vars[self.methods[method].returns[0]])
        except:
            self.vars[self.methods[method].returns[0]] = None
            self.store(line, args[1], self.vars[self.methods[method].returns[0]])

    def bool(self, line, args, method):
        expressions = []
        if method == 'eval':
            expression = args[0][0]
            try:
                self.store(line, args[1], self.boolean(self.vars[expression]))
            except:    
                self.store(line, args[1], self.boolean(expression))
            return
        if method == 'and':
            for arg in args[0]:
                try:
                    expressions.append(eval(str(arg)))
                except:
                    expressions.append(self.vars[arg])
            for exp in expressions:
                if exp == False:
                    self.store(line, args[1], False)
                    return
        if method == 'or':
            for arg in args[0]:
                try:
                    expressions.append(eval(str(arg)))
                except:
                    expressions.append(self.vars[arg])
            for exp in expressions:
                if exp == True:
                    self.store(line, args[1], True)
                    return
            self.store(line, args[1], False)
            return
        if method == 'not':
            arg = args[0][0]
            try:
                self.store(line, args[1], not eval(str(arg)))
            except:
                self.store(line, args[1], not self.vars[arg])
            return

        self.store(line, args[1], True)

    def obj(self, line, args, method):
        if method == 'new':
            objname = self.evaluate(args[0][0], "string")
            self.objects[objname] = self.Obj(objname, self)
        elif method == 'setattr':
            dupset = args[0][0]
            objname = str(args[1])
            self.objects[objname].setat(self.evaluate(dupset[0], 'string'), self.evaluate(dupset[1], 'unknown'))
        elif method == 'getattr':
            dupset = args[0][0]
            objname = str(args[1])
            k = args[0][1]
            self.store(line, k, self.objects[objname].getat(self.evaluate(dupset[0], 'string')))
        elif method == 'has':
            objname = args[1]
            methodname = self.evaluate(args[0][0][0], "string")
            self.objects[objname].add_method(methodname, self.methods[methodname])
        elif method in self.objects[args[1]].methods:
            k = args[0][1]
            objname = args[1]
            ret = self.objects[objname].run_method(method, args[0][0])
            self.store(line, k, ret)


    class Obj:
        def __init__(self, name, interpreter):
            self.name = name
            self.vars = {}
            self.objects = {}
            self.methods = {}
            self.supertype = None
            self.interpreter = interpreter
        
        def setat(self, name, value):
            self.vars[name] = value
        
        def getat(self, name):
            return self.vars[name]

        def add_method(self, name, method):
            self.methods[name] = method

        def get_method(self, name):
            return self.methods[name]

        def run_method(self, name, args):            
            self.methods[name].run(args)
            try:
                return self.interpreter.vars[self.methods[name].returns[0]]
            except:
                return None

    class Method:
        def __init__(self, name, interpreter):
            self.name = name
            self.args = []
            self.body = []
            self.returns = []
            self.ended = False
            self.interpreter = interpreter

        def add_arg(self, arg):
            self.args.append(arg)

        def add_body(self, body):
            self.body.append(body)

        def add_return(self, ret):
            self.returns.append(ret)

        def update_interpreter(self, interpreter):
            self.interpreter = interpreter

        def run(self, args):
            for i in range(len(self.args)):
                try:
                    self.interpreter.vars[self.args[i]] = self.interpreter.vars[args[i]]
                except:
                    try: 
                        self.interpreter.vars[self.args[i]] = self.interpreter.evaluate(args[i], 'string')
                    except:
                        self.interpreter.vars[self.args[i]] = self.interpreter.evaluate(args[i], 'string')
            for line in self.body:
                self.interpreter.interpret(line)`



export default SourceCode;