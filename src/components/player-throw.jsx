/**
 * Name: Avery Killian
 * Date: 10.02.2025
 * CSC 372-01
 *
 * Displays the player's rock, paper, scissors choices and handles both
 * mouse clicks and keyboard selection (Enter/Space).
 */
import React from "react";
import "../style.css";

const moves = ["rock", "paper", "scissors"];

const PlayerThrow = ({ selectedMove, onSelect }) => {
  const handleKeyDown = (e, move) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(move);
    }
  };

  return (
    <section id="player-section">
      <h2>Your Throw</h2>
      <div className="player-choices">
        {moves.map((move) => (
          <img
            key={move}
            src={`/images/${move}.PNG`}
            alt={move.charAt(0).toUpperCase() + move.slice(1)}
            className={selectedMove === move ? "selected" : ""}
            tabIndex={0}
            onClick={() => onSelect(move)}
            onKeyDown={(e) => handleKeyDown(e, move)}
          />
        ))}
      </div>
    </section>
  );
};

export default PlayerThrow;
