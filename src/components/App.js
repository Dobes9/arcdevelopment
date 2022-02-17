import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/customsoftware" element={<h1>Custome Software</h1>} />
        <Route path="/mobileapps" element={<h1>Mobile Apps</h1>} />
        <Route path="/websites" element={<h1>Websites</h1>} />
        <Route path="/revolution" element={<h1>The Revolution</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
        <Route path="/estimate" element={<h1>Estimate</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
