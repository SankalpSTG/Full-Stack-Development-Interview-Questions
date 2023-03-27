# Full Stack Interview Questions (MERN + Golang)
Following are the questions for Full Stack Development. These are all of the questions that I have been asked in my interviews. Also the dumbest questions are filtered out and hence these are the most practical questions a really good hiring manager might ask. The tech stack for these questions is MongoDB, SQL, Postgres, Express JS, Nest JS, GraphQL, React JS, Next JS, Node Js, Javascript, Typescript, Golang, and Docker with Google Cloud Platform (GCP) services such as Cloud Spanner, Cloud Run, GKE, App Engine, Compute Engine, Cloud SQL, Cloud Storage, Cloud Hosting, etc.

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
**Note**: For some, this might be a stupid question. However if some interviewer is asking you such question, she / he is simply checking if you know basics of CSS. This is because, there exists no front end developer who has never used the 'position' property. 
1. Static: Positioned according to the normal flow of the page
2. Relative: Relative to siblings
3. Absolute: Fixed to parent
4. Fixed: Fixed to viewport
5. Sticky: Fixed to scroll position
### Q7. Design a schema for... Users, Payment Gateways, Orders...
Scenario based question for DB Schema creation.

Gather all the requirements / data points from interviewer and create a schema.
### Q8. Create a bucket for GCS, upload a file, create a pre-signed URL, prevent bucket access.?
Follow this to create bucket: https://cloud.google.com/storage/docs/creating-buckets

To upload a file, we can drag and drop the file in the GCS bucket directly. Or we can upload through code as well. Check this: https://cloud.google.com/storage/docs/samples/storage-upload-file

Follow this to create signed urls: https://cloud.google.com/storage/docs/access-control/signing-urls-with-helpers#storage-signed-url-object-nodejs

Follow this to prevent public access to GCS bucket: https://cloud.google.com/storage/docs/public-access-prevention
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
A higher order component is a function which takes a react component as input and returns another component or the same component with added parameters / functionalities.

Examples of it are Redux's `connect` or Relay's `createFragmentContainer`

HOCs are useful if you want to change props of a component and add more data to props or extract same logic of multiple components and put into one place. For more information please read: https://legacy.reactjs.org/docs/higher-order-components.html
### Q11. Demonstrate the use of Goroutine?
A goroutine is a light weight thread of execution. It enables us to run any code asynchronously. Following is the code.
```
package main
import (
    "fmt"
    "time"
)
func f(from string) {
    for i := 0; i < 3; i++ {
        fmt.Println(from, ":", i)
    }
}
func main() {
    f("direct")
    go f("goroutine")
    go func(msg string) {
        fmt.Println(msg)
    }("going")
    time.Sleep(time.Second)
    fmt.Println("done")
}
```
Output
```
go run goroutines.go
direct : 0
direct : 1
direct : 2
goroutine : 0
going
goroutine : 1
goroutine : 2
done
```

Using `go` keyword, we can execute any function asynchronously. We can also run an anonymous function as follows.

```
go func (msg){
    fmt.Println(msg)
}("Hello World")
```
### Q12. What are the advantages of Next JS over React?
There are no such advantages of using Next JS over React but Next JS has some more features that can be useful and hence Next JS is called as *react for production*
1. Next JS generates html code which is more readable for search engines whereas React generates obfuscated javascript code by default.
2. Next JS has added feature called Server Side Rendering.
3. Next JS has file based routing where as React Router is not even part of React library.
4. Using Next JS, we can write both front end as well as backend code in Node JS.
### Q13. What is server side rendering in Next JS? 
In traditional front-end frameworks, the server sends the application to the client, and then the application runs in the browser and does data fetching.

In Next JS, we have a feature called Server Side Rendering, which can be used generate a page dynamically in backend itself and then send it to client. SSR can help pages to fetch data at the backend itself. 

For SSR, we have a method `getServerSideProps` using which we can do data fetching at server side. This data can then be appended to the props of the page which will receive the data.

```
export async function getServerSideProps() {
   // Your code
   const data = .... ;
   
   // Passing data to the Page using props
   return {
       props : {data}
   }
}
```
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
### Q19. What is CORS?
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. Normally the browser doesn't allow sending request to a server from a domain other than the server domain.

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

In this case, if domain-a is not allowed by domain-b, this will result into CORS error.
### Q20. What is pre-flight request?
CORS makes the use of pre-flight request before the actual request is being made to check if the current domain is allowed by the server. 

In the pre-flight request, the browser sends the headers indicating the http method and headers that will be sent in actual requests to the server. 

### Q21. What are closures in Javascript?
Closure is a phenomenon with javascript functions due to which, any function always has access to the variable environment of the execution context in which the function was created even after that execution context is gone.
```
const secureBooking = function(){
	let passengerCount = 0
	return function(){
		passengerCount += 1
		console.log(`Passenger Count = ${passengerCount}`)
	}
}
const booker = secureBooking()
booker() // Passenger Count = 1
booker() // Passenger Count = 2
booker() // Passenger Count = 3
```
In the above function 'secureBooking', the variable 'passengerCount' is declared and there is a nested function which is being returned. This is the function that is using 'passengerCount' variable declared in 'secureBooking'. Now the returned function is saved in 'booker' variable.

If you understand about call stack and scope chaining, after the 'secureBooking' function is done executing, the execution context will be popped out of the call stack, and the scope is also gone.

