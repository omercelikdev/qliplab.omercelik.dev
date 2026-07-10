---
title: Encrypted vault
description: Cards, bank details, addresses, API keys and personal data behind AES-256-GCM — the key never touches disk.
---

Some things shouldn't sit in a plaintext clipboard history: a card number, an API key, your bank details.
The vault is where they go — encrypted with AES-256, unlocked by a master password only you know.

## What it holds

Six kinds of item, each with the right fields:

| Type | For |
|------|-----|
| **Card** | Cardholder, number, expiry, CVV |
| **Bank** | Bank name, account holder, IBAN, SWIFT |
| **Address** | Street, city, state, postal code, country |
| **Personal** | Name, email, phone, date of birth |
| **Company** | Company name, tax ID, registration number, website |
| **Code** | An API key, license key, or any secret string, plus notes |

In the list, values are masked — `•••• •••• 1234` — and revealed only on hover. Vault search matches
**titles only**; it never touches the encrypted contents.

## How the encryption works

The vault is not obfuscation — it's real cryptography, done with the platform's Web Crypto API.

- **Cipher:** AES-256-GCM. Authenticated, so tampering is detected, not silently decrypted.
- **Key derivation:** PBKDF2 with **210,000 iterations** of SHA-256 — deliberately slow, to make guessing
  the master password expensive. (Vaults created under an older 100,000-iteration build are upgraded
  transparently when you unlock them.)
- **Per-item randomness:** every item gets a fresh 16-byte salt and 12-byte IV, so identical values never
  produce identical ciphertext.
- **The key never touches disk.** It's derived from your master password in memory when you unlock, held
  only while the vault is open, and cleared when it locks.

## Your master password

The master password is **never stored** — not encrypted, not anywhere. QlipLab keeps only a **salted
SHA-256 hash** of it, in the `salt:hash` form, and checks your input against that hash with a constant-time
comparison so the check can't be timed. If you forget the master password, the vault cannot be recovered —
that's the point.

Repeated wrong guesses are throttled with an escalating backoff — three failures cost three seconds, and
it climbs from there — so the local database can't be brute-forced quickly.

## Auto-lock

The vault locks itself after a period of inactivity — **5 minutes** by default, configurable to 1, 15, or
never. Locking clears the key from memory; you re-enter the master password to unlock. It also locks when
you quit.

## Paste without exposure

A vault item can carry a [trigger](/snippets/#vault-items-expand-too) that expands it inline as you type —
pulled from the vault at that instant, sent straight to where your cursor is, and never written into your
clipboard history. It's the safe way to fill a card number or an API key: it goes exactly where you need
it and nowhere else.

Like everything in QlipLab, the vault is entirely local. The encrypted data lives in a database on your
machine and is never transmitted — see [Privacy](/privacy/) and [Security](/security/).
