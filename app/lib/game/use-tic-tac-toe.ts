"use client";

import { useCallback, useEffect, useState } from "react";
import {
  applyMove,
  createInitialBoard,
  detectWinner,
  isBoardFull,
  type GameState,
  type Player,
  type ScoreState,
} from "./tic-tac-toe";

const INITIAL_SCORE: ScoreState = { X: 0, O: 0, draws: 0 };

function makeInitialGameState(boardSize: number): GameState {
  return {
    board: createInitialBoard(boardSize),
    boardSize,
    currentPlayer: "X",
    status: "playing",
    winner: null,
    winningLine: null,
  };
}

/**
 * Manages all Tic-Tac-Toe game state: board, turns, win/draw detection, and score tracking.
 * Accepts a boardSize so the board can be reconfigured without code changes.
 */
export function useTicTacToe(boardSize: number = 3) {
  const [game, setGame] = useState<GameState>(() => makeInitialGameState(boardSize));
  const [score, setScore] = useState<ScoreState>(INITIAL_SCORE);

  // Reset the entire game when boardSize changes (e.g. live config update)
  useEffect(() => {
    setGame(makeInitialGameState(boardSize));
    setScore(INITIAL_SCORE);
  }, [boardSize]);

  const makeMove = useCallback((index: number) => {
    setGame((prev) => {
      if (prev.status !== "playing") return prev;
      if (prev.board[index] !== null) return prev;

      const nextBoard = applyMove(prev.board, index, prev.currentPlayer);
      const result = detectWinner(nextBoard, prev.boardSize);

      if (result) {
        setScore((s) => ({ ...s, [result.winner]: s[result.winner] + 1 }));
        return {
          ...prev,
          board: nextBoard,
          status: "won",
          winner: result.winner,
          winningLine: result.line,
        };
      }

      if (isBoardFull(nextBoard)) {
        setScore((s) => ({ ...s, draws: s.draws + 1 }));
        return {
          ...prev,
          board: nextBoard,
          status: "draw",
          winner: null,
          winningLine: null,
        };
      }

      return {
        ...prev,
        board: nextBoard,
        currentPlayer: prev.currentPlayer === "X" ? "O" : "X",
        status: "playing",
        winner: null,
        winningLine: null,
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setGame(makeInitialGameState(boardSize));
  }, [boardSize]);

  const resetAll = useCallback(() => {
    setGame(makeInitialGameState(boardSize));
    setScore(INITIAL_SCORE);
  }, [boardSize]);

  return { game, score, makeMove, resetGame, resetAll };
}
