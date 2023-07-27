import LanguageIcon from '@mui/icons-material/Language';
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="wrapper">
            <button className="lang-btn">
                <LanguageIcon fontSize='small'/>
                Es
            </button>
            <div className="main-nav">
                <Link to="/">
                    <h1>
                        MEDINAMARCAS
                    </h1>
                </Link>
                <div className="desktop-nav">
                    <Link to="/about">Acerca de</Link>
                    <Link to="/services">Servicios</Link>
                    <Link to="/contact">Contacto</Link>
                </div>
                <div className="mobile-nav">
                    <div id="nav-icon4">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;