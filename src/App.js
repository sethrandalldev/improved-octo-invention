import Login from "./pages/Login";
import "./App.css";
import Project from "./pages/Project";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Projects from "./pages/Projects.js";
import Tickets from "./pages/Tickets";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <ProtectedRoute>
              <Project />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:id/tickets"
          element={
            <ProtectedRoute>
              <Tickets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets/:id"
          element={
            <ProtectedRoute>
              <Ticket />
            </ProtectedRoute>
          }
        />
        <Route exact path="/register" element={<Register />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
