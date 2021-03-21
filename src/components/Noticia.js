import React from 'react';
import {Link} from 'react-router-dom';

const Noticia = () => {
    return (
        <div className='card'>
            <div className='imagen-noticia'>
                <img src='imagen.jpg' alt='descripcion'/>
                <h4>Medio</h4>
            </div>
            <div className='descripcion-noticia'>
                <h3>Titulo Noticia</h3>
                <p>Descripcion de ejemplo</p>
            </div>
            <hr/>
            <div className='footer-noticia'>
                <Link to='https://www.google.com'>Ver Noticia</Link>
            </div>
        </div>
    );
}
 
export default Noticia;