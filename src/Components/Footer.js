import { Link, useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top wrapper">
                <div className="row contact-info wrapper">
                    <div className="contact-text">
                        <h1>Entra en contacto</h1>
                        <p>Telefóno: 22039306 <br /> 098987250 </p>
                        <p>o <span className="underlined">enviando un email</span></p>
                    </div>
                    <div className="contact-icons">
                        <InstagramIcon fontSize='medium' />
                        <FacebookIcon fontSize='medium' />
                        <TwitterIcon fontSize='medium' />
                    </div>
                </div>
                <div className="row links wrapper">
                    <Link to="/acerca-de">Acerca de</Link>
                    <Link to="/contacto">Servicios</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>
            </div>
            <div className="footer-bottom">
                @2023 Medina Marcas
            </div>
        </footer>
    )
}

export default Footer;