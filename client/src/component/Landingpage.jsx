import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>GRADUATION</h1>
        <p>Discover the legends of rap with a touch of opulence.</p>
      </header>

      <section className="section">
        <h2>Why GRADUATION?</h2>
        <p>Step into a world where rap legends reign supreme. Vote, explore, and immerse yourself in the culture.</p>
        <ul>
          <li>✨ Curated list of legendary rap artists</li>
          <li>💬 Vote for your favorite icons</li>
          <li>📖 Detailed artist stories and profiles</li>
          <li>🔥 Dynamic, constantly evolving rankings</li>
        </ul>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>Explore the Legends</h3>
          <p>Discover the timeless sounds of rap’s most influential artists.</p>
        </div>
        <div className="feature-box">
          <h3>Cast Your Vote</h3>
          <p>Choose who you think deserves a place among the top 10.</p>
        </div>
        <div className="feature-box">
          <h3>Track the Evolution</h3>
          <p>Watch the rankings shift as the rap community votes.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 GRADUATION. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
