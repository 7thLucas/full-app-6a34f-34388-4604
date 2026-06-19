"use client";

import { useConfigurables } from "~/modules/configurables";
import { useTicTacToe } from "~/lib/game/use-tic-tac-toe";
import { ScorePanel } from "~/components/game/ScorePanel";
import { StatusBar } from "~/components/game/StatusBar";
import { GameBoard } from "~/components/game/GameBoard";

export default function IndexPage() {
  const { config, loading } = useConfigurables();
  const { game, score, makeMove, resetGame } = useTicTacToe();

  const gameTitle = loading ? "TixTax" : (config?.gameTitle ?? "TixTax");
  const gameSubtitle = loading ? "Two-player Tic-Tac-Toe" : (config?.gameSubtitle ?? "Two-player Tic-Tac-Toe");
  const showSubtitle = loading ? true : (config?.showSubtitle ?? true);
  const playAgainLabel = loading ? "Play Again" : (config?.playAgainLabel ?? "Play Again");
  const playerXColor = loading ? "#E74C3C" : (config?.playerXColor ?? "#E74C3C");
  const playerOColor = loading ? "#3498DB" : (config?.playerOColor ?? "#3498DB");
  const primaryColor = loading ? "#1A1A2E" : (config?.brandColor?.primary ?? "#1A1A2E");

  const isGameOver = game.status !== "playing";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <div className="w-full max-w-sm flex flex-col gap-5">
        {/* Header */}
        <div className="text-center">
          <h1
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2rem)",
              color: primaryColor,
            }}
          >
            {gameTitle}
          </h1>
          {showSubtitle && (
            <p className="mt-1 text-sm font-medium" style={{ color: "#6B7280" }}>
              {gameSubtitle}
            </p>
          )}
        </div>

        {/* Score */}
        <ScorePanel
          score={score}
          playerXColor={playerXColor}
          playerOColor={playerOColor}
        />

        {/* Status */}
        <StatusBar
          game={game}
          playerXColor={playerXColor}
          playerOColor={playerOColor}
        />

        {/* Board */}
        <GameBoard
          game={game}
          playerXColor={playerXColor}
          playerOColor={playerOColor}
          onMove={makeMove}
        />

        {/* Play Again */}
        {isGameOver && (
          <button
            type="button"
            onClick={resetGame}
            className="w-full rounded-lg text-white font-semibold text-base transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              backgroundColor: primaryColor,
              padding: "12px 24px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2D2D44";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = primaryColor;
            }}
          >
            {playAgainLabel}
          </button>
        )}
      </div>
    </div>
  );
}
