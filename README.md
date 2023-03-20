# Full Stack Interview Questions (MERN + Golang)
### Q. What is ECMAScript?
ECMAScript is basically a standardized version of JavaScript. This is what is supported by all the browsers.
### Q. What is hoisting?
Hoisting is a concept in ECMAScript due to which variables are available to use even before they are initialized. This happens because the interpreter moves the variable declaration to the top of the scope while compiling a JS program. 
### Q. Difference between 'let', 'const' and 'var' in javascript?
There is a difference in scoping of 'let' and 'var' variables. let variables are block scoped and var variables are function scoped. 
A for loop with iterator declared by var is as follows:

`for(var i = 0; i < 10; i++)`

In this case, the iterator 'i' can be accessed even outside the for block. However, if the same iterator is declared using 'let' keyword, the variable scope will limit to for loop and it will not be accessible outside for loop.
Other difference between 'let' and 'var' is the way they are hoisted. Let variables stay in a TDZ (Temporary Dead Zone) state before they are initialized. If you use a 'let' declared variable before initializing, you will get an uninitialized variable error. In case of a 'var' declared variable, you can access the value of the variable (which will be undefined) before initializing the variable. 
'Const' variables are similar to 'let' variables. The only added difference is 'const' variables can be initialized only once and their value cannot be changed.
### Q. What is 'concurrency' in distributed systems?
*Unanswered. Please contribute*
### Q. Why did you shifted from Node JS to Golang (Advantages of Golang over Node JS)?
Golang is faster than Node JS,  and it also requires less CPU and memory to do the same task as compared to Node JS. 
Golang is more efficient when it comes to concurrency since golang uses goroutines which is basically a light weight execution thread. When it comes to Node JS, it uses event based callbacks which is less efficient compared to golang.
### Q. In CSS, what are the different values for 'position' property?
1. Static: Positioned according to the normal flow of the page
2. Relative: Relative to siblings
3. Absolute: Fixed to parent
4. Fixed: Fixed to viewport
5. Sticky: Fixed to scroll position
### Q. Design a schema for... Users, Payment Gateways, Orders...
### Q. Create a bucket for GCS, upload a file, create a pre-signed URL, make the file private?
### Q. What are Hooks in React?
### Q. What are Higher Order Components in React?
### Q. Demonstrate the use of Goroutine?
### Q. What are the advantages of Next JS over React?
### Q. What is server side rendering? 
### Q. Explain Scope in Javascript?
### Q. What frameworks have you used in Node JS?
### Q. What component libraries have you used in React?
