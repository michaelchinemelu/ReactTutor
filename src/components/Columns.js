import React from 'react'

function Columns() {
  const Array1 = [
    {
      'id': 1,
    'name': 'Michael',
  },
  {
    'id': 2,
  'name': 'Adanna',
}
  ]
  return (
    <React.Fragment>
        <td>MICHAEL</td>
        <td>CHINEMELU</td>
        {/* {
          Array1.map(item => (
            <React.Fragment key={item.id}>
              <h2>Hello {item.name} you are No.{item.id}</h2>
            </React.Fragment>
          ))
        } */}
    </React.Fragment>
  )
}

export default Columns