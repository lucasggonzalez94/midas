import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/' className='brand-logo'>Noticias</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/login'>Iniciar Sesión</Link></li>
            </ul>
        </nav>
    );
}
 
export default NavBar;