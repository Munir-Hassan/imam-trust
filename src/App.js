import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import SignInForm from './components/SignInForm';

function App() {
	return (
		<div className="App">
			<Navigation />
			<SignInForm />
		</div>
	);
}

export default App;
