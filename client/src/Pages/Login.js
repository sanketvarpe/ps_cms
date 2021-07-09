import React, { useState } from "react";
import "./../Css/Login.css";
import axios from "./../Axios/Axios";
// import { useHistory } from "react-router-dom";

const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	// const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(data);
		const response = await axios.post("/auth/login", data );
		console.loh(response);
		// history.push("/custs/me");
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
		// console.log(data);
	};
	return (
		<form onSubmit={handleSubmit} className="cust">
			<h1 className="cust_text">Login</h1>

			<label className="cust_login_label" htmlFor="email">
				Email
			</label>
			<input
				id="email"
				name="email"
				type="text"
				value={data.email}
				placeholder="Enter your email"
				className="cust_input"
				onChange={handleChange}
			/>

			<label className="cust_login_label" htmlFor="password">
				Password
			</label>
			<input
				id="password"
				name="password"
				type="password"
				value={data.password}
				placeholder="Enter your password"
				className="cust_input"
				onChange={handleChange}
			/>

			<button className="cust_btn" type="submit">
				Login
			</button>

		</form>
	);
};

export default Login;
