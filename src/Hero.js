import React from 'react'


const Hero = (props) => {
    if(props.name === "tinubu"){
        throw new Error("Idiot entered here")
    }
    return(
        <div>
            {props.name}
        </div>
    )
}
export default Hero;