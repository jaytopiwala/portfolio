import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {Work} from './Work';
import {Resume} from './Resume';
import {PaymentsProducts} from './PaymentsProducts';
import {CreativeOperations} from './CreativeOperations';
import {Sanmina} from './Sanmina';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import './App.css';

 
class App extends Component {
	render() {
		return(
		<React.Fragment>
			<NavigationBar />
				 <footer class="footer">
					<div class="container">
        				<span> &copy;{new Date().getFullYear()} Jay Topiwala | Powered with React Native</span>
					</div>
    			</footer>
				<Router>
					<Switch>
						<Route exact path="/portfolio" component={Home} />
						<Route path="/Work" component = {Work} />
						<Route path ="/Resume" component={Resume} />
						<Route path ="/PaymentsProducts" component={PaymentsProducts} />
						<Route path ="/CreativeOperations" component={CreativeOperations} />
						<Route path ="/Sanmina" component={Sanmina} />
					
					</Switch>
				</Router>
		</React.Fragment>
		);
	}
}

export default App;
