/**
 * Name: Avery Killian
 * Date: 11.14.2025
 * CSC 372-01
 *
 * App.jsx is the root component for the Rock-Paper-Scissors game.
 * It manages the overall state of the game, including player and computer moves,
 * outcome determination, score tracking, and reset functionality.
 */
import React, { useState, useEffect } from "react";
import PlayerThrow from "./components/player-throw";
import ComputerThrow from "./components/computer-throw";
import ResultDisplay from "./components/result-display";
import ScoreBoard from "./components/score-board";
import ResetButton from "./components/reset-button";
import "./index.css";
import "./style.css";

const App = () => {
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [outcome, setOutcome] = useState("Make your move!");
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  // Handle player choice
  const handlePlayerSelect = (move) => {
    setPlayerMove(move);
    startComputerTurn(move);
  };

  const startComputerTurn = (playerChoice) => {
    let count = 0;
    const moves = ["rock", "paper", "scissors"];
    const interval = setInterval(() => {
      setComputerMove(moves[count % 3]);
      count++;
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      const compMove = moves[Math.floor(Math.random() * 3)];
      setComputerMove(compMove);
      determineWinner(playerChoice, compMove);
    }, 3000);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setOutcome("It's a tie!");
      setScore((prev) => ({ ...prev, ties: prev.ties + 1 }));
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setOutcome("You win!");
      setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else {
      setOutcome("Computer wins!");
      setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
    }
  };

  const resetGame = () => {
    setPlayerMove(null);
    setComputerMove(null);
    setOutcome("Make your move!");
    setScore({ wins: 0, losses: 0, ties: 0 });
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <PlayerThrow selectedMove={playerMove} onSelect={handlePlayerSelect} />
      <ComputerThrow move={computerMove} />
      <ResultDisplay outcome={outcome} />
      <ScoreBoard score={score} />
      <ResetButton onReset={resetGame} />
    </div>
  );
};

export default App;
