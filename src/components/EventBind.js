import React, { Component } from 'react' 


class EventBind extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Hello World"
        }
        this.Message = this.Message.bind(this)
    }

    Message() {
        this.setState({
            message: "You Click me Mike"
        })
    }
    render() {
        return(
            
            <div>
                <h2>{this.state.message}</h2> <button onClick={this.Message}>click</button>
            </div>
        )
    }
}

export default EventBind;