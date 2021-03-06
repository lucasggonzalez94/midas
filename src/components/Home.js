import React, {Fragment, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import Formulario from './Formulario';
import GridNoticias from './GridNoticias';
import NavBar from './NavBar';
import useCategorias from '../hooks/useCategorias';
import useMedios from '../hooks/useMedios';

const Home = (props) => {

    const {login, setLogin} = props;

    if (!login || login === 'false') {
        props.history.push('/');
    }

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

    const [palabrasClave, setPalabrasClave] = useState('coronavirus');
    const [categoria, SelectCategorias] = useCategorias('ULTIMAS_NOTICIAS', OPCIONES_CATEGORIAS);
    const [medio, SelectMedios] = useMedios('LaNacion', medios);
    const [fechaDesde, setFechaDesde] = useState('2020-02-01');
    const [fechaHasta, setFechaHasta] = useState('');
    const [noticias, setNoticias] = useState({});
    const [parametrosBusqueda, setParametrosBusqueda] = useState({
        palabras: palabrasClave,
        categoria,
        medio,
        fechaInicio: fechaDesde,
        fechaFin: fechaHasta
    })

    useEffect(() => {
        const consultarMedios = async () => {

            const url = 'https://api.jornalia.net/api/v1/providers?apiKey=f36f0dc2f3204a3c821130384e208604';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setMedios(resultado.providers);
        }
        consultarMedios();

        const busquedaNoticias = async () => {

            const {palabras, categoria, medio, fechaInicio, fechaFin} = parametrosBusqueda;

            if (fechaFin === '') {
                const fechaHoy = new Date();
                const year = fechaHoy.getFullYear();
                let month = fechaHoy.getMonth() + 1;
                let day = fechaHoy.getDate();

                if (month <= 9) {
                    month = `0${fechaHoy.getMonth() + 1}`;
                }

                if (day <= 9) {
                    day = `0${fechaHoy.getDate()}`;
                }

                const fechaString = `${year}-${month}-${day}`;

                parametrosBusqueda.fechaFin = fechaString;
                setFechaHasta(fechaString);
            }
            
            const url = `https://api.jornalia.net/api/v1/articles?apiKey=f36f0dc2f3204a3c821130384e208604&search=${palabras}&providers=${medio}&categories=${categoria}&startDate=${fechaInicio}&endDate=${fechaFin}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setNoticias(resultado.articles);
        }
        busquedaNoticias();
    }, [parametrosBusqueda, login]);

    return (
        <Fragment>
            <NavBar
                login={login}
                setLogin={setLogin}
            />
            <Formulario
                palabrasClave={palabrasClave}
                categoria={categoria}
                medio={medio}
                fechaDesde={fechaDesde}
                fechaHasta={fechaHasta}
                parametrosBusqueda={parametrosBusqueda}
                setPalabrasClave={setPalabrasClave}
                SelectCategorias={SelectCategorias}
                SelectMedios={SelectMedios}
                setFechaDesde={setFechaDesde}
                setFechaHasta={setFechaHasta}
                setParametrosBusqueda={setParametrosBusqueda}
            />
            <GridNoticias
                noticias={noticias}
            />
        </Fragment>
    );
}
 
export default withRouter(Home);