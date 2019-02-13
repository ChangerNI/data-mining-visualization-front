import React, { Component } from 'react';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Login from './Login';
import Guide from './Guide';

class App extends Component {

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path='/guide' component={Guide} />
                </Switch>
            </Router>
        );
    }
}

export default App;
