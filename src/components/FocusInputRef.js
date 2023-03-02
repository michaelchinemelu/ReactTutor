import React, {Component} from 'react';
import InputRef from './InputRef';


class FocusInputRef extends Component{
    constructor(props){
        super(props)
        this.refCreate = React.createRef()
    }
    
    handleClick = () => {
        this.refCreate.current.focusInput()
    }
    render() {
        return(
            <div>
                <InputRef  ref={this.refCreate}/>
                <button onClick={this.handleClick}>Focus Input</button>
            </div>
            
        )
    }
}
export default FocusInputRef;