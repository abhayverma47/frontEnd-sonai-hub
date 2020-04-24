import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import themee from "./utils/theme";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
// pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

// components
import Navbar from "./components/navbar";

const theme = createMuiTheme(themee);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
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
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
