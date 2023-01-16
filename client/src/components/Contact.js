//  import React from "react";
//  import 'bootstrap/dist/css/bootstrap.min.css';


// function Contact() {
//   return (
//     <div>
//         <section className="py-4 bg-info">
//             <div className="container">
//               <div className="row">
//               <div className="col-md-4 my-auto">
//                 <h3>CONTACT US</h3>
//                 </div>
//                 <div className="col-md-8 my-auto">
//                   <h5 className="float-end"> 
//                         Home/Contact us
//                   </h5>

//                 </div>
//             </div>
//             </div> 
//            </section>
            
           
         
//         <section className="section">
//              <div className="container">
//                   <div className="card shadow">
//                   <div class  Name="card-body">
//                      <div className="row ">
//                         <div className="col-md-6 ">
//                          <h5> Contact form</h5>
//                          <hr/>
//                          <div className=" form-group">
//                           <label for ="">Full name</label>  
//                           <input type="text" className="form-control" placeholder="Enter Full Name" />

//                          </div>
//                          <div className=" form-group">
//                           <label for ="">Phone Number </label>  
//                           <input type="text" className="form-control" placeholder="Enter Full Name" />

//                          </div>
//                          <div className=" form-group">
//                           <label for ="">Email address</label>  
//                           <input type="text" className="form-control" placeholder="Enter Full Name" />

//                          </div>
//                          <div className=" form-group">
//                           <label for ="">Message</label>  
//                             <textarea rows="3" className="form-control"  placeholder="Type your message..."></textarea>
//                          </div >
//                          <div className="form-group py-3">
//                           <button type="button" className=" btn-btn-primary shadow w-100">Send Message</button>

//                          </div>

//                       </div>
//                       <div className="col-md-6 border start">
//                         <h4 className="main-heading">Address information</h4>
//                         <div className="underline"></div>
//                         <p>
//                           Westlands NRG Plaza,Nairobi,Kenya
//                         </p>
//                         <p>
//                           phone: +25412378965
//                         </p>
//                         <p>
//                           Email: mathree@gmail.com
//                         </p>
                        
//                       </div>
//                      </div>
//               </div>
//              </div>
//              </div>

           
//            </section>
//            </div>
           
           
      


    
//   )
// }

// export default Contact;


    import React from 'react'
    

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
      <label for="email">Name Details
      <span>*</span>
      <span class="wpcf7-form-control-wrap" data-name="last-name"><input size="40"
       class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" 
       aria-required="true" aria-invalid="false" value="" type="text" name="last-name">
        </input></span></label>

        {/* <input type='text' placeholder='Full Name'
        name=' user_name'/> */}
        <br></br>
  
        <label for="email">Email Address
        <span>*</span>
        <span class="wpcf7-form-control-wrap" data-name="last-name"><input size="40"
       class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" 
       aria-required="true" aria-invalid="false" value="" type="text" name="last-name">
        </input></span></label>
        {/* <input type='email' placeholder=' Email address'
        name='user_email' required/> */}
        </form>
        <form>
        <input className='message-here' type='text' placeholder='type message here'
        name=' subject' required/>
        

<button type="submit" className='btn--btn'> Send  </button>
</form>

    </div>
  </section>     
          </div>
      
        </div> 
        </div>
        
     
   )}


export default Contact;

    


