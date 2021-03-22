import React, { useEffect, useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = (props) => {

    const {login, setLogin} = props

    const [usuariosRegistrados, setUsuariosRegistrados] = useState(JSON.parse(localStorage.getItem('usuariosRegistrados')) || []);
    const [usuario, setUsuario] = useState({
		username: '',
		password: ''
	});

    useEffect(() => {
        if (!localStorage.getItem('usuariosRegistrados')) {
            localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
            setUsuariosRegistrados(JSON.parse(localStorage.getItem('usuariosRegistrados')));
            return;
        }
    }, [])

    const guardarLocalStorage = (usuarios) => {
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
    }

    guardarLocalStorage(usuariosRegistrados);

    const guardarUsuario = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    const submitUsuario = (e) => {
        e.preventDefault();

        // Validacion
        if (usuario.username !== '' && usuario.password !== '') {
            setUsuariosRegistrados([
                ...usuariosRegistrados,
                usuario
            ]);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Complete los campos correctamente.'
            })
        }
    }

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
 
export default withRouter(Login);