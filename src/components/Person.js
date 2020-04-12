import React from 'react'

function Person({p}) {
    return (
        <div>
        <h2>
        I am {p.name}.I am {p.age} and I have {p.skill}.
        </h2>
        </div>
    )
}

export default Person
