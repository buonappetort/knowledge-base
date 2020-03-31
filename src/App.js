import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/topnav";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import CenterHomePage from "./components/centerhomepage";
import ComponentHomePage from "./components/componenthomepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import vocabulary from "./config/vocabulary";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

export default function App() {
  const classes = useStyles();
  const { centers, appName, components } = vocabulary;

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <TopNav appName={appName} components={components} />
        <Container maxWidth="lg">
          <Header appName={appName} centers={centers} />
          <main>
            <Switch>
              <Route exact path="/ia" children={<Home centers={centers} />} />
              <Route path="/ia/:center" children={<CenterHomePage />} />
              <Route
                path="/component/:component"
                children={<ComponentHomePage />}
              />
              <Redirect to="/ia" />
              <Route path="*">
                <div>page doesn't exist</div>
              </Route>
            </Switch>
          </main>
          <Footer />
        </Container>
      </React.Fragment>
    </Router>
  );
}
