import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {

	const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);
	const [usuario, setUsuario] = useState({
		username: '',
		email: '',
		password: ''
	});
	const [login, setLogin] = useState(false);

  	return (
    	<Router>
      		<Switch>
        		<Route
          			exact path='/'
          			component={Home}
        		/>

				<Route
          			exact path='/login'
          			component={Login}
        		/>

				<Route
          			exact path='/register'
          			component={Register}
        		/>
      		</Switch>
    	</Router>
  	);
}

export default App;
