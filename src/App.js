import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
	state = {
		ninjas: [
			{name: 'Ryu', age: 20, belt: 'Black', id: 1},
			{name: 'Ken', age: 30, belt: 'Black',  id: 2},
			{name: 'Scorpion', age: 25, belt: 'Black', id: 3}
		]
	}

	addNinja = (ninja) => {
		ninja.id = this.state.ninjas.length + 1;
		const ninjas = [...this.state.ninjas, ninja];
		this.setState({
			ninjas: ninjas
		})
	}

	deleteNinja = (id) => {
		const ninjas = this.state.ninjas.filter(ninja => {
			return ninja.id !== id
		})
		this.setState({ninjas})
	}

	componentDidMount() {
		console.log('Component Mounted')
	}

	componentDidUpdate(prevProp, prevState) {
		console.log('Component Updated')
		console.log(prevProp, prevState)
	}

	componentWillUnmount(deleted) {
		console.log(deleted)
	}

	render () {
		return (
			<div className="App">
				<h1>My first React app!</h1>
				<Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
				<AddNinja addNinja={this.addNinja} />
			</div>
		);
	}
}

export default App;