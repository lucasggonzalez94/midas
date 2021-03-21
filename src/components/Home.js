import React, {Fragment} from 'react';
import Formulario from './Formulario';
import GridNoticias from './GridNoticias';
import NavBar from './NavBar';

const Home = () => {
    return (
        <Fragment>
            <NavBar/>
            <Formulario/>
            <GridNoticias/>
        </Fragment>
    );
}
 
export default Home;