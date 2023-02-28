import React, {Component} from 'react' 


class RegularComp extends Component{
    render(){
        // console.log("This is the Regular component")
        return(
            <div>
                <h3>This is the regular component speaking to {this.props.names}</h3>
            </div>
        )
    }
}
export default RegularComp;