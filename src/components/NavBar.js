import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <Link to='/' className='logo'>Noticias</Link>
            <ul>
                <li><Link to='/login'>Iniciar Sesión</Link></li>
            </ul>
        </nav>
    );
}
 
export default NavBar;