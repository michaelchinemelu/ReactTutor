import React from 'react';


const withCounter = (WrappedComponent, incrementNum) => {
    class WithCounter extends React.Component{
        constructor(props){
            super()
            this.state = {
                count: 0
            }
        }

        increment = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNum}
            })
        }
        render(){
            console.log("From HOC", this.props.name)
            return(
                <WrappedComponent count = {this.state.count}
                 incrementCount={this.increment}
                 {... this.props} />
            )
        }
    }
    return WithCounter;
}

export default withCounter