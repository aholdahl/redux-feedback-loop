import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Confirmation from '../Confirmation/Confirmation.jsx';
import Admin from '../Admin/Admin.jsx';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Feeling</Link>
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
              <li>
                <Link to="/review">Review</Link>
              </li>
              <li>
                <Link to="/confirmation">Confirmation</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav> */}
          <Route path="/" exact component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
