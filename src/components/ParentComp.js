import React, {Component} from 'react' 
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import FuncMemo from './FuncMemo'


class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Michael"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Michaello"
            })
        }, 2000)
    }
    render(){
        // console.log("*********** Parent Component *************")
        return(
            <div>
                <h1>This is the Parent Component</h1>
                <RegularComp names={this.state.name} />
                <PureComp names={this.state.name} />
                <FuncMemo names={this.state.name} />
            </div>
        )
    }
}
export default ParentComp;