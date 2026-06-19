"use client";

import type { Cell } from "~/lib/game/tic-tac-toe";

interface BoardCellProps {
  value: Cell;
  index: number;
  isWinningCell: boolean;
  isDisabled: boolean;
  playerXColor: string;
  playerOColor: string;
  onMove: (index: number) => void;
}

/**
 * A single cell in the Tic-Tac-Toe board.
 * Highlighted green when it is part of a winning line.
 */
export function BoardCell({
  value,
  index,
  isWinningCell,
  isDisabled,
  playerXColor,
  playerOColor,
  onMove,
}: BoardCellProps) {
  const isEmpty = value === null;
  const isClickable = isEmpty && !isDisabled;

  const cellColor =
    value === "X"
      ? playerXColor
      : value === "O"
      ? playerOColor
      : "transparent";

  const winningStyle = isWinningCell
    ? { backgroundColor: "#F0FDF4", border: "2px solid #22C55E" }
    : { backgroundColor: "white", border: "2px solid #E5E7EB" };

  return (
    <button
      type="button"
      aria-label={`Cell ${index + 1}${value ? `, ${value}` : ""}`}
      disabled={!isClickable}
      onClick={() => onMove(index)}
      className="flex items-center justify-center rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        ...winningStyle,
        width: "100%",
        aspectRatio: "1 / 1",
        cursor: isClickable ? "pointer" : "default",
        backgroundColor: isWinningCell
          ? "#F0FDF4"
          : isEmpty && !isDisabled
          ? undefined
          : winningStyle.backgroundColor,
      }}
      onMouseEnter={(e) => {
        if (isClickable) {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F3F4F6";
        }
      }}
      onMouseLeave={(e) => {
        if (isClickable) {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white";
        }
      }}
    >
      <span
        className="font-bold select-none"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: cellColor,
          lineHeight: 1,
        }}
      >
        {value}
      </span>
    </button>
  );
}
