export type Player = "X" | "O";
export type Cell = Player | null;
export type Board = [
  Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell,
];

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

// 4×4 board: indices 0-15 laid out as:
//  0  1  2  3
//  4  5  6  7
//  8  9 10 11
// 12 13 14 15
const WIN_CONDITIONS: [number, number, number, number][] = [
  // Rows
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  // Columns
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  // Diagonals
  [0, 5, 10, 15],
  [3, 6, 9, 12],
];

export function detectWinner(board: Board): { winner: Player; line: number[] } | null {
  for (const [a, b, c, d] of WIN_CONDITIONS) {
    const cell = board[a];
    if (cell && cell === board[b] && cell === board[c] && cell === board[d]) {
      return { winner: cell, line: [a, b, c, d] };
    }
  }
  return null;
}

export function isBoardFull(board: Board): boolean {
  return board.every((cell) => cell !== null);
}

export function createInitialBoard(): Board {
  return [
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
  ];
}

export function applyMove(board: Board, index: number, player: Player): Board {
  const next = [...board] as Board;
  next[index] = player;
  return next;
}
