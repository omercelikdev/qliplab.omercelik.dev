---
title: Snippets & text expansion
description: Save the things you type constantly — paste them from the panel, or expand them inline with a trigger.
---

Some text you type over and over: an email signature, a code template, a canned reply, a shipping address.
Snippets let you save it once and get it back two ways — pick it from the panel, or have it expand as you
type.

## Saving a snippet

A snippet has a **title**, its **content**, and optionally a **category** and a **syntax** (so code
snippets show with the right highlighting). Organize them into categories and favorite the ones you use
most.

## Two ways to use one

**Paste from the panel.** Open QlipLab, go to Snippets, and click the one you want — QlipLab pastes it
into the app you came from, exactly like a clip from history.

**Expand inline with a trigger.** Give a snippet a short trigger string — say `;sig` — and when you type
that trigger in *any* application, QlipLab replaces it with the full snippet on the spot. You never open
the window; the text just appears. Snippet auto-expansion is on by default and can be turned off in
Settings.

Triggers use longest-match disambiguation, so `;addr` and `;address` can coexist without one shadowing the
other.

## Vault items expand too

The same trigger mechanism works for [vault](/vault/) items. Give your work address or a frequently-pasted
API key a trigger, and it expands inline when you type it — pulled from the encrypted vault at the moment
of expansion, never sitting in your clipboard history. This is the safe way to paste something sensitive:
it goes straight where you're typing, and nowhere else.

## How it works

Text expansion watches your keystrokes to notice a trigger, then sends the replacement. On macOS that's
the same Accessibility permission the [global shortcut and paste-back](/installation/#grant-accessibility-permission)
already use. The watcher runs entirely on your machine — keystrokes are matched against your own triggers
locally and are never recorded or transmitted. See [Privacy](/privacy/).
