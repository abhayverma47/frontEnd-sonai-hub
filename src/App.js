import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

// components
import Navbar from "./components/navbar";

const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "rgba(56, 55, 55, 1)",
      default: "rgba(74, 74, 74, 1)",
    },
    primary: {
      light: "rgba(252, 239, 91, 1)",
      main: "rgba(248, 231, 28, 1)",
      dark: "rgba(46, 45, 6, 1)",
      contrastText: "rgba(0, 0, 0, 1)",
    },
    secondary: {
      light: "rgba(116, 113, 114, 1)",
      main: "rgba(74, 74, 74, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "rgba(248, 231, 28, 1)",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(155, 155, 155, 1)",
      disabled: "rgba(74, 74, 74, 1)",
      hint: "rgba(184, 233, 134, 1)",
    },
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
