---
title: What is QlipLab
description: A local-first clipboard manager that keeps your history, understands your formats, and locks your secrets — on macOS, Windows, and Linux.
---

QlipLab is a clipboard manager for macOS, Windows and Linux. It keeps a searchable history of everything
you copy, recognizes what each clip is, transforms it in one click, and keeps your sensitive data behind
AES-256 encryption — all locally, with no cloud component.

It's built with [Tauri](https://tauri.app/) (a Rust core with a web UI), so it's small and fast, and it's
free and open source under Apache-2.0.

## The idea

The system clipboard has one slot. Copy something new and the last thing is gone. That's fine until you
need the thing from two copies ago, or you copy a JSON blob and want it readable, or you paste a password
that then sits in your clipboard for anyone to grab.

QlipLab replaces that one slot with:

- a **history** of everything you copy, searchable and pinnable;
- **format detection** that knows a JWT from a UUID from a SQL query — [24 formats](/format-detection/);
- **transforms** that beautify, decode, convert, hash and reshape a clip in one click — [40 of them](/transforms/);
- a **diff** view for comparing any two clips;
- **snippets** you can paste or expand inline as you type;
- an **encrypted vault** for cards, keys, and anything else that shouldn't live in plaintext.

## Five minutes in

1. **[Install](/installation/)** for your platform, and grant the one permission it asks for (on macOS,
   Accessibility — it's what lets QlipLab paste for you).
2. **Copy a few things.** They appear in the history the moment you copy them.
3. **Press the global shortcut** — `Alt+Q` by default — to summon the window over whatever app you're in.
4. **Copy some JSON.** QlipLab detects it; open the transforms and beautify it.
5. **Click a clip.** QlipLab hides, returns you to the app you were in, and pastes it there.

That's the whole loop. Everything else — the vault, snippets, diff, text expansion — builds on it.

## What's under the hood

| | |
|---|---|
| Platforms | macOS 12+, Windows 10+, Linux (AppImage / .deb) |
| Built with | Tauri v2 (Rust) + React 19 + TypeScript |
| Storage | Local SQLite + a small key-value store, in the app's data directory |
| Encryption | AES-256-GCM, key derived with PBKDF2 (210,000 iterations) |
| Languages | 15, including right-to-left Arabic |
| License | Apache-2.0 — free, open source, source on GitHub |

## Where to go next

- **[Installation](/installation/)** — per-platform steps and the permission each OS needs.
- **[Keyboard shortcuts](/shortcuts/)** — the global toggle, quick-paste, diff mode, navigation.
- **[Privacy](/privacy/)** — exactly what stays local and what (only if you ask) leaves.
