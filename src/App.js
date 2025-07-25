import React from "react";
import TechkkenCursor from "./components/cursor/cursor";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Prizes from "./pages/Prizes";
import Sponsors from "./pages/Sponsors";

import "./App.css";

import FAQs from "./pages/FAQs";
import Footer from "./components/Footer";
import Hero2 from "./components/New";

import Timer from "./components/Timer";
import Tracks from "./components/Tracks";
import Teamlist from "./pages/Teamlist";
function App() {
  return (
    <div className="App">
      <TechkkenCursor />
      <Navbar />
      <main style={{ padding: 0, margin: 0 }}>
        <section id="home" style={{ padding: 0, margin: 0 }}>
      
          <Hero2 />
        </section>
        <section id="judging" style={{ padding: 0, margin: 0 }}>
          <Timer />
        </section>
        <section id="about" style={{ padding: 0, margin: 0 }}>
          <About />
        </section>

        <section id="timeline" style={{ padding: 0, margin: 0 }}>
          <Schedule />
        </section>

        <section id="tracks" style={{ padding: 0, margin: 0 }}>
          <Tracks />
        </section>

        <section id="prizes" style={{ padding: 0, margin: 0 }}>
          <Prizes />
        </section>
        <section id="sponsors" style={{ padding: 0, margin: 0 }}>
          <Sponsors />
        </section>
        <section id="team" style={{ padding: 0, margin: 0 }}>
          <Teamlist />
        </section>
        <section id="faqs" style={{ padding: 0, margin: 0 }}>
          <FAQs />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
