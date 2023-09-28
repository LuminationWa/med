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
                        <p>Telefóno: +598 22039306 <br /> +598 98987250 </p>
                        <p>o <span className="underlined"><Link to="/contacto">enviando un email</Link></span></p>
                    </div>
                    <div className="contact-icons">
                        <a href="https://www.facebook.com/profile.php?id=100063489703723 ">
                            <InstagramIcon fontSize='small' />
                        </a>
                        <a href="https://www.instagram.com/medina.marcas/">
                            <FacebookIcon fontSize='small' />
                        </a>
                        <a href="https://twitter.com/marcasmedinauy">
                            <TwitterIcon fontSize='small' />
                        </a>
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