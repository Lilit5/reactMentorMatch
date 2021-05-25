import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import MatchSuggestion from './components/MatchSuggestionComponent';
import Profile from './components/ProfileComponent';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/match-suggestions" component={MatchSuggestion} />
          <Route path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;
