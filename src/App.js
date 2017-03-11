import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			repeater: ""
		}
	}

	updateRepeater(event) {
		this.setState({
			repeater: event.target.value
		});
	}

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.updateRepeater.bind(this)} />
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
}

export default App;
