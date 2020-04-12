import React, { Component } from 'react'

class Multiply extends Component {
    //rconst 
    constructor(props) {
        super(props)
    
        this.state = {//an object
             count:1
        }
    }
    increment(){
        // without using setstate method the value of count will not render/update on ui
        //without using setstate method console value is only incremented not on ui
        // this.setState({
        //     count:this.state.count+1

        // },

        // () =>{
        //     console.log('Callback value',this.state.count)//console value one less than ui value
        // }
        // )
//using arrow function as argument
        this.setState(prevState =>({
            count:prevState.count*5
        })

        )
        //this will print the synchronous value,one less than conut value 
        console.log(this.state.count)    
    }
    // incrementfive(){
    //     //in one updtae it will only use one updated value,to overcome this use prevState as arrow fuction than updating the current state
    //     this.increment();
    //     this.increment();
    //     this.increment();
    //     this.increment();
    //     this.increment();

    // }
    
    
    render() {
        return (
            <div>
                <div>count-{this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Multiply
