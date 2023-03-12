import React, {Component} from 'react' 


class Users extends Component{
    render(){
        return(
            <di>
                <h2>Hello my {this.props.render(true)}</h2>
            </di>
        )
    }
}
export default Users;