import React from "react";
import Header from "./components/Header";
import Merc from "./components/Merc";
import Partners from "./components/Partners";
import About from "./components/About";
import Products from "./components/Products";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="scroll-smooth">
      <Header />
      <Merc></Merc>
      <Partners />
      <About></About>
      <Products />
      <Contacts />
      <Footer />
    </main>
  );
};

export default App;
