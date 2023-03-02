import React, {PureComponent} from 'react'


class PureComp extends PureComponent{
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: "Michael"
            })
         }, 2000)
    }
    render(){
        // console.log("This is the PureComponent ")''
        return(
            <div>
                <h3>This is the Pure Component talking to {this.props.names}</h3>
            </div>
        )
    }
}
export default PureComp;