import Login from "./pages/Login";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Workspaces from "./pages/Workspaces";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Workspaces />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
