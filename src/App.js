import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import About from './components/about.js';
import Contact from './components/contact.js';
import Donate from './components/donate.js';
import Services from './components/services.js';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Route exact path="/" component={About} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/donate" component={Donate} />
					<Route path="/services" component={Services} />
				</div>
			</Router>
    );
  }
}

export default App;
