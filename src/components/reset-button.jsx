/**
 * Name: Avery Killian
 * Date: 11.14.2025
 * CSC 372-01
 *
 * ResetButton component triggers reset of the game state and score when clicked.
 */

import React from "react";

const ResetButton = ({ onReset }) => {
  return (
    <button id="reset-btn" onClick={onReset}>
      Reset Score
    </button>
  );
};

export default ResetButton;
