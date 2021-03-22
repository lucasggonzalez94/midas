import React, { useEffect, useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = (props) => {

    const {usuariosRegistrados, setUsuariosRegistrados} = props;
    
    const [usuario, setUsuario] = useState({
		username: '',
		email: '',
		password: ''
	});

    useEffect(() => {
        if (!localStorage.getItem('usuariosRegistrados')) {
            localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
            setUsuariosRegistrados(JSON.parse(localStorage.getItem('usuariosRegistrados')));
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

        // Validacion
        if (usuario.email !== '' && usuario.username !== '' && usuario.password !== '') {
            setUsuariosRegistrados([
                ...usuariosRegistrados,
                usuario
            ]);

            Swal.fire({
                icon: 'success',
                title: 'Registrado correctamente.'
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Complete los campos correctamente.'
            })
        }
    }

    return (
        <div className='container'>
            <h2>Registro</h2>

            <form
                className='formulario'
                onSubmit={submitUsuario}
            >
                <label htmlFor='username'>Nombre de Usuario</label>
                <input type='text' id='username' name='username' onChange={guardarUsuario} value={usuario.username} required/>

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' onChange={guardarUsuario} value={usuario.email} required/>

                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' name='password' onChange={guardarUsuario} value={usuario.password} required/>

                <input type='submit' className='btn btn-block' value='Registrarme' onChange={guardarUsuario}/>

                <Link to='/login'>Ya tengo cuenta. Iniciar sesión</Link>
            </form>
        </div>
    );
}
 
export default withRouter(Register);