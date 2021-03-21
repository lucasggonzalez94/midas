import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div className='container'>
            <h2>Registro</h2>

            <form className='container-form'>
                <label htmlFor='username'>Nombre de Usuario</label>
                <input type='text' id='username' name='username'/>

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email'/>

                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' name='password'/>

                <input type='submit' className='btn btn-block'/>

                <Link to='/register'>Registrarme</Link>
            </form>
        </div>
    );
}
 
export default Register;