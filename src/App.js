import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import './App.css';
import Nav from "./components/Nav/nav"
import Portfolio from "./pages/Portfolio"
import Footer from "./components/Footer/footer"
import NoMatch from "./pages/NoMatch"
import Resume from "./pages/Resume"

function App() {
  return (
    <div className="container">
    <Router>
      <Nav/>
      <Switch>
        <Route exact path={["/", "/portfolio-react"]}>
        <Home />
        </Route>
        <Route exact path={"/portfolio"}>
        <Portfolio />
        </Route>
        <Route exact path={"/resume"}>
        <Resume />
        </Route>
        <Route path={"*"}>
          <NoMatch />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
