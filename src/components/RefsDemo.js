import React, {Component} from 'react';

class RefsDemo extends Component{
    constructor(){
        super()
        // This is the current React.createRef() method, mostly used in React
        this.inputRef = React.createRef()
        // Using a Callback Refs in React// Old Method
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler(){
        alert(`${this.inputRef.current.value} You are Welcome` )
    }
    render(){
        return(
            <div>
                <h2>
                    Michael thanks you are here!
                    <p><input type='text' ref={this.inputRef}></input> 
                    {/* Refs cannot be attatched to a functional component */}
                    <input type='text' ref={this.setCbRef}></input></p>
                    <button type="submit" onClick={this.clickHandler.bind(this)}>Click</button>
                </h2>
            </div>
        )
    }
}
export default RefsDemo;