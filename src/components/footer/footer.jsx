import { FooterStyles } from "./footerStyles.ts";

function Footer () {
    return (
        <FooterStyles>
            <div className="footer_top-container">
                <div className="footer_contact">
                    <h2>Contact us</h2>
        
                    <p>email@email.com</p>
        
                    <p>55-3333-4444</p>
                </div>

                <div className="footer_newsletter">
                    <h2>Newsletter</h2>

                    <form action="">
                        <fieldset>
                            <label htmlFor="name-newsletter">Name:</label>
                            <input type="text" name="name-newsletter" id="name-newsletter"/>
                            <label htmlFor="email-newsletter">Email:</label>
                            <input type="email" name="email-newsletter" id="email-newsletter"/>
                            <input type="submit" value="Enviar" id="submit-button"/>
                        </fieldset>
                    </form>
                </div>
            </div>

            <div className="footer_privacy">
                
            </div>
        </FooterStyles>
    )

}

export { Footer };