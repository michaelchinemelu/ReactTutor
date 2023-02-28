import React, {Component} from 'react'


class Count extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    countIncrease() {
     //  this.setState({
     //       count: this.state.count + 1
    //    }, ()=> { // Callback function
    //      console.log("Callback value: ", this.state.count)
    //  })
        // This is wrong... 
    //    console.log(this.state.count)

    this.setState(prevState => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count)
    }

    incrementFive() {
        this.countIncrease()
        this.countIncrease()
    }

    render() {
        return(
            <div>
                <h3>Count: <strong>{this.state.count}</strong></h3>
                <button onClick={() => this.incrementFive()}>Increase</button>
            </div>
        )
    }
}

export default Count; 