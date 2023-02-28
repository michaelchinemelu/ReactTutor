import React from 'react';

const ConditionalRendering = (props) => {
    if (props.isLoggedIn){
        return(
            <div>
            Welcome Michael!
            </div>
        )
        
    } else{
        return(
            <div>
            Welcome Guest
        </div>
        )
        
    }
}
export default ConditionalRendering;