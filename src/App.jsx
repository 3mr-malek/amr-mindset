import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RecoveryCourse from "./pages/RecoveryCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/course/recovery"
          element={<RecoveryCourse />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;