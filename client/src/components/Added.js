import React from 'react'

function Addd({name, from,to ,description, fare}) {

    
  return (


<table className='content-table'>
    <thead>
        <tr>
            <th>{name}</th>
        </tr>
    </thead>

    <tbody>
        <tr> From :  {from}</tr>
        <tr> To: {to}</tr>
        <tr> description:{description}</tr>
        <tr> Fare:  {fare}</tr>
    </tbody>
</table>
  )
}

export default Addd