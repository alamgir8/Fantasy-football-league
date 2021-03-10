
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Team from './Components/Team/Team';
import Header from './Components/Header/Header';

function App() {
  return (
   
          <Router>
             <Header/>
                <div className="hero-section">
                     <div className="container">
                          <h1 className='text-center text-white'>Sports Mania</h1>
                     </div>
                </div>
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
