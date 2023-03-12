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
     componentDidCatch(error, info){
      console.log("This is the error ", info)
     }
    
  render() {
   if(this.state.hasError){
    return <h3>Idiot entered here, not among of Heros</h3>
   }
   return this.props.children 
      
   {/* ERROR BOUNDARY IN REACT
         Error handling phase have two lifecycle methods
         Error boundary is a class component that implements either one or both of the 
         lifecycle methods
         1. static getDerivedStateFromError(error)
         2. componentDidCatch(error, info)
         becomes an error boundary.

         static getDerivedStateFromError(error) is used to to render a fallback UI after
         an error is thrown and the componentDidCatch method is used to log the error
         information!
         */}
  }
}
export default ErrorBound;