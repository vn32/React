import React, { Component } from 'react'

export class ConditionalStatement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Vikas</div>
        // }
        // else {
        //     return <div>Welcome Nishad</div>
        // }
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome variable</div>
        // } else {
        //     message=<div>Welcome variable in javascript</div>
        // }
        // return (
        //     message
        // )
        return(
            this.state.isLoggedIn ? <div>Hello Ternary </div>
             : <div>hello Tern</div>
            )
        
      
    }
}

export default ConditionalStatement
