import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <h2>Inicio de Sesión</h2>

            <form className='container-form'>
                <label htmlFor='username'>Nombre de Usuario</label>
                <input type='text' id='username' name='username'/>

                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' name='password'/>

                <input type='submit' className='btn btn-block'/>

                <Link to='/register'>Iniciar Sesión</Link>
            </form>
        </div>
    );
}
 
export default Login;