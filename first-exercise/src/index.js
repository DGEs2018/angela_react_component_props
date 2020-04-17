import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const Card = (props) => {
	console.log(props);
	return (
		<div>
			<h2>{props.name}</h2>
			<img src={props.src} alt="avatar_img" />
			<p>{props.tel}</p>
			<p>{props.email}</p>
		</div>
	);
};

ReactDOM.render(
	<div>
		<h1>My Contacts</h1>
		<Card
			name="Beyonce"
			src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
			tel="+123 456 789"
			email="b@beyonce.com"
		/>
		<Card
			name="Jack Bauer"
			src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
			tel="+987 654 321"
			email="jack@nowhere.com"
		/>
		<Card
			name="Chuck Norris"
			src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
			tel="+918 372 574"
			email="gmail@chucknorris.com"
		/>
	</div>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
