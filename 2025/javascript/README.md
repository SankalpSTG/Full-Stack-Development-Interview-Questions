# Javascript Interview Questions

#### Q. difference between == vs ===

==  is type converting equality comparison (converts type before checking equality)

=== is strict equality comparison (type has to be equal or equality becomes false)

Examples:
```javascript
0 == false             //true
0 === false            //false
"0" == false           //true
"0" === false          //false

1 == "1"               //true
1 === "1"              //false

null == undefined      //true
null === undefined     //false

NaN == NaN             //false
NaN === NaN            //false

[] == []               //false since both refer to different objects in memory and memory address are compared
[] === []              //false since both refer to different objects in memory and memory address are compared
{} == {}               //false since both refer to different objects in memory and memory address are compared
{} === {}              //false since both refer to different objects in memory and memory address are compared
```
