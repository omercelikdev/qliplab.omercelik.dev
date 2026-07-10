---
title: Format detection
description: QlipLab recognizes 24 formats the instant you copy them — and flags the sensitive ones.
---

Every clip is examined the moment it's captured, and QlipLab labels what it is. That label drives
everything downstream: which [transforms](/transforms/) it offers, how the [diff](/diff/) colors syntax,
and whether it gets flagged as [sensitive](#sensitive-data).

## The 24 formats

Detection runs in a fixed order — most specific first — so a JWT is never mistaken for plain Base64, and a
UUID is never mistaken for hex.

| Category | Formats |
|----------|---------|
| Data | **JSON**, **YAML**, **XML**, **CSV** |
| Web & tokens | **JWT**, **Base64**, **URL**, **URL-encoded**, **HTML** |
| Identifiers | **UUID**, **Unix timestamp**, **Hexadecimal**, **Color** (hex / rgb / hsl) |
| Query & patterns | **SQL**, **Regex** |
| Prose | **Markdown**, **Plain text** |
| Code | **JavaScript**, **TypeScript**, **Python**, **Go**, **Rust**, **Java**, **C#** |

Detection is structural, not guesswork. JSON has to actually parse. A JWT has to match the
three-segment `eyJ…`.`eyJ…`.`…` shape. A timestamp has to land on a real date between 1970 and 2100. A
CSV has to have a consistent column count across its rows. YAML has to load to an object. If nothing
matches, the clip is plain text — QlipLab never mislabels to look clever.

Programming languages are detected last and from the inside out — TypeScript before JavaScript, because
the generic patterns would otherwise swallow the specific ones.

## Why it matters

The format is the difference between a clipboard manager and a tool. Copy a token and QlipLab knows to
offer *decode*. Copy a minified blob and it knows to offer *beautify*. Copy a timestamp and it offers to
turn it into a date. You never dig through a menu of forty transforms — the relevant ones are already in
front of you. That's covered in [Transforms](/transforms/).

## Sensitive data

Alongside the format, QlipLab checks whether a clip looks *sensitive* — and if so, [blurs it in the
history](/clipboard-history/#sensitive-clips-are-handled-quietly) until you hover.

What it looks for:

- **Credentials** written as key/value — `password`, `secret`, `api_key`, `token`, `access_token`,
  `private_key`, `client_secret`, `database_url`, `connection_string`.
- **API-key shapes** — `sk-…` and `sk-ant-…`, GitHub `ghp_…` / `gho_…`, AWS `AKIA…`, Slack `xox…`,
  SendGrid `SG.…`.
- **Financial** — IBANs, 16-digit card numbers, CVV/CVC, PINs.
- **National IDs** — SSN-shaped and 11-digit national numbers.
- **Private keys** — PEM blocks (`-----BEGIN … PRIVATE KEY-----`), PGP private keys.
- **Bearer JWTs** used as credentials.

Detection is entirely local — the check is a set of patterns run on your machine, and a flagged clip is
never treated differently on any server, because nothing about it is sent to one. You can disable
sensitive detection in Settings if you'd rather.
