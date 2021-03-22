import React from 'react';
import Noticia from './Noticia';

const GridNoticias = ({noticias}) => {
    return (
        <div className='container-grid'>
            <h3>Resultados</h3>

            <div className='grid'>
                <Noticia
                    noticias={noticias}
                />
            </div>
        </div>
    );
}
 
export default GridNoticias;