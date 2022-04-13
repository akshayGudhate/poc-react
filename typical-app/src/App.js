import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthContext from './Context/authContext';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// get info from local storage
		const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
		// if logged in user
		if (storedUserLoggedInInfo === "TRUE") setIsLoggedIn(true);
	}, []);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways

		setIsLoggedIn(true);
		// set to local storage
		localStorage.setItem('isLoggedIn', "TRUE");
	};

	const logoutHandler = () => {
		// remove from local storage
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{
			isLoggedIn: isLoggedIn,
			onLogout: logoutHandler
		}}>
			<MainHeader onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
		</AuthContext.Provider>
	);
}

export default App;
