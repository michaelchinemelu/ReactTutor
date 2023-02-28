import React from 'react' 

const FuncMemo = (props) => {
    console.log("This is the function memo")
    return(
        <div>
            <h4>
                Hello {props.names} From Function Memo
            </h4>
        </div>
    )
}
export default React.memo(FuncMemo);