import React from 'react' 
import PersonList from './PersonLIst';

const NameList = () => {
    const names = [
        {
        id: 1,
        name: "Michael",
        age: 24,
        skill: "Programmer"
    },

        {
        id: 2,
        name: "Ujunwua",
        age: 20,
        skill: "Hair dresser"
    }
]
       const persons = names.map((name) => (
       <PersonList key={names.id} names = {name}/>
       ))
       
       return(
         <div>{persons}</div>
         )
}
export default NameList;