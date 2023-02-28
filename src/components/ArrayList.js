import React from 'react';


const ArrayListFunc = () => {
    const person = ["Michael", "Chinemelu", "Junior", "Johnson"]
    return(
        <div>
            <h3>
                Hello World of the old
            </h3>
            {
                person.map((persons, index) => <h2 key={index}> {index}. {persons}</h2>)
            }
        </div>
    )
}

export default ArrayListFunc;