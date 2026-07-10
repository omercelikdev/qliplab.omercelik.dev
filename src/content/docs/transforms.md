---
title: Transforms
description: 40 one-click transforms — beautify, decode, convert, hash, reshape — with the relevant ones surfaced for each format.
---

A transform reshapes a clip without you leaving QlipLab. No website, no paste-into-a-tool-and-copy-back.
There are forty of them, and when you open a clip the ones that make sense for its
[detected format](/format-detection/) are shown first.

Every transform is fail-soft: if the input can't be transformed, you get the original back unchanged
rather than an error.

## Encode & decode

| Transform | Applies to |
|-----------|-----------|
| Base64 encode / decode | any / Base64 (Unicode-safe) |
| URL encode / decode | any / URL |
| HTML escape / unescape | any / HTML |
| Text ↔ hex | any / hex |

## Format & beautify

| Transform | Applies to |
|-----------|-----------|
| JSON beautify / minify | JSON |
| SQL format | SQL |
| YAML beautify | YAML |
| JavaScript / TypeScript beautify (Prettier) | code |

## Convert between formats

| Transform | Direction |
|-----------|-----------|
| JSON ↔ YAML | both ways |
| JSON ↔ CSV | both ways |
| JSON ↔ XML | both ways |
| Timestamp ↔ date | Unix ↔ ISO |

## Hash

MD5, SHA-1, SHA-256, SHA-512 — individually, or **all four at once** in one labeled output. Useful for
checksums and quick fingerprinting.

## Change case

`UPPERCASE`, `lowercase`, `camelCase`, `snake_case`, `kebab-case`, `PascalCase`, `Title Case` — seven
conversions, on any text.

## Reshape text

The everyday line-wrangling you'd otherwise open an editor for:

- **Sort** lines A→Z or Z→A, **deduplicate**, **reverse** line order, **shuffle**
- **Trim** whitespace, **remove empty lines**, **number** lines, **wrap** at 80 columns
- **Reverse** the text itself
- **Count** — lines, words, characters, characters without spaces, and bytes

## JWT decode

Copy a token and QlipLab detects it. Decode splits it into its **header** and **payload** so you can read
the claims — and check the expiry — without pasting it into a website. (Decoding reads the token; it does
not verify the signature.)

## How they surface

You never scroll a wall of forty options. QlipLab splits them into **recommended** — the universal ones
plus anything matching the clip's format — and the rest. Copy JSON and *beautify*, *minify*, *JSON→YAML*
and *JSON→CSV* are right there; copy a timestamp and *timestamp→date* leads. The format does the
filtering for you.

Everything runs locally. No clip is sent anywhere to be transformed — see [Privacy](/privacy/).
