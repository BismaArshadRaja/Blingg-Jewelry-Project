import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navigation/navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./navigation/Dashboard";
import Login from "./pages/Login";
import MainStack from "./navigation/MainStack";

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setRole(user?.role || "user");
  }, []);

  if (role === null) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {role === "user" && (
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Navbar />
                <MainStack role={role} />
                <Footer />
              </>
            }
          />
        )}

        {role !== "user" && (
          <Route path="/*" element={<Dashboard />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
