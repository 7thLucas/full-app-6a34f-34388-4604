"use client";

import type { GameState } from "~/lib/game/tic-tac-toe";

interface StatusBarProps {
  game: GameState;
  playerXColor: string;
  playerOColor: string;
}

/**
 * Renders one descriptive line that reflects current turn, winner, or draw.
 */
export function StatusBar({ game, playerXColor, playerOColor }: StatusBarProps) {
  const { status, currentPlayer, winner } = game;

  let text: string;
  let color: string;

  if (status === "won" && winner) {
    text = `${winner} wins!`;
    color = winner === "X" ? playerXColor : playerOColor;
  } else if (status === "draw") {
    text = "It's a draw!";
    color = "#F59E0B";
  } else {
    text = `${currentPlayer}'s turn`;
    color = currentPlayer === "X" ? playerXColor : playerOColor;
  }

  return (
    <p
      key={text}
      className="text-lg font-semibold text-center transition-all duration-200 animate-fade-in"
      style={{ color }}
    >
      {text}
    </p>
  );
}