Hence after calling the booker() function, it should result into error as 'passengerCount' is declared in an execution context which is already gone (i.e. 'secureBooking' function).

But using 'passengerCount' doesn't throw error due to the first statement mentioned; **Any function always has access to the variable environment of the execution context in which the function was created even after that execution context is gone.**

Hence, the 'booker' function will always have access to 'passengerCount' variable both the function as well as the variable were created in 'secureBooking' function execution context.

### Q22. What are all the ORMs that you have used?
1. Mongoose
2. Sequelize
3. Typeorm

### Q23. What is Agile Software Development?
Agile in software development environment basically is divided into following steps:
1. Requirements Collection
2. Requirements Analysis
3. Development
4. Testing / Quality Assurance
5. Deployment
6. Maintenance & Feedback.

However Agile in a broader world is an umbrella term which not only describes software development, nor the frameworks but it describes everything collectively. It focuses more on how the team communicates and approaches a change or a problem.

Agile is basically the ability to create and react to changes. Changes could be anything, the team or the entire codebase.

### Q24. What are the advantages of microservices over monolith?
1. In case of monolith, the whole application is bundled into one code base, whereas for microservices, we divide the applications into smaller services.
2. In case of monolith, if one api or one component receives a very high number of requests, the whole app needs to be scaled up. In case of microservices, only one service will be scaled up.
3. In monolith, chances are very high that the code becomes messy. In microservices, we define good separation of concerns between all services.
4. Scaling a monolith application is costly whereas scaling a service is cost effective.
5. Scaling a monolith is resourse intensive whereas scaling a service is less resource consuming.

### Q25. What are Message Queues?
Message Queues are a way for microservices to communicate with each other.
Examples are:
1. AWS SQS
2. Apache Kafka
3. Rabbit MQ
4. Google Pub Sub

### Q26. What is Push and Pull Mechanism in RabbitMQ?
In push style mechanism, a consumer registers to the queue. When the broker pushes a message, the consumer receives it and has to acknowledge with a positive, negative or rejecting acknowledgement. The message is not removed from the queue until some kind of acknowledgement is received.

In pull mechanism, the consumer polls the queue for new messages. This is an expensive operation as the consumer continuously checks for new messages.

### Q27. What is difference between Standard and FIFO queues in SQS?
In standard queue, messages are ordered by best effort ordering.

In FIFO Queues, messages preserve their order. This avoids duplication as well.

Standard queues are best suited for scenarios such as sending email notifications. Here order is not important.

FIFO queues are best suited for scenarios such as processing banking transactions. Here order of transactions is important.

### Q28. What are disadvantages of using SQS?
1. Not real time.
2. Messages have no gurantee to be delivered.

### Q29. Describe a previous usecase of caching(previous organization usecase)?
When client requests for a data which does not exists on server itself, the server requests it from the data source and sends it to the user.

The same data is again cached at the server with a expiry.

If the client request the same data again, if the cached data is available at the server, it is sent back to the client. 

If the cached data is not avaibale, the data is refetched from data source and sent to client as well as cached at server.

Since we were dealing with multiple third party service providers, we had to use this mechanism to decrease the response time as well as the cost of third party services.

### Q30. How to implement foreign id concept in MongoDB?
Follow these articles: 
1. https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design
2. https://www.mongodb.com/docs/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/

### Q31. Promises vs Async Await?
Async Await is simply a syntactic sugar for promises.

Syntax for async await is as follows
```
async function doSomething(){
    //Does something async
}

//Will not work in global context. Just an example.
await doSomething()

function doSomethingNew(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World")
        }, 1500)
    })
}

//Will not work in global context. Just an example.
const message = await doSomethingNew()
console.log(message)
```
Syntax for Promises is as follows
```
function doSomethingNew(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(number % 2 === 0){
                resolve("Even")
            }else{
                reject("Odd")
            }
        }, 1500)
    })
}

doSomethingNew().then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
})
```

### Q32. What are the cache filling strategies?
1. Eager Cache: App loads data from cache only. If data is missing, a background service will handle data miss by updating data from data source to cache
2. Lazy Cache: App loads data from cache. In case of cache miss, app loads data from a second source, typically a database.
Follow this page for more information: https://levelup.gitconnected.com/the-art-of-caching-for-backend-applications-38350f95def6

### Q33. What is Virtual DOM in React?
DOM stands for Document Object Model. The HTML DOM are constructed as a tree of objects. Javascript uses this Object Model to create dynamic HTML.

Virtual DOM is something that is used by libraries on top of Javascript such as React.
It is a virtual representation of the UI kept in the memory and is synced with the real DOM by a library such as ReactDOM.

This helps React provide us with a declarative API that adds a layer of abstraction on how things are updated on the UI, with other things such as Event Handling, Attribute Manipulation and Manual DOM Updating.

DOM is updated by running a Diffing algorithm which identifies what has changed in Virtual DOM, and only those parts are then updated.

### Q34. What are call(), bind() and apply() methods in javascript?
*Unanswered. Please contribute*
### Q35. What are prototype functions in javascript?
*Unanswered. Please contribute*
### Q36. What are the drawbacks of arrow function over normal function in javascript?
*Unanswered. Please contribute*
### Q37. Write code to achieve inheritance using function prototypes in javascript?
*Unanswered. Please contribute*
### Q18. What is virtual DOM in React? Which algorithm is used to update the real dom? What is reconciliation?
*Unanswered. Please contribute*
### Q19. How many virtual DOM are used by React?
*Unanswered. Please contribute*