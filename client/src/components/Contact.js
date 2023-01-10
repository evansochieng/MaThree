import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub,faYoutube,faTelegram, faTwitter,faTiktok,faInstagram} from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className="contact-container">
    <div className="contact-layout">
      <h1 className="contacts">CONTACTS</h1>
      <div>
        <section className="office-container">
         
          <div className="office-container">
            <p className="offices">OUR OFFICES</p>
            <p>
              Our offices are based in Nairobi, Garden City Business Park,
              3rd Floor, office number 309

            </p>
            <p>Our team  led by our C.E.O  Dr. Ochieng Evans and his  deputy Mr Onyango George</p>
            <p>The rest of the administration team is a follows:
              <li>
               <ul> Madam Charity Nelima: Chief Operational Manager and handles all administrative roles</ul>
              <ul>  Mr. Riddick Angela : Head of Company's displinary Commitee</ul>
              <ul> Sir Nthiga Denis: Directing Manager </ul>
              </li>
            </p>

            <p> incase of any complains  or inquires on  the company's operations 
              you  can reach us  via 
              <li>
                <ul>
                  office Number: +254 704-999-704
                </ul>
                <ul> Email : mathree@gmail.com  /mathree@yahoo.com </ul>

          
  
              </li>
              <p> Follow us on our Social Media Platforms for more information</p>

              
              </p>
          </div>
        </section>
        <div className ="icons ">
          <FontAwesomeIcon icon ={faYoutube}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faTelegram}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faTiktok}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faFacebook}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faInstagram}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faGithub}></FontAwesomeIcon>
        </div>
        </div>
        </div>
        </div>
  )}

 export default Contact
