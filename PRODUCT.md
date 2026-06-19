# TixTax — Tic-Tac-Toe

## Product
A lightweight, browser-based two-player Tic-Tac-Toe game (branded as TixTax). Players take turns marking X and O on a 3×3 grid. The first to align three marks (row, column, or diagonal) wins. If all nine cells fill with no winner, the game ends in a draw.

## Users
Casual players of any age seeking a quick, zero-setup two-player game on a shared device. No accounts, no downloads — open the URL and play.

## Positioning
The simplest version of the game. Opens instantly. No friction between "want to play" and "playing."

## Brand / Tone
Friendly, minimal, game-first. Clean UI, clear turn indicators, satisfying win state.

## Core Features
- Interactive 3×3 game board (clickable cells)
- Turn-based play: X always goes first, players alternate
- Win detection: checks all 8 win conditions after every move
- Draw detection: triggers when board is full with no winner
- Game status display: always shows current turn, winner, or draw
- Score tracking: persistent score counter for X wins, O wins, and draws across rounds
- Play Again button: one-click reset to a fresh board (scores persist)

## Scope
Single-page app. Local two-player (same device). No accounts, no backend persistence, no online multiplayer.

## Strategic Principles
- Zero friction: load the URL and play immediately
- Clarity: always show whose turn it is and what the outcome is
- Lightweight: minimal dependencies, fast render