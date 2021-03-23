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

        // eslint-disable-next-line no-useless-escape
        const regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
        const regexPass = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/);

        // Validacion de campos vacios
        if (usuario.email !== '' && usuario.username !== '' && usuario.password !== '') {

            // Validacion de email existente
            if (!usuariosRegistrados.map(usuarioRegistrado => usuarioRegistrado.email === usuario.email)[0]) {

                // Validacion de usuario existente
                if (!usuariosRegistrados.map(usuarioRegistrado => usuarioRegistrado.username === usuario.username)[0]) {

                    // Validacion email valido
                    if (regexEmail.test(usuario.email)) {

                        // Validacion contraseña valida
                        if (regexPass.test(usuario.password)) {
                            setUsuariosRegistrados([
                                ...usuariosRegistrados,
                                usuario
                            ]);
                
                            Swal.fire({
                                icon: 'success',
                                title: 'Registrado correctamente.'
                            })
                
                            props.history.push('/')
                        } else {

                            Swal.fire({
                                icon: 'error',
                                title: 'Formato de contraseña incorrecto.',
                                text: 'Minimo 8 caracteres, maximo 15, al menos una letra mayúscula, al menos una letra minúscula, al menos un dígito, no espacios en blanco, al menos 1 caracter especial'
                            })
                        }
                    } else {

                        Swal.fire({
                            icon: 'error',
                            title: 'Formato de email incorrecto.'
                        })
                    }
                } else {

                    Swal.fire({
                        icon: 'error',
                        title: 'Nombre de usuario ya existente, pruebe con otro.'
                    })
                }
            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Ya existe un usuario con el mismo email.'
                })
            }
        } else {
            
            Swal.fire({
                icon: 'error',
                title: 'Complete todos los campos correctamente.'
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

                <Link to='/'>Ya tengo cuenta. Iniciar sesión</Link>
            </form>
        </div>
    );
}
 
export default withRouter(Register);