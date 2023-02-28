import React from 'react' 


const Without = (props) => {
  const {name, age} = props
    console.log(props)
    return(
       <div>
       Welcome {name} your age is {age}
        </div>
  )
//return React.createElement('div', {id: 'hello', class: 'dummyclass'}, React.createElement('h1', null, "Welcome my Hero"))
}

export default Without;