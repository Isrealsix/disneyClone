import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Login from './components/login/Login';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/detail/:id">
						<Detail />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
