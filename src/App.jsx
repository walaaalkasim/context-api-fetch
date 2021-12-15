import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import "./App.css";

const App = () => {
  return (
    <main>
      <Header />
      <MainContent />
      <Footer />
    </main>
  );
};

export default App;
