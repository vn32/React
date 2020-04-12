import React, { Component } from 'react'

export class ClassClick extends Component {
    ClickHandler1(){
        console.log('class handler clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.ClickHandler1}>Click</button>
            </div>
        )
    }
}

export default ClassClick
