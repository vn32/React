import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ParentName:"Parent"
             
        }
        this.ParentHandler=this.ParentHandler.bind(this)
    }
    ParentHandler(ChildName){
        alert(`Hello ${this.state.ParentName} from ${ChildName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.ParentHandler}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
