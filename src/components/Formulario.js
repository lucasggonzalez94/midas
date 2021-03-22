import React, { useEffect, useState } from 'react';

const Formulario = (props) => {

    const {SelectCategorias, SelectMedios, setFechaDesde, setFechaHasta} = props

    return (
        <div className='container'>
            <form className="container-form">
                <label htmlFor="palabras-clave">Palabras Clave</label>
                <input placeholder="Ej. Coronavirus" name='palabras-clave' id="palabras-clave" type="text"/>
                
                <SelectCategorias/>

                <SelectMedios/>

                <div className='fechas'>
                    <div className='fecha-desde'>
                        <label htmlFor="fecha-desde">Desde</label>
                        <input id="fecha-desde" type="date" name='fecha-desde' onChange={e => setFechaDesde(e.target.value)}/>
                    </div>

                    <div className='fecha-hasta'>
                        <label htmlFor="fecha-hasta">Hasta</label>
                        <input id="fecha-hasta" type="date" name='fecha-hasta' onChange={e => setFechaHasta(e.target.value)}/>
                    </div>
                </div>

                <input type='submit' value='Buscar' className='btn btn-block'/>
            </form>
        </div>
    );
}
 
export default Formulario;