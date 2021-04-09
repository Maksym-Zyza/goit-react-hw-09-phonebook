import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
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

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<ViwsLoader />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo={"/contacts"}>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo={"/contacts"}>
            <LoginView />
          </PublicRoute>

          <PrivateRaute path="/contacts" redirectTo={"/login"}>
            <ContactsView />
          </PrivateRaute>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;

// ===== class =====
// componentDidMount() {
//   this.props.onGetCurrentToProps();
// }

// const mapDispatchToProps = {
//   onGetCurrentToProps: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
