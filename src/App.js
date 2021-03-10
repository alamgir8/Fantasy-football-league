
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Team from './Components/Team/Team';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
          <Router>
                <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route path="/home">
                    <Home/>
                  </Route>
                  <Route path="/team/:idTeam">
                    <Team />
                  </Route>
                  <Route path="*">
                    <NoMatch />
                  </Route>
                </Switch>
        </Router>
  );
}

export default App;
