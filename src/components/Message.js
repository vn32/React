import React, { Component } from 'react'
class Message extends Component {
    constructor(){
        super()//calls the base class
        this.state={//state is the reserved keyword that understand by class 
            message:'Welcome visitor'
            // msg:'check'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscribng'
        }) 
            
        
    }
    render() {
    return (
    <div>
        <h1>{this.state.message}</h1>
        {/* <h1>{this.state.msg}</h1> */}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
    </div>
    );
    }
}
export default Message;