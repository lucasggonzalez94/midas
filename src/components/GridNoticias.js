import React from 'react';
import Noticia from './Noticia';

const GridNoticias = ({noticias}) => {
    return (
        <div className='container-grid'>
            <h3>Resultados</h3>

            <div className='grid'>
                {
                    (
                        noticias.length > 0 ?
                        noticias.map(noticia =>(
                            <Noticia
                                key={noticia._id}
                                noticia={noticia}
                            />
                        )) :
                        <p>No se encontraron resultados.</p>
                    )
                }
            </div>
        </div>
    );
}
 
export default GridNoticias;