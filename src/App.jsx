import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Routing/Router";

function App() {
  return (
      <div className="flex">
        <Sidebar />
        <Navbar />
        <Router />
        <Footer />
      </div>
  );
}

export default App;
