import React, {Component} from 'react' 
import FrINput from './FRInput';


class FrParentInput extends Component{
    constructor(props){
        super(props)
        this.FrInput = React.createRef()
    }
    handleClick = () => {
        this.FrInput.current.focus()
    }
    render(){
        return(
            <div>
                <h1>
                    This is the Parent Forward Input js in React;
                </h1>
                <FrINput ref={this.FrInput}/>
                <button onClick={this.handleClick}>Focus input</button>
            </div>
        )
    }
}

export default FrParentInput;