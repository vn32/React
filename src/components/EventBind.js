import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        this.ClickHandler=this.ClickHandler.bind(this)//mainly used this method 

    }
    //using arraow function
    // ClickHandler = () => {
    //     this.setState({
    //         message:"Goodbye!"
    //     })

    // }
    ClickHandler(){
        this.setState({
            message:"Goodbye!"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {<button onClick={this.ClickHandler}>Click</button>}
                

                
            </div>
        )
    }
}

export default EventBind
