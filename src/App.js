import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import SectionHomePage from "./components/sectionhomepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import vocabulary from "./config/vocabulary";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

export default function App() {
  const classes = useStyles();
  const { sections, appName } = vocabulary;

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header appName={appName} sections={sections} />
          <main>
            <Switch>
              <Route exact path="/" children={<Home />} />
              <Route path="/:section" children={<SectionHomePage />} />
            </Switch>
          </main>
          <Footer />
        </Container>
      </React.Fragment>
    </Router>
  );
}
