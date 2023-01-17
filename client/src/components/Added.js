import React from 'react'


 import Card from "@material-ui/core/Card";
  import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
function Added({name, from,to ,description, fare}) {

 
  return (
    
    
    <div className="card">
      <Card  style={{
          width: 1000,
          color:"#fff",
          backgroundColor: "#060606",
        }}>
     <CardContent>
      <div className="card_body">
      
        <h2 className="card_title">{name}</h2>
        <p>From:{from} To:{to}</p>
        <p className="card_description">{description}</p>
        <span>Fare={fare}</span>

       
      </div>
      </CardContent>
      </Card>
      


    </div>
    )

  }
  export default Added;
  
      
 






// <table className='content-table'>
//      <thead>
//          <tr>
//              <th>{name}</th>
//          </tr>
//      </thead>

//      <tbody>
//         <tr> From   {from}</tr>
//         <tr> To: {to}</tr>
//         <tr> Description: {description}</tr>
//         <tr> Fare:  {fare}</tr>
//     </tbody>
//       </table>

