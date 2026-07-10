---
title: Installation
description: Install QlipLab on macOS, Windows, or Linux — and grant the one permission it needs to paste for you.
---

Download the latest build for your platform from the
[GitHub releases page](https://github.com/omercelikdev/qliplab/releases/latest).

## macOS

1. Download `QlipLab_<version>_universal.dmg` — one build for both Apple Silicon and Intel.
2. Open the DMG and drag **QlipLab** to Applications.
3. Launch it.

### Grant Accessibility permission

QlipLab needs one permission, and it will prompt you for it on first launch:

> **System Settings → Privacy & Security → Accessibility → enable QlipLab**

This is what lets QlipLab register a global shortcut and paste into other apps. Without it, the global
shortcut and auto-paste won't work — the rest of the app still does. macOS 12 (Monterey) or later is
required.

## Windows

1. Download `QlipLab_<version>_x64-setup.exe` (recommended) or the `.msi`.
2. Run it. Windows SmartScreen may show **"Windows protected your PC"** — click **More info → Run anyway**.

:::note[Why SmartScreen appears]
QlipLab is not code-signed on Windows yet — a code-signing certificate is a recurring cost, and the app
is free. The source is public, so you can build it yourself and verify. SmartScreen flags the *absence of
a signature*, not a problem with the app.
:::

Windows 10 (1803) or later, 64-bit.

## Linux

Pick whichever fits your setup:

- **AppImage** — portable, runs anywhere. `chmod +x QlipLab_<version>_amd64.AppImage`, then run it.
- **.deb** — `sudo dpkg -i QlipLab_<version>_amd64.deb`, then `sudo apt-get install -f` to pull in any
  missing dependencies.

:::caution[Wayland]
Paste-back and app-focus detection rely on X11 tools (`xdotool` / `xprop`). On a pure Wayland session
some of that is unavailable, and QlipLab will tell you rather than fail silently. X11 sessions have the
full feature set.
:::

## Updating

QlipLab checks for updates from **Settings → About → Check for updates**. Updates are cryptographically
signed and verified before they're applied — a tampered update won't install.

## First run

However you installed it, the first launch is the same:

1. QlipLab starts hidden, with a tray icon.
2. Press the global shortcut — **`Alt+Q`** by default — to summon the window.
3. On macOS, grant the Accessibility permission when prompted.
4. Start copying. See [What is QlipLab](/getting-started/) for the loop, or
   [Keyboard shortcuts](/shortcuts/) for the full set.

Prefer QlipLab to start with your machine? Turn on **Launch on login** in Settings.
