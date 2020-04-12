import React from 'react';

// function Greet() {
//     return <h1>Hello Duniya</h1>

// }
const Greet= (props) =>{
return (
    <div>
        {/* props.name="Trying to change the value of props will give error" */}
        <h1>hello {props.name}</h1>
        {/* to access the p tag in Greet */}
        {props.children} 

    </div>
);
}
export default Greet; { /* // export const Greet = () => < h1 > Hello world < /h1> */ }
// props are used to access the values of attributes