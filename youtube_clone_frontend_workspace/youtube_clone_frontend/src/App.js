import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";

// PUBLIC_INTERFACE
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // PUBLIC_INTERFACE
  const toggleSidebar = () => {
    setSidebarOpen((open) => !open);
  };

  return (
    <div className={`app-root${sidebarOpen ? "" : " sidebar-collapsed"}`}>
      <Header onMenuClick={toggleSidebar} />
      <Sidebar open={sidebarOpen} />
      <main className="main-content">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
