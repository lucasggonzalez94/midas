import React, {useEffect, useState} from 'react';
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

	useEffect(() => {
		// Cerrar sesion despues de 5 minutos de inactividad
		let timeoutID;

		function setup() {
			window.addEventListener("mousemove", resetTimer, false);
			window.addEventListener("mousedown", resetTimer, false);
			window.addEventListener("keypress", resetTimer, false);
			window.addEventListener("DOMMouseScroll", resetTimer, false);
			window.addEventListener("mousewheel", resetTimer, false);
			window.addEventListener("touchmove", resetTimer, false);
			window.addEventListener("MSPointerMove", resetTimer, false);

			startTimer();
		}
		setup();

		function startTimer() {
			timeoutID = window.setTimeout(goInactive, 300000);
		}

		function resetTimer(e) {
			window.clearTimeout(timeoutID);
			goActive();
		}

		function goInactive() {
			setLogin(false);
		}

		function goActive() {
			startTimer();
		}
	}, [])

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
