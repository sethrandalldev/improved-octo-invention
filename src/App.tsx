import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Workspaces from "./pages/Workspaces";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <ProtectedRoute exact path="/">
            <Project />
          </ProtectedRoute>
          <ProtectedRoute path="/workspaces">
            <Workspaces />
          </ProtectedRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <ProtectedRoute path="/account">
            <Account />
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
