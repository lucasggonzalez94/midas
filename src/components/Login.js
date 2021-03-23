import React, { useEffect, useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = (props) => {

    const {usuariosRegistrados, login, setLogin} = props;

    const [usuario, setUsuario] = useState({
		username: '',
		password: ''
	});

    useEffect(() => {
        if (!localStorage.getItem('login')) {
            localStorage.setItem('login', login);
            setLogin(localStorage.getItem('login'));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const guardarUsuario = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    const submitUsuario = (e) => {
        e.preventDefault();

        // Validacion de campos vacios
        if (usuario.username !== '' && usuario.password !== '') {

            console.log(usuariosRegistrados.find(usuarioRegistrado => usuarioRegistrado.username === usuario.username))
            // Validacion usuario existente
            if (usuariosRegistrados.find(usuarioRegistrado => usuarioRegistrado.username === usuario.username)) {


                // Validacion contraseña correcta
                if (usuariosRegistrados.find(usuarioRegistrado => usuarioRegistrado.password === usuario.password)) {

                    setLogin(true);
                    Swal.fire({
                        icon: 'success',
                        title: 'Inicio de sesión correcto.'
                    });
                    props.history.push('/home');
                }else {

                    Swal.fire({
                        icon: 'error',
                        title: 'Contraseña incorrecta.'
                    });
                    setLogin(false);
                }
            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Usuario incorrecto.'
                });
                setLogin(false);
            }
        } else {
            
            Swal.fire({
                icon: 'error',
                title: 'Complete los campos correctamente.'
            });
        }
    }

    return (
        <div className='container'>
            <h2>Inicio de Sesión</h2>

            <form
                className='formulario'
                onSubmit={submitUsuario}
            >
                <label htmlFor='username'>Nombre de Usuario</label>
                <input type='text' id='username' name='username' required onChange={guardarUsuario}/>

                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' name='password' required onChange={guardarUsuario}/>

                <input type='submit' className='btn btn-block' value='Iniciar Sesión'/>

                <Link to='/register'>Registrarme</Link>
            </form>
        </div>
    );
}
 
export default withRouter(Login);