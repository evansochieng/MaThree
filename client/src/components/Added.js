import React from 'react'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

function Added({name, from,to ,description, fare}) {

    
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingTop :"120px",
      }}>
        <Card>
        style={{
          width: 400,
          backgroundColor: "#fff",
        }}
        <CardContent>
          <div>
            {name}
            {from}
            {to}
            {description}
            {fare}

          </div>




        </CardContent>




        </Card>





</div>

  )

 
}

export default Added




// <table className='content-table'>
//     <thead>
//         <tr>
//             <th>{name}</th>
//         </tr>
//     </thead>

//     <tbody>
//         <tr> From :  {from}</tr>
//         <tr> To: {to}</tr>
//         <tr> Description: {description}</tr>
//         <tr> Fare:  {fare}</tr>
//     </tbody>
// </table>
