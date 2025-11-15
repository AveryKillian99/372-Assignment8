/**
 * Name: Avery Killian
 * Date: 11.14.2025
 * CSC 372-01
 *
 * ScoreBoard component displays the current score (wins, losses, ties)
 * and updates dynamically based on props from App.jsx.
 */

import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <section id="score-section">
      <h2>Score</h2>
      <p>Wins: {score.wins}</p>
      <p>Losses: {score.losses}</p>
      <p>Ties: {score.ties}</p>
    </section>
  );
};

export default ScoreBoard;
