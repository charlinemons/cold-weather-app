import React from "react";
import "./App.css";

function App() {
  return (
    <div className="footer">
      <footer>
        <p>
          This project was coded by{" "}
          <a
            class="links"
            href="https://www.linkedin.com/in/charline-mons/"
            target="_blank"
            rel="noreferrer"
          >
            Charline Mons
          </a>{" "}
          and is{" "}
          <a
            class="links"
            href="https://github.com/charlinemons/cold-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            class="links"
            href="https://cold-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
