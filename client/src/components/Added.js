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
        <tr>{from}</tr>
        <tr>{to}</tr>
        <tr>{description}</tr>
        <tr>{fare}</tr>
    </tbody>
</table>
  )
}

export default Addd