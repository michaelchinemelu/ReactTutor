import React from 'react' 


const FrINput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}) 
export default FrINput;