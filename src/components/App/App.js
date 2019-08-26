import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route/*, Link*/ } from 'react-router-dom';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Confirmation from '../Confirmation/Confirmation.jsx';
import Admin from '../Admin/Admin.jsx';
// import swal from 'sweetalert';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00695c',
    },
    secondary: {
      main: '#ffd740',
    }
  }
})

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <br />
            {/* <nav>
            <ul className="myLists">
              <li className="list-group-item">
                <Link to="/">Feeling</Link>
              </li>
                <li className="list-group-item">
                <Link to="/understanding">Understanding</Link>
              </li>
                <li className="list-group-item">
                <Link to="/support">Support</Link>
              </li>
                <li className="list-group-item">
                <Link to="/comments">Comments</Link>
              </li>
                <li className="list-group-item">
                <Link to="/review">Review</Link>
              </li>
                <li className="list-group-item">
                <Link to="/confirmation">Confirmation</Link>
              </li>
                <li className="list-group-item">
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
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
