---
title: Clipboard history
description: Everything you copy — captured, searchable, pinnable, and returned to the app you came from.
---

The system clipboard remembers one thing. QlipLab remembers everything you copy and hands it back
whenever you need it.

## Capture

QlipLab watches the clipboard and captures each new item the moment you copy it — text, rich text (HTML),
and images. Capture is event-driven, not polled, so it's immediate and cheap.

A few limits keep it sensible: text and images up to **5 MB**, rich-text HTML up to **1 MB**. Bigger
clips are still captured as plain text.

Each item records what it is — its [detected format](/format-detection/) — and, where the platform
allows, which application it came from.

## Search and pin

- **Search** filters the history by content as you type.
- **Pin** the clips you keep reaching for; pinned items sort to the top and survive "clear history."
- **Quick-paste** the top items with `Cmd/Ctrl+1…9` — see [Keyboard shortcuts](/shortcuts/).

## Paste back where you were

Click a clip (or press `Enter`) and QlipLab does the thing every clipboard manager should: it hides
itself, returns focus to the app you were in, and pastes there — the way Ditto does on Windows, on all
three platforms. On macOS this is what the Accessibility permission is for.

## Sensitive clips are handled quietly

When you copy something that looks sensitive — a password, an API key, a credit-card number — QlipLab
flags it and **blurs it in the list until you hover**, so a shoulder-surfer or a screen-share doesn't
catch it. What counts as sensitive is covered in [Format detection](/format-detection/#sensitive-data),
and you can turn the detection off in Settings.

## Housekeeping

Settings give you control over how much history sticks around:

| Setting | What it does | Default |
|---------|--------------|---------|
| History limit | How many items to keep | 100 |
| Expiration | Auto-remove clips older than N days (7 / 14 / 30 / 90, or never) | Never |
| Store images | Capture image clips, not just text | On |
| Clear on quit | Wipe unpinned history when you quit | Off |
| Ignored apps | Never capture clips copied from these apps (password managers, etc.) | — |

Everything lives in a local database in QlipLab's own data directory. Nothing about your history leaves
the machine — see [Privacy](/privacy/).
