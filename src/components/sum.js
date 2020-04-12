import React, { Component } from 'react'

class Sum extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             c:0
        }
    }
    summation(){
        // this.setState(prevState => ({
        //     c : prevState.c + 9
        // }))
        // console.log(this.state.c)
        this.setState({
            c:this.state.c+9
        })
    }
    
    render() {
        return (
            <div>
                <div>sum-{this.state.c}</div>
                <button onClick={ () => this.summation()}>Sumation</button>
            </div>
        )
    }
}

export default Sum
