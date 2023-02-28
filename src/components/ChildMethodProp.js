import React from 'react' 


const ChildMethodProp = (props) => {
    return(
        <div>
            Hello Michael am the Child method props
            <button onClick={() => props.name("Michael")}>RED</button>
        </div>
    )
}
export default ChildMethodProp;