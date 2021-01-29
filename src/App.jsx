import React from "react";
import { Route, Switch } from "react-router-dom";
import { IonApp } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Starter from "./pages/Starter/Starter";
import SignUp from "./pages/SignUp/SignUp";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  StylesProvider,
} from "@material-ui/core";
import Login from "./pages/Login/Login";
import Step3b from "./components/Step3/Step3b/Step3b";
import Step2 from "./components/Step2/Step2";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000084",
    },
    secondary: {
      main: "#aaa",
    },
    light: "#EEF2F8",
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <IonApp style={{ background: "#fff" }}>
          <Switch>
            <Route path="/passcode" component={Step2} />
            <Route path="/otp" component={Step3b} />
            <Route path="/login" component={Login} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/signUp" component={SignUp} />
            <Route exact path="/" component={Starter} />
          </Switch>
        </IonApp>
      </StylesProvider>
    </MuiThemeProvider>
  );
};

export default App;
