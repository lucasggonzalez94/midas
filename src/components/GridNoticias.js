import React from 'react';
import Noticia from './Noticia';

const GridNoticias = () => {
    return (
        <div className='container-grid'>
            <h3>Resultados</h3>

            <div className='grid'>
                <Noticia/>
            </div>
        </div>
    );
}
 
export default GridNoticias;