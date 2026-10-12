import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./pages/navbar";
import Crome from "./pages/crome";
import Subcontracting from "./pages/subcontracting";
import Subcontractor from "./pages/subcontractor";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/subcontracting" replace />}
        />

        <Route
          path="/crome"
          element={<Crome />}
        />

        <Route
          path="/subcontracting"
          element={<Subcontracting />}
        />

        <Route
          path="/subcontractor"
          element={<Subcontractor />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;