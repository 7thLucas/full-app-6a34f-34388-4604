export type Player = "X" | "O";
export type Cell = Player | null;
export type Board = Cell[];

export type GameStatus = "playing" | "won" | "draw";

export interface GameState {
  board: Board;
  boardSize: number;
  currentPlayer: Player;
  status: GameStatus;
  winner: Player | null;
  winningLine: number[] | null;
}

export interface ScoreState {
  X: number;
  O: number;
  draws: number;
}

/**
 * Generates all win conditions for an N×N board (N-in-a-row wins).
 */
export function generateWinConditions(n: number): number[][] {
  const conditions: number[][] = [];

  // Rows
  for (let row = 0; row < n; row++) {
    const line: number[] = [];
    for (let col = 0; col < n; col++) line.push(row * n + col);
    conditions.push(line);
  }

  // Columns
  for (let col = 0; col < n; col++) {
    const line: number[] = [];
    for (let row = 0; row < n; row++) line.push(row * n + col);
    conditions.push(line);
  }

  // Main diagonal (top-left → bottom-right)
  conditions.push(Array.from({ length: n }, (_, i) => i * n + i));

  // Anti diagonal (top-right → bottom-left)
  conditions.push(Array.from({ length: n }, (_, i) => i * n + (n - 1 - i)));

  return conditions;
}

export function detectWinner(board: Board, boardSize: number): { winner: Player; line: number[] } | null {
  for (const line of generateWinConditions(boardSize)) {
    const cell = board[line[0]];
    if (cell && line.every((idx) => board[idx] === cell)) {
      return { winner: cell, line };
    }
  }
  return null;
}

export function isBoardFull(board: Board): boolean {
  return board.every((cell) => cell !== null);
}

export function createInitialBoard(boardSize: number): Board {
  return Array(boardSize * boardSize).fill(null);
}

export function applyMove(board: Board, index: number, player: Player): Board {
  const next = [...board];
  next[index] = player;
  return next;
}
