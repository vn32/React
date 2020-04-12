import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
    {
        id:1,
        name:"Bruce",
        age:30,
        skill:"React"
    },
    {
        id:2,
        name:"Diana",
        age:33,
        skill:"Angular"
    },
    {
        id:3,
        name:"Clark",
        age:27,
        skill:"Veu"
    }
]
    const personList=persons.map(person => (
        <Person p={person}></Person>
    ))
    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList
