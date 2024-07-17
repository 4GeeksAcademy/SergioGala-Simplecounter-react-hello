// src/js/component/home.jsx
import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Timing in Progress</h1>
			<p>
			<div className="mt-5">
				<SecondsCounter seconds={seconds} />
			</div>
			
			</p>
			
			<p>
				Made by{" "}
				<a href="https://github.com/SergioGala">SergioGala</a>, with
				heat!
			</p>
			
		</div>
	);
};

export default Home;
