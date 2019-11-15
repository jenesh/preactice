import React, { Component } from 'react';
import Ninjas from './Ninjas';	

class App extends Component {
	state = {
		ninjas: [
			{name: 'Ryu', age: 23, belt: 'Black', id: 1},
			{name: 'Ken', age: 23, belt: 'Black',  id: 2},
			{name: 'Scorpion', age: 25, belt: 'Black', id: 3}
		]
	}

	render () {
		return (
			<div className="App">
				<h1>My first React app!</h1>
				<Ninjas ninjas={this.state.ninjas}/>
			</div>
		);
	}
}

export default App;