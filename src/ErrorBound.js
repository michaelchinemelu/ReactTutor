import React, { Component } from 'react'
import Hero from './Hero';

class ErrorBound extends Component {
     constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
     }

     static getDerivedStateFromError(error) {
        return {
            hasError: true 
            // This state property is then used to create a fallback UI in React
        }
     }
  render() {
   if(this.state.hasError){
    return <h3>Idiot entered here, not among</h3>
   }
  }
}
export default ErrorBound;