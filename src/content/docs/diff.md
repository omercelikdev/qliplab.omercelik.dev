---
title: Diff
description: Compare any two clips side-by-side in a real Monaco diff, with syntax coloring from the detected format.
---

Two API responses. A config before and after an edit. The JSON you expected versus the JSON you got.
QlipLab compares any two clips from your history without a separate diff tool.

## How to diff

1. Press **`Alt+D`** to enter diff-selection mode.
2. Click the two clips you want to compare.
3. The diff opens as soon as the second is selected.

Press **`Escape`** to leave diff mode. (See [Keyboard shortcuts](/shortcuts/).)

## What you get

The comparison runs in a real [Monaco](https://microsoft.github.io/monaco-editor/) diff editor — the same
engine behind VS Code — not a homegrown line matcher. That means:

- **Line-level and intra-line** highlighting: you see which lines changed *and* which characters within
  them.
- **Syntax coloring** driven by the clips' [detected format](/format-detection/), so a JSON diff reads
  like JSON and a SQL diff reads like SQL.
- **Two view modes** you can toggle: **side-by-side** (old on the left, new on the right) and **inline**
  (changes stacked in one column).
- **Read-only** — the diff is for reading, so there's nothing to accidentally edit.

Because the diff is a genuine editor, large clips scroll smoothly and the minified-versus-formatted case
still lines up sensibly.

## A note on formatting

If two clips differ only in whitespace or key order, that shows up as a diff — the comparison is literal.
When you want to compare *meaning* rather than *bytes*, [beautify](/transforms/) both clips first (JSON
beautify, for instance) and diff the results; the formatting noise disappears and only the real changes
remain.
