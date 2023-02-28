import React from 'react' 


const Person = ({names}) => {
const {id, name, age, skill} = names
console.log(names.id)
    return( 
    <div>
        <h3>
       {id}. I am {name}, I am {age} and I am a {skill}
        </h3>
    </div>
    )
}

export default Person;