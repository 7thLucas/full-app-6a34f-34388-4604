export type Player = "X" | "O";
export type Cell = Player | null;
export type Board = [
  Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell,
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

// 6×6 board: indices 0-35 laid out as:
//  0  1  2  3  4  5
//  6  7  8  9 10 11
// 12 13 14 15 16 17
// 18 19 20 21 22 23
// 24 25 26 27 28 29
// 30 31 32 33 34 35
const WIN_CONDITIONS: [number, number, number, number, number, number][] = [
  // Rows
  [0, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35],
  // Columns
  [0, 6, 12, 18, 24, 30],
  [1, 7, 13, 19, 25, 31],
  [2, 8, 14, 20, 26, 32],
  [3, 9, 15, 21, 27, 33],
  [4, 10, 16, 22, 28, 34],
  [5, 11, 17, 23, 29, 35],
  // Diagonals
  [0, 7, 14, 21, 28, 35],
  [5, 10, 15, 20, 25, 30],
];

export function detectWinner(board: Board): { winner: Player; line: number[] } | null {
  for (const [a, b, c, d, e, f] of WIN_CONDITIONS) {
    const cell = board[a];
    if (cell && cell === board[b] && cell === board[c] && cell === board[d] && cell === board[e] && cell === board[f]) {
      return { winner: cell, line: [a, b, c, d, e, f] };
    }
  }
  return null;
}

export function isBoardFull(board: Board): boolean {
  return board.every((cell) => cell !== null);
}

export function createInitialBoard(): Board {
  return [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
  ];
}

export function applyMove(board: Board, index: number, player: Player): Board {
  const next = [...board] as Board;
  next[index] = player;
  return next;
}
