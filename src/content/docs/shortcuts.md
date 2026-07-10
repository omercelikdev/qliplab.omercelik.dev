---
title: Keyboard shortcuts
description: The global toggle, quick-paste, diff mode, and list navigation — everything QlipLab responds to.
---

QlipLab is built to be driven from the keyboard. The one shortcut worth memorizing is the global toggle;
the rest follow naturally once the window is open.

## Global

| Shortcut | Action |
|----------|--------|
| **`Alt+Q`** | Summon or dismiss the QlipLab window, over whatever app you're in |

`Alt+Q` is the default and it's **configurable** — open **Settings** and record any combination you like.
This is the only OS-level shortcut; it works from anywhere, which is why macOS needs the Accessibility
permission to register it.

## Quick-paste

| Shortcut | Action |
|----------|--------|
| **`Cmd+1`…`Cmd+9`** (macOS) / **`Ctrl+1`…`Ctrl+9`** (Windows / Linux) | Paste the 1st–9th clip in the list |

Quick-paste works even while you're typing in the search box, so you can filter to what you want and fire
it off without reaching for the mouse.

## Diff mode

| Shortcut | Action |
|----------|--------|
| **`Alt+D`** | Toggle diff-selection mode |
| *(then select two clips)* | Open the [diff](/diff/) view for that pair |
| **`Escape`** | Exit diff mode |

## Navigation

| Shortcut | Action |
|----------|--------|
| **`↑`** / **`↓`** | Move through the list |
| **`Enter`** | Select the highlighted clip and paste it |
| **`Escape`** | Close the preview, cancel the current mode, or exit diff |

`Escape` is layered: it closes whatever is most immediately open — a preview first, then a mode, then diff
selection — so one key always backs you out one step.

## Snippet triggers

Snippets and vault items can carry a **trigger** — a short string that expands into the full content as
you type it, in any application. That's not a fixed keystroke but text you define per item. See
[Snippets & text expansion](/snippets/).
