import React,{Component} from 'react'


class Message extends Component{
    constructor() {
        super()
        this.state = {
            message: 'Welcome The strongest man on Earth'
        }
    }
    messageOnClick() {
        this.setState({
            message: "Thank you for Subscribing to our site"            
       })
    }
    render() {
        return(
            <div>{this.state.message}
            <p><button onClick={() => this.messageOnClick()}>Subscribe</button></p>
            </div>
        )
    }
}

export default Message;