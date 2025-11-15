/**
 * Name: Avery Killian
 * Date: 11.14.2025
 * CSC 372-01
 *
 * ResultDisplay component shows the outcome of the current round (win, lose, tie)
 * based on props passed from App.jsx.
 */

import React from "react";

const ResultDisplay = ({ outcome }) => {
  return (
    <section id="outcome-section">
      <h2>Outcome</h2>
      <p id="outcome-text">{outcome}</p>
    </section>
  );
};

export default ResultDisplay;
