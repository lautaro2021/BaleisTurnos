import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch } from "./config/config";
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from './components/Lading';

function App() {
	const dispatch = useAppDispatch();
	return (
		<div>
			{/* <NavButtons/> */}
			<Routes>
				{/* LOGIN */}
        <Route path="/landing" element = {<Landing/>}/>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
