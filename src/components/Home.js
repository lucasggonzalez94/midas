import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './Formulario';
import GridNoticias from './GridNoticias';
import NavBar from './NavBar';
import useCategorias from '../hooks/useCategorias';
import useMedios from '../hooks/useMedios';

const Home = () => {

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
    const [fechaDesde, setFechaDesde] = useState('2020-02-01');
    const [fechaHasta, setFechaHasta] = useState('');
    const [noticias, setNoticias] = useState({});

    useEffect(() => {
        const consultarMedios = async () => {

            const url = 'https://api.jornalia.net/api/v1/providers?apiKey=17fc1a0a411144fb8b6824eabd6d31b2';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setMedios(resultado.providers);
        }
        consultarMedios();

        const busquedaNoticias = async () => {

            if (fechaHasta === '') {
                const fechaHoy = new Date();
                const year = fechaHoy.getFullYear();
                const month = fechaHoy.getMonth() + 1;
                const day = fechaHoy.getDate();

                setFechaHasta(`${year}-${month}-${day}`);
            }
            
            const url = `https://api.jornalia.net/api/v1/articles?apiKey=17fc1a0a411144fb8b6824eabd6d31b2&search=coronavirus+d%C3%B3lar&providers=${medio}&categories=${categoria}&startDate=${fechaDesde}&endDate=${fechaHasta}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setNoticias(resultado.articles);
        }
        busquedaNoticias();
    }, [])

    return (
        <Fragment>
            <NavBar/>
            <Formulario
                SelectCategorias={SelectCategorias}
                SelectMedios={SelectMedios}
                setFechaDesde={setFechaDesde}
                setFechaHasta={setFechaHasta}
            />
            <GridNoticias
                noticias={noticias}
            />
        </Fragment>
    );
}
 
export default Home;