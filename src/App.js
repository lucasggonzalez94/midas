import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {

	const [usuariosRegistrados, setUsuariosRegistrados] = useState(JSON.parse(localStorage.getItem('usuariosRegistrados')) || []);
	const [login, setLogin] = useState(localStorage.getItem('login') || false);

	const guardarLocalStorage = (usuarios, login) => {
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
        localStorage.setItem('login', login);
    }

    guardarLocalStorage(usuariosRegistrados, login);
	
	// Sesion cerrada despues de 5 minutos
	setTimeout(() => {
		setLogin(false);
	}, 300000);

  	return (
    	<Router>
      		<Switch>
        		<Route
          			exact path='/home'
          			component={() => <Home
							login={login}
							setLogin={setLogin}
						/>}
        		/>

				<Route
          			exact path='/'
          			component={() => <Login
							usuariosRegistrados={usuariosRegistrados}
							login={login}
							setLogin={setLogin}
						/>}
        		/>

				<Route
          			exact path='/register'
          			component={() => <Register
							usuariosRegistrados={usuariosRegistrados}
							setUsuariosRegistrados={setUsuariosRegistrados}
						/>}
        		/>
      		</Switch>
    	</Router>
  	);
}

export default App;
