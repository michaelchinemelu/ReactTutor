import React, { Component } from 'react'


class HovercounterTwo extends Component{
    render(){
        const {count, incrementCount} = this.props
        return(
            <div>
                <h2 onMouseOver={incrementCount}> Hovered {count} times just now with ur mouse</h2>
            </div>
        )
    }
}
export default HovercounterTwo