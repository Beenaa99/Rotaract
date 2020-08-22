import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { //Install fontawesome for this to work
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";  
function Footer(){
    return(
        
            <div className="footer social-container text-center">
               
                
                <a href="https://www.youtube.com/channel/UCXynv_B6tndJItcbvCUiRXA" className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/RCMMS3141/"className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/rcmms?lang=en" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/rcmms/?hl=en"className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <div class="footer-copyright text-center text-light py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> RCMMS.com</a>
                </div>
               
            </div>
            
        
        
 
				
    );
}

export default Footer;