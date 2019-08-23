import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';

class App extends Component {
  
  render() {
    console.log('Hello from App. Don\'t forget to import axios.')
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <nav>
            <ul>
              <li>
                <Link to="/feeling">Feeling</Link>
              </li>
              <li>
                <Link to="/understanding">Understanding</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
            </ul>
          </nav>
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(App);
