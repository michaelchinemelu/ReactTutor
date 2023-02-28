import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'


class LifeCycleA extends Component{
    //First Life Cycle Method => the constructor
    constructor(props){
        super(props)
        this.state = {
            name: "Michael"
        }
        console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state){
            console.log("LifeCycleA getDerivedStateFromProps")
            return null;
    }

    componentDidMount(){
        console.log("LifecycleA, ComponentDidMount")
        return null;
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA; getSnapShotBeforeUpdate')
        return null              
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'CodeEvolution'
        })
    }
    render(){
        console.log("LifecycleA form Render method")
        return(
            <div>
            <h2>Hello from LifeCycle Method A</h2>
            <LifeCycleB />
            <button onClick={this.changeState} >Change State</button>
        </div>
        )
    }
}
export default LifeCycleA;