import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Base } from "./screens/Base/Base";
import { Register } from "./screens/Register/Register";
import { Login } from "./screens/Login/Login";
import { CreatePost } from "./screens/CreatePost2/CreatePost2";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/post">
						<CreatePost />
					</Route>
					<Route path="/">
						<Base />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
