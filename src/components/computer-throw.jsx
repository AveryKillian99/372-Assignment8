/**
 * Name: Avery Killian
 * Date: 10.02.2025
 * CSC 372-01
 *
 * Displays the computer's move for Rock, Paper, Scissors.
 * Shows a question mark initially, cycles images during "thinking".
 */

import React from "react";
import "../style.css";

const ComputerThrow = ({ move }) => {
  // Determine which image to show
  const imgSrc = move ? `/images/${move}.PNG` : "/images/question-mark.PNG";
  const altText = move
    ? move.charAt(0).toUpperCase() + move.slice(1)
    : "Computer's Throw";

  return (
    <section id="computer-section">
      <h2>Computer Throw</h2>
      <img id="computer-throw" src={imgSrc} alt={altText} />
    </section>
  );
};

export default ComputerThrow;
