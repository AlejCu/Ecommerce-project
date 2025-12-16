import { FooterStyles } from "./footerStyles.ts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer () {
    return (
        <FooterStyles>

            <div className="footer_icons">
                <FontAwesomeIcon icon={faLinkedin} />

                <FontAwesomeIcon icon={faGithub} />
            </div>

            <div className="footer_contact">
                <h2>Contact us</h2>
        
                <p>alejandro.ma.garcia@outlook.com</p>
            </div>

            <div className="footer_privacy">
                <p>This is not an actual shop. All products shown are for demo purposes only and do not exist in real life.</p>
            </div>
        </FooterStyles>
    )

}

export { Footer };