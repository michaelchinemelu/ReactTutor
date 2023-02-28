import React, {Component} from 'react'


class LifeCycleB extends Component{
    //First Life Cycle Method => the constructor
    constructor(props){
        super(props)
        this.state = {
            name: "Michael"
        }
        console.log("LifeCycleB constructor")
    }

    static getDerivedStateFromProps(props, state){
            console.log("LifeCycleB getDerivedStateFromProps")
            return null;
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleB; getSnapShotBeforeUpdate')
        return null               
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
    componentDidMount(){
        console.log("LifecycleB, ComponentDidMount")
        return null;
    }
    render(){
        console.log("LifecycleB form Render method")
        return(
            <div>
            <h2>Hello from LifeCycle Method B</h2>
        </div>
        )
    }
}
export default LifeCycleB;