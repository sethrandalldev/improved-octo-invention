import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Workspaces from "./pages/Workspaces";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import AccountManagement from "./pages/AccountManagement";
import Projects from "./pages/Projects";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <ProtectedRoute exact path="/">
            <Project />
          </ProtectedRoute>
          <ProtectedRoute exact path="/workspaces">
            <Workspaces />
          </ProtectedRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <ProtectedRoute exact path="/account">
            <Account />
          </ProtectedRoute>
          <ProtectedRoute exact path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute exact path="/account-management">
            <AccountManagement />
          </ProtectedRoute>
          <ProtectedRoute exact path="/projects">
            <Projects />
          </ProtectedRoute>
          <ProtectedRoute exact path="/tickets">
            <Tickets />
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
