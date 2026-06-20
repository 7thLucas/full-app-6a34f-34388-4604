# TixTax

## Product
A lightweight, browser-based two-player Tic-Tac-Toe game. Players take turns marking X and O on a 10×10 grid. The first to align ten marks in a row, column, or diagonal wins. If all 100 cells fill with no winner, the game ends in a draw. Score tracking persists across rounds in the same session.

## Users
Personal fun side project. Primarily solo use — one person playing both sides, or two people on the same device. No accounts, no downloads — open the URL and play.

## Positioning
The simplest version of the game. Opens instantly. No friction between "want to play" and "playing."

## Brand / Tone
Friendly, minimal, game-first. Clean UI, clear turn indicators, satisfying win state.

## Core Features
- Interactive 10×10 game board (clickable cells, 100 total)
- Turn-based play: X always goes first, players alternate
- Win detection: checks all 22 win conditions (10 rows, 10 columns, 2 diagonals) after every move
- Draw detection: triggers when all 100 cells are filled with no winner
- Game status display: always shows current turn, winner, or draw
- Score tracking: running tally of X wins, O wins, and draws across rounds
- Play Again button: one-click reset to a fresh board (scores persist)

## Scope
Single-page app. Local two-player (same device). No accounts, no backend persistence, no online multiplayer.

## Strategic Principles
- Zero friction: load the URL and play immediately
- Clarity: always show whose turn it is and what the outcome is
- Lightweight: minimal dependencies, fast render
