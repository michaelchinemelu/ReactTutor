import React, {Component} from 'react' 
import ChildMethodProp from './ChildMethodProp';


class ParentMethodProp extends Component {
   constructor(){
    super()
    this.state = {
        message: "KILI MANGERO"
    }
    this.GreetHandler = this.GreetHandler.bind(this);
   }

   GreetHandler(ChildName) {
    message: alert(`Hello ${this.state.message} from ${ChildName}`) 
    console.log(this.state.message)
   }
    render() {
        return(
            <div>
                <h1>Hello Michael am the Parent class</h1>
                <h2><ChildMethodProp name={this.GreetHandler} /></h2>
                <p>{this.state.message}</p>
                <button onClick={this.GreetHandler}>Try Click</button>
            </div>
        )
    }
}

export default ParentMethodProp;