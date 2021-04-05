import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import * as authOperations from "./redux/auth/auth-operations";
import PrivateRaute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import ViwsLoader from "./components/LoaderViws";

const HomeView = lazy(() => import("./views/HomeView"));
const ContactsView = lazy(() => import("./views/ContactsView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));

class App extends React.Component {
  componentDidMount() {
    this.props.onGetCurrentToProps();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<ViwsLoader />}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo={"/contacts"}
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo={"/contacts"}
              component={LoginView}
            />
            <PrivateRaute
              path="/contacts"
              redirectTo={"/login"}
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentToProps: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
