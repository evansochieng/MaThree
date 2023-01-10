import React from 'react'
import { Container } from 'react-bootstrap'


function Contact() {
  return (

   
    <div className="contact-container">
    <div className="contact-layout">
      <h1 className="contacts">CONTACTS US</h1>
      <div>
        <section className="office-container">
         
          <div className="office-container">
            <p className="offices">OUR OFFICES</p>
            <p>
              Our offices are based in Westlands, NRG Plaza ,1St Floor
office number 104 </p>


          </div>
        </section>
        <section>
    <div className='container'>
      <h2 className='--text-center'>CONTACT US</h2>
      <p>for any inquiries or suggestions  </p>
      <form className=' --form-control '>
        <input type='text' placeholder='Full Name'
        name=' user_name'/>
        <input type='email' placeholder=' Email address'
        name='user_email' required/>
        </form>
        <form>
        <input className='message-here' type='text' placeholder='type message here'
        name=' subject' required/>
          </form>

      
               <button type="submit" className='btn--btn'> Send  </button>



    



    </div>


  </section>
      

         
        </div>
      
        </div>
        </div>
    
   
  )}

 export default Contact
