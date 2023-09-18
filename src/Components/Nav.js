import LanguageIcon from '@mui/icons-material/Language';
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="wrapper">
            {/* <button className="lang-btn">
                <LanguageIcon fontSize='small'/>
                Es
            </button> */}
            <div className="main-nav">
                <Link to="/" className='logo'>
                    <h1>
                        MEDINA MARCAS
                    </h1>
                </Link>
                <div className="desktop-nav">
                    <Link to="/acerca-de" className='link'>Acerca de</Link>
                    <Link to="/contacto" className='link'>Servicios</Link>
                    <Link to="/contacto" className='link'>Contacto</Link>
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