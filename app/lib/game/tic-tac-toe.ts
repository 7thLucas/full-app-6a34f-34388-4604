export type Player = "X" | "O";
export type Cell = Player | null;
export type Board = [
  Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell,
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

// 5×5 board: indices 0-24 laid out as:
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18 19
// 20 21 22 23 24
const WIN_CONDITIONS: [number, number, number, number, number][] = [
  // Rows
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  // Columns
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  // Diagonals
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];

export function detectWinner(board: Board): { winner: Player; line: number[] } | null {
  for (const [a, b, c, d, e] of WIN_CONDITIONS) {
    const cell = board[a];
    if (cell && cell === board[b] && cell === board[c] && cell === board[d] && cell === board[e]) {
      return { winner: cell, line: [a, b, c, d, e] };
    }
  }
  return null;
}

export function isBoardFull(board: Board): boolean {
  return board.every((cell) => cell !== null);
}

export function createInitialBoard(): Board {
  return [
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
  ];
}

export function applyMove(board: Board, index: number, player: Player): Board {
  const next = [...board] as Board;
  next[index] = player;
  return next;
}
