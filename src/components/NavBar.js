import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({login, setLogin}) => {
    return (
        <nav className='nav-bar'>
            <Link to='/' className='logo'>Noticias</Link>
            <ul>
                {
                    !login ? <li><Link to='/login'>Iniciar Sesión</Link></li> :
                    <li><Link onClick={() => setLogin(false)}>Cerrar Sesión</Link></li>
                }
            </ul>
        </nav>
    );
}
 
export default NavBar;