import {BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import MatchSuggestion from './components/MatchSuggestionComponent';
import Profile from './components/ProfileComponent';
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Login} />
          <Route path="/sign-up" component={SignUp} />
				  <PrivateRoute path="/match-suggestions" component={MatchSuggestion} />
				  <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;
