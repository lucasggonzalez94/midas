import React from 'react';
import Swal from 'sweetalert2';

const Formulario = (props) => {

    const {palabrasClave, categoria, medio, fechaDesde, fechaHasta, parametrosBusqueda, setPalabrasClave, SelectCategorias, SelectMedios, setFechaDesde, setFechaHasta, setParametrosBusqueda} = props;

    const submitFormulario = e => {
        e.preventDefault()

        if (parametrosBusqueda.categoria !== '' && parametrosBusqueda.medio !== '' && parametrosBusqueda.fechaInicio !== '' && parametrosBusqueda.fechaFin !== '') {
            setParametrosBusqueda({
                palabras: palabrasClave,
                categoria,
                medio,
                fechaInicio: fechaDesde,
                fechaFin: fechaHasta
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Complete todos los campos correctamente.'
            })
        }
    };

    return (
        <div className='container'>
            <form
                onSubmit={submitFormulario}
            >
                <label htmlFor="palabras-clave">Palabras Clave</label>
                <input placeholder="Ej. Coronavirus" name='palabras' id="palabras-clave" type="text" onChange={e => setPalabrasClave(e.target.value.trim())} value={palabrasClave}/>
                
                <SelectCategorias/>

                <SelectMedios/>

                <div className='fechas'>
                    <div className='fecha-desde'>
                        <label htmlFor="fecha-desde">Desde</label>
                        <input id="fecha-desde" type="date" name='fechaInicio' onChange={e => setFechaDesde(e.target.value)} value={fechaDesde} required/>
                    </div>

                    <div className='fecha-hasta'>
                        <label htmlFor="fecha-hasta">Hasta</label>
                        <input id="fecha-hasta" type="date" name='fechaFin' onChange={e => setFechaHasta(e.target.value)} value={fechaHasta} required/>
                    </div>
                </div>

                <input type='submit' value='Buscar' className='btn btn-block'/>
            </form>
        </div>
    );
}
 
export default Formulario;