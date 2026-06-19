"use client";

import type { GameState } from "~/lib/game/tic-tac-toe";
import { BoardCell } from "./BoardCell";

interface GameBoardProps {
  game: GameState;
  playerXColor: string;
  playerOColor: string;
  onMove: (index: number) => void;
}

/**
 * Renders the N×N game grid. Column count is driven by game.boardSize.
 * Delegates individual cell rendering to BoardCell.
 */
export function GameBoard({ game, playerXColor, playerOColor, onMove }: GameBoardProps) {
  const { board, winningLine, status, boardSize } = game;
  const isDisabled = status !== "playing";

  return (
    <div
      className="w-full rounded-2xl p-4 bg-white"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
    >
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
      >
        {board.map((cell, index) => (
          <BoardCell
            key={index}
            value={cell}
            index={index}
            isWinningCell={winningLine?.includes(index) ?? false}
            isDisabled={isDisabled}
            playerXColor={playerXColor}
            playerOColor={playerOColor}
            onMove={onMove}
          />
        ))}
      </div>
    </div>
  );
}
