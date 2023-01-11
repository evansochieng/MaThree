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
    <div className='icons_container' >


          <FontAwesomeIcon className='icons' icon  ={faYoutube} pull="left"></FontAwesomeIcon>
          <FontAwesomeIcon className='icons' icon ={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon className='icons'icon ={faTelegram}></FontAwesomeIcon>
          <FontAwesomeIcon className='icons'icon ={faTiktok}></FontAwesomeIcon>
          <FontAwesomeIcon className='icons'icon ={faFacebook} ></FontAwesomeIcon>
          <FontAwesomeIcon className='icons'icon ={faInstagram} ></FontAwesomeIcon>
          <FontAwesomeIcon className='icons'icon ={faGithub}pull="right"></FontAwesomeIcon>
        





    </div>
    </div>
    
  )
}

export default Footer;