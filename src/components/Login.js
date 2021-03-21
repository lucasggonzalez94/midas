import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <h2>Inicio de Sesión</h2>

            <form className='formulario'>
                <label htmlFor='username'>Nombre de Usuario</label>
                <input type='text' id='username' name='username'/>

                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' name='password'/>

                <input type='submit' className='btn btn-block' value='Iniciar Sesión'/>

                <Link to='/register'>Registrarme</Link>
            </form>
        </div>
    );
}
 
export default Login;