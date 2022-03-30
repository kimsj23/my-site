import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Card">
        <div className="CardImageMain CardImage1"></div>
        <ul>
          <li className="Html">HTML</li>
          <li className="Css">CSS</li>
          <li className="Javascript">Javascript</li>
          <li className="React">React</li>
        </ul>
        <h2>Stocks App</h2>
        <p>
          Website that shows the hottest stocks in play for the day. Utilizes
          third-party API from YH Finance to grab data, manipulate, and populate
          in tabular format.
        </p>
        <a
          href="https://stk-app.netlify.app/"
          className="Portbutton"
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
