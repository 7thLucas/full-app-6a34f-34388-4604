"use client";

import type { ScoreState } from "~/lib/game/tic-tac-toe";

interface ScorePanelProps {
  score: ScoreState;
  playerXColor: string;
  playerOColor: string;
}

interface ScoreColumnProps {
  label: string;
  value: number;
  color?: string;
}

function ScoreColumn({ label, value, color }: ScoreColumnProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-sm font-medium uppercase tracking-wide"
        style={{ color: color ?? "#6B7280" }}
      >
        {label}
      </span>
      <span
        className="text-3xl font-bold"
        style={{ color: color ?? "#1A1A2E" }}
      >
        {value}
      </span>
    </div>
  );
}

/**
 * Displays win/draw counters for both players.
 * Scores persist across Play Again resets.
 */
export function ScorePanel({ score, playerXColor, playerOColor }: ScorePanelProps) {
  return (
    <div
      className="w-full flex justify-around items-center px-6 py-4 rounded-xl bg-white"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <ScoreColumn label="X" value={score.X} color={playerXColor} />
      <ScoreColumn label="Draws" value={score.draws} />
      <ScoreColumn label="O" value={score.O} color={playerOColor} />
    </div>
  );
}
