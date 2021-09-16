import React from "react";
import Home from "./Components/Layout/Home";
import FormSchema from "./Components/Form/FormSchema";
import Authenticate from "./Components/Layout/Authenticate";
import ResponseSchema from "./Components/Response/ResponseSchema";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  // const isLoggedIn = true;
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/"> */}
          {/* {isLoggedIn ? <Redirect to="/home" /> : <Authenticate />} */}
          {/* </Route> */}
          <Route path="/" exact component={Authenticate} />
          <Route path="/home" exact component={Home} />
          <Route path="/form/:formId/edit" component={FormSchema} />
          <Route path="/form/:formId/view" component={ResponseSchema} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
