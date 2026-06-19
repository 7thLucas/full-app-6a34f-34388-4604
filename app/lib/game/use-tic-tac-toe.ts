"use client";

import { useCallback, useState } from "react";
import {
  applyMove,
  createInitialBoard,
  detectWinner,
  isBoardFull,
  type Board,
  type GameState,
  type Player,
  type ScoreState,
} from "./tic-tac-toe";

const INITIAL_GAME_STATE: GameState = {
  board: createInitialBoard(),
  currentPlayer: "X",
  status: "playing",
  winner: null,
  winningLine: null,
};

const INITIAL_SCORE: ScoreState = { X: 0, O: 0, draws: 0 };

/**
 * Manages all Tic-Tac-Toe game state: board, turns, win/draw detection, and score tracking.
 */
export function useTicTacToe() {
  const [game, setGame] = useState<GameState>(INITIAL_GAME_STATE);
  const [score, setScore] = useState<ScoreState>(INITIAL_SCORE);

  const makeMove = useCallback((index: number) => {
    setGame((prev) => {
      if (prev.status !== "playing") return prev;
      if (prev.board[index] !== null) return prev;

      const nextBoard = applyMove(prev.board, index, prev.currentPlayer);
      const result = detectWinner(nextBoard);

      if (result) {
        setScore((s) => ({ ...s, [result.winner]: s[result.winner] + 1 }));
        return {
          board: nextBoard,
          currentPlayer: prev.currentPlayer,
          status: "won",
          winner: result.winner,
          winningLine: result.line,
        };
      }

      if (isBoardFull(nextBoard)) {
        setScore((s) => ({ ...s, draws: s.draws + 1 }));
        return {
          board: nextBoard,
          currentPlayer: prev.currentPlayer,
          status: "draw",
          winner: null,
          winningLine: null,
        };
      }

      return {
        board: nextBoard,
        currentPlayer: prev.currentPlayer === "X" ? "O" : "X",
        status: "playing",
        winner: null,
        winningLine: null,
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setGame(INITIAL_GAME_STATE);
  }, []);

  const resetAll = useCallback(() => {
    setGame(INITIAL_GAME_STATE);
    setScore(INITIAL_SCORE);
  }, []);

  return { game, score, makeMove, resetGame, resetAll };
}
