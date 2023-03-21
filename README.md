# Full Stack Interview Questions (MERN + Golang)
### Q1. What is ECMAScript?
ECMAScript is basically a standardized version of JavaScript. This is what is supported by all the browsers.
### Q2. What is hoisting?
Hoisting is a concept in ECMAScript due to which variables are available to use even before they are initialized. This happens because the interpreter moves the variable declaration to the top of the scope while compiling a JS program. 
### Q3. Difference between 'let', 'const' and 'var' in javascript?
There is a difference in scoping of 'let' and 'var' variables. let variables are block scoped and var variables are function scoped. 

A for loop with iterator declared by var is as follows:

`for(var i = 0; i < 10; i++)`

In this case, the iterator 'i' can be accessed even outside the for block. However, if the same iterator is declared using 'let' keyword, the variable scope will limit to for loop and it will not be accessible outside for loop.

Other difference between 'let' and 'var' is the way they are hoisted. Let variables stay in a TDZ (Temporary Dead Zone) state before they are initialized. If you use a 'let' declared variable before initializing, you will get an uninitialized variable error. In case of a 'var' declared variable, you can access the value of the variable (which will be undefined) before initializing the variable. 

'Const' variables are similar to 'let' variables. The only added difference is 'const' variables can be initialized only once and their value cannot be changed.
### Q4. What is 'concurrency' in distributed systems?
*Unanswered. Please contribute*
### Q5. Why did you shifted from Node JS to Golang (Advantages of Golang over Node JS)?
Golang is faster than Node JS,  and it also requires less CPU and memory to do the same task as compared to Node JS. 

Golang is more efficient when it comes to concurrency since golang uses goroutines which is basically a light weight execution thread. When it comes to Node JS, it uses event based callbacks which is less efficient compared to golang.
### Q6. In CSS, what are the different values for 'position' property?
1. Static: Positioned according to the normal flow of the page
2. Relative: Relative to siblings
3. Absolute: Fixed to parent
4. Fixed: Fixed to viewport
5. Sticky: Fixed to scroll position
### Q7. Design a schema for... Users, Payment Gateways, Orders...
### Q8. Create a bucket for GCS, upload a file, create a pre-signed URL, make the file private?
### Q9. What are Hooks in React?
Hooks allow users to have access to features of React such as having state in a functional component or causing side effects. This is basically for functional components.

Following are the hooks in React:
1. useState
2. useEffect
3. useContext
4. useReducer
5. useRef
6. useMemo
7. useCallback
### Q10. What are Higher Order Components in React?
*Unanswered. Please contribute*
### Q11. Demonstrate the use of Goroutine?
*Unanswered. Please contribute*
### Q12. What are the advantages of Next JS over React?
*Unanswered. Please contribute*
### Q13. What is server side rendering? 
*Unanswered. Please contribute*
### Q14. Explain Scope in Javascript?
Scope is a place or environment where a variable is declared. 

Scope of a variable is an entire region in the code where that variable can be accessed.

Scoping tells us how our variables in program are organized and accessed.

In JS, we have something called Lexical Scoping. In LS, Scoping is controlled by the functions and blocks of code.

There are three types of scope. Global scope, Function scope and Block scope.

Variables declared at the global level have global scope, i.e. those variables can be accessed globally.

Variables declared inside a function can be accessed in that function only.

Variables declared inside a block, for example in a for loop, depending on the way they are declared (i.e. using let or var or const), those variables will be accessible in the loop only or in the entire function.

For nested scopes, the order in which the functions are called does not affect the scope chain.

### Q15. What frameworks have you used in Node JS?
1. Express JS
2. Nest JS
### Q16. What component libraries have you used in React?
1. React Bootstrap
2. Ant Design
### Q17. Design a simple form which will have name, email and password as input. Send the form data to a URL and display the response. Create a retry mechanism for making requests if the same fails or use asyncjs to retry.
*Please check folder 'Q17'*
### Q18. Make a get request to a URL and save the response in a file. Create a retry mechanism if the same fails or use asyncjs to retry.
*Please check folder 'Q18'*
### Q. What is CORS
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. Normally the browser doesn't allow sending request to a server from a domain other than the server domain.

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

In this case, if domain-a is not allowed by domain-b, this will result into CORS error.
### Q. What is pre-flight request
CORS makes the use of pre-flight request before the actual request is being made to check if the current domain is allowed by the server. 

In the pre-flight request, the browser sends the headers indicating the http method and headers that will be sent in actual requests to the server. 
