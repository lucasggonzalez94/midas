import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {

	const [usuariosRegistrados, setUsuariosRegistrados] = useState(JSON.parse(localStorage.getItem('usuariosRegistrados')) || []);
	const [login, setLogin] = useState(false);

	const guardarLocalStorage = (usuarios) => {
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
    }

    guardarLocalStorage(usuariosRegistrados);

  	return (
    	<Router>
      		<Switch>
        		<Route
          			exact path='/home'
          			component={Home}
        		/>

				<Route
          			exact path='/'
          			component={() => <Login
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
