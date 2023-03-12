import React from 'react'


const Hero = (props) => {
    if(props.name === "tinubu"){
        throw new Error("Idiot enterd here " + props.name + " is not a Hero!")
    }
    return(
        <div>
            {props.name}
        </div>
    )
}
export default Hero;