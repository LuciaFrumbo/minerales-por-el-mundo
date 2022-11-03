import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <div id="contact">
                <div class="contact__me">
                    <a href="http://wa.me/5495555555"><FontAwesomeIcon icon={ faWhatsapp } /> +5491158965498</a>
                    <p class="contact__me__city"> CABA, Argentina.</p>
                    <p class="contact__me__email">mineralesporelmundo@gmail.com</p>
                    <a href="http://www.instagram.com/mineralesporelmundo"><FontAwesomeIcon icon={ faInstagram } />
                     mineralesporelmundo</a>
                </div>
                <div>
                    <p class="publi">Developed by Quifdevs®</p>
                </div>
            </div>

        </footer>

    )
}

export default Footer;