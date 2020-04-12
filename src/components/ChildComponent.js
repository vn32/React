import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/*<button onClick={props.greetHandler('child')}>Child handler</button> to pass parameter use arrow function*/}
            <button onClick={()=>props.greetHandler('child')}>Child handler</button>
        </div>
    )
}

export default ChildComponent
