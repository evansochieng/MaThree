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
                Our offices are based in Westlands, NRG Plaza ,1St Floor office number 104 </p>


            </div>
          </section>
          <section>
            <div className='container'>
              <h2 className='--text-center'>CONTACT US</h2>
              <p>for any inquiries or suggestions  </p>
              <form className=' --form-control '>
                <label for="email">Full Name
                  <span>*</span>
                  <br></br>
                  <span class="wpcf7-form-control-wrap" data-name="last-name"><input size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                    aria-required="true" aria-invalid="false" value="" type="text" name="last-name">
                  </input></span></label>

                {/* <input type='text' placeholder='Full Name'
        name=' user_name'/> */}
                <br></br>

                <label for="email">Email Address
                  <span>*</span>
                  <br></br>
                  <span class="wpcf7-form-control-wrap" data-name="last-name"><input size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                    aria-required="true" aria-invalid="false" value="" type="text" name="last-name">
                  </input></span></label>
                {/* <input type='email' placeholder=' Email address'
        name='user_email' required/> */}
              </form>
              <form>
                <input className='message-here' type='text' placeholder='type message here'
                  name=' subject' required />
              </form>


              <button type="submit" className='btn--btn'> Send  </button>







            </div>


          </section>



        </div>

      </div>
    </div>


  )
}

export default Contact
