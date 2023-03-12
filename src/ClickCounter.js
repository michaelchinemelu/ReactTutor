import React, {Component} from 'react' 
import withCounter from './components/WithCounter';


class ClickCounter extends Component{
    render(){
        console.log(this.props.name)
        const {count, incrementCount} = this.props
        return(
            <div>
                <h2>
                    Hello World {this.props.name} coming From this component 
                </h2>
                <p><button onClick={incrementCount}>Click {count} Times</button></p>
                <h3>{count}</h3>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 3); 