import React, { useEffect, useState } from 'react';
import useCategorias from '../hooks/useCategorias';
import useMedios from '../hooks/useMedios';

const Formulario = () => {

    const OPCIONES_CATEGORIAS = [
        {value: 'ULTIMAS_NOTICIAS', label: 'Últimas noticias'},
        {value: 'LOCALES', label: 'Locales'},
        {value: 'NACIONALES', label: 'Nacionales'},
        {value: 'INTERNACIONALES', label: 'Internacionales'},
        {value: 'ECONOMIA', label: 'Economía'},
        {value: 'POLITICA', label: 'Política'},
        {value: 'POLICIALES', label: 'Policiales'},
        {value: 'SOCIEDAD', label: 'Sociedad'},
        {value: 'SALUD', label: 'Salud'},
        {value: 'CULTURA', label: 'Cultura'},
        {value: 'DEPORTES', label: 'Deportes'},
        {value: 'TECNOLOGIA', label: 'Tecnología'}
    ]

    const [medios, setMedios] = useState([]);
    const [categoria, SelectCategorias] = useCategorias('ULTIMAS_NOTICIAS', OPCIONES_CATEGORIAS);
    const [medio, SelectMedios] = useMedios('TN', medios);

    useEffect(() => {
        const consultarMedios = async () => {

            const url = 'https://api.jornalia.net/api/v1/providers?apiKey=17fc1a0a411144fb8b6824eabd6d31b2';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setMedios(resultado.providers);
        }
        consultarMedios();
    }, [])

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
                        <input id="fecha-desde" type="date" name='fecha-desde'/>
                    </div>

                    <div className='fecha-hasta'>
                        <label htmlFor="fecha-hasta">Hasta</label>
                        <input id="fecha-hasta" type="date" name='fecha-hasta'/>
                    </div>
                </div>

                <input type='submit' value='Buscar' className='btn btn-block'/>
            </form>
        </div>
    );
}
 
export default Formulario;