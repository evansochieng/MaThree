import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub,faYoutube,faTelegram, faTwitter,faTiktok,faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    
    <div className='footer' >

        <div className='list'>
            <p>+2541247654</p>
            <p> mathree@gmail.com</p>
            <p> Westlands,NRG Plaza,1st Floor</p>
     
                       
        </div>
        <hr/>
    <div >


          <FontAwesomeIcon icon ={faYoutube}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faTelegram}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faTiktok}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faFacebook}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faInstagram}></FontAwesomeIcon>
          <FontAwesomeIcon icon ={faGithub}></FontAwesomeIcon>
        





    </div>
    </div>
    
  )
}

export default Footer;