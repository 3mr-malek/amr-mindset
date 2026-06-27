import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RecoveryCourse from "./pages/RecoveryCourse";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
<BrowserRouter>
  <ScrollToTop />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/course/recovery"
      element={<RecoveryCourse />}
    />
  </Routes>
</BrowserRouter>
  );
}

export default App;