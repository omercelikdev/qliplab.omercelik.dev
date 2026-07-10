---
title: Privacy
description: QlipLab is local-first. Your clipboard content never leaves the device — and the two things that can are both opt-in.
---

QlipLab is a local-first clipboard manager. Your data stays on your device. There is no account, no cloud
component, and no analytics — QlipLab does not collect, transmit, or store your clipboard content on any
server.

## What stays on your machine

Everything, by default. All of it lives in QlipLab's own data directory:

| Data | Where | Protection |
|------|-------|------------|
| Clipboard history (text & images) | Local SQLite | Plaintext (sensitive items flagged & blurred) |
| Snippets | Local SQLite | Plaintext |
| Vault items | Local SQLite | **AES-256-GCM encrypted** |
| Settings | Local key-value store | Plaintext |
| Master password | — | **Never stored** — only a salted hash |

Clipboard history and snippets are stored in plaintext on purpose: they're for everyday content, and the
[vault](/vault/) is where truly sensitive data belongs. Sensitive-looking clips are
[detected and blurred](/format-detection/#sensitive-data) so they don't show in a screen-share, but the
vault is what actually encrypts.

**Uninstalling QlipLab removes all of this.** There's no server-side copy to delete, because there was
never a server-side copy.

## What can leave the device

Exactly two things, both **off or on-demand**, and neither includes clipboard or vault content:

1. **Crash reports — opt-in, off by default.** If you turn them on, an unexpected error sends its message,
   a *sanitized* stack trace (file paths stripped), and your OS and app version. No clipboard content, no
   vault data, no personal information. Rate-limited, with duplicate suppression.
2. **Manual bug reports — only when you send one.** From Settings, you write a description and submit it.
   Only the text you type is sent.

Both go to a small, open-source [Cloudflare Worker](https://github.com/omercelikdev/qliplab/tree/main/worker)
that files a GitHub issue on your behalf. The Worker holds a GitHub token as a secret so your machine
never does, and **stores nothing** except a short-lived per-IP rate-limit counter. It receives the title,
body and labels of the report — nothing else.

That is the complete list of network activity, plus checking GitHub for a signed update when you ask it to.

## What QlipLab never does

- **No telemetry.** No usage tracking, no background data collection, no "anonymous statistics."
- **No ad identifiers**, no third-party analytics, no advertising SDKs.
- **No clipboard content transmitted, ever** — by QlipLab, to anyone.
- **No vault password or encrypted data transmitted.**

## Your controls

You decide how much is kept and for how long:

- Turn off **image storage**, or **sensitive detection**.
- Set a **history limit** and an **expiration** window (7 / 14 / 30 / 90 days).
- **Clear history on quit**, or clear it any time (pinned items can be kept).
- Add apps to the **ignore list** so clips copied from them are never captured.
- Leave **crash reporting off** — it already is.

## On macOS: the Accessibility permission

QlipLab asks for one system permission on macOS: **Accessibility**. It's what lets QlipLab register the
global shortcut, paste back into other apps, and expand snippet triggers. It is a *capability* permission,
not a data channel — it does not send anything anywhere. QlipLab's privacy manifest declares **no
tracking**.
