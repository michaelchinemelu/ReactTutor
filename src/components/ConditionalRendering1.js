import React, {Component} from 'react'

class ConditionalRendering1 extends Component{ 
     constructor(props){
            super(props)
            this.state = {
                message: true,
            }
        }
    render(){
        {/* Using if-Else conditional Rendering */}

        // if(this.state.message){
        //     return(
        //         <div>
        //             Hello Michael from class component
        //         </div>
        //     )
        // } else{
        //     return(
        //         <div>
        //         Hello Guest from class component
        //     </div>
        //     )
            
        //  } 

        {/* Using Element Variables in React */}
        // let messager
        // if(this.state.message){
        //     messager = <div>Welcome Michael</div>
        // } else{
        //     messager = <div>Welcome Guest</div>
        // }
        // return(
        //     <div>
        //         {messager} you are good!
        //     </div>
        // )
        return(
            <div>
            {this.state.message ?
            <div>Welcome Michael</div> :
            <div>Welcome Guest</div>}
            <h5>This is another beggining of the war against Nigeria corruption</h5>
            </div>
        )
            {/* Tenary Operator Approach on Element Conditioning */}
            
        {/* Short Circuit Operator, specific type of Tenary Operator */}
            // return (
            //     <div>
            //     {this.state.message && <div><h1>Welcome Michaelo</h1></div>}

            //     <h2> Yes am HEre for you Michael said the lord!</h2>
            //     </div>
            //     )
    }
}
export default ConditionalRendering1;