import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

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
  <Analytics />
</BrowserRouter>
  );
}

export default App;