import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { MarketRate } from "./pages/MarketRate";
import AppLayout from "./components/layout/AppLayout";

function App() {

  // 2nd Way
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/marketrates" element={<MarketRate />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
