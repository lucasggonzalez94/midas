import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {

	
	const [login, setLogin] = useState(false);

	useEffect(() => {
		localStorage.setItem('usuariosRegistrados', JSON.stringify([]));
	}, [])

  	return (
    	<Router>
      		<Switch>
        		<Route
          			exact path='/'
          			component={Home}
        		/>

				<Route
          			exact path='/login'
          			component={() => <Login
							login={login}
							setLogin={setLogin}
						/>}
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
