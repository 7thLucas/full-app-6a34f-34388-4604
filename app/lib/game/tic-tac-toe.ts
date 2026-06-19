export type Player = "X" | "O";
export type Cell = Player | null;
export type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

export type GameStatus = "playing" | "won" | "draw";

export interface GameState {
  board: Board;
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

const WIN_CONDITIONS: [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function detectWinner(board: Board): { winner: Player; line: number[] } | null {
  for (const [a, b, c] of WIN_CONDITIONS) {
    const cell = board[a];
    if (cell && cell === board[b] && cell === board[c]) {
      return { winner: cell, line: [a, b, c] };
    }
  }
  return null;
}

export function isBoardFull(board: Board): boolean {
  return board.every((cell) => cell !== null);
}

export function createInitialBoard(): Board {
  return [null, null, null, null, null, null, null, null, null];
}

export function applyMove(board: Board, index: number, player: Player): Board {
  const next = [...board] as Board;
  next[index] = player;
  return next;
}
