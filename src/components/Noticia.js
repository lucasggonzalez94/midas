import React from 'react';

const Noticia = ({noticia}) => {
    return (

        <div className='card'>
            {
                (
                    noticia.imageUrl ?
                    <div className='imagen-noticia'>
                        <img src={noticia.imageUrl} alt={noticia.title}/>
                        <h4>{noticia.provider.name}</h4>
                    </div> :
                    <h4>{noticia.provider.name}</h4>
                )
            }
            <div className='descripcion-noticia'>
                <h3>{noticia.title}</h3>
                {
                    (
                        noticia.description ?
                        <p>{noticia.description}</p> :
                        null
                    )
                }

                <p>Publicado el: {noticia.publishedAt.split('T')[0]}</p>
            </div>
            <div className='footer-noticia'>
            <hr/>
                <a href={noticia.sourceUrl} className='btn' target='_blank' rel='noreferrer'>Ver Noticia</a>
            </div>
        </div>
    );
}
 
export default Noticia;