---
title: Security
description: How the vault encrypts, how the master password is handled, and the platform protections QlipLab relies on.
---

This page is the technical companion to [Privacy](/privacy/): not *what* stays local, but *how* the
sensitive parts are protected.

## Vault encryption

The [vault](/vault/) uses the platform's Web Crypto API — real, standard cryptography, not obfuscation.

| Property | Value |
|----------|-------|
| Cipher | AES-256-GCM (authenticated encryption) |
| Key derivation | PBKDF2-SHA-256, **210,000 iterations** |
| Salt | 16 random bytes, per item |
| IV | 12 random bytes, per item |
| Stored layout | `base64( salt ‖ iv ‖ ciphertext+tag )` |

GCM is authenticated, so a tampered ciphertext fails to decrypt rather than returning garbage. The high
PBKDF2 iteration count makes each master-password guess deliberately expensive; the per-item salt and IV
mean two identical secrets never encrypt to the same bytes. Vaults created under an earlier
100,000-iteration build are re-keyed to 210,000 transparently the next time you unlock.

## The master password

- **Never stored.** QlipLab keeps only a **salted SHA-256 hash** in `base64(salt):base64(hash)` form.
- **Verified in constant time.** The comparison uses a timing-safe check, so an attacker can't learn the
  hash a byte at a time by measuring how long verification takes.
- **Unrecoverable by design.** There is no reset. If you lose the master password, the encrypted data
  stays encrypted — which is exactly the guarantee a vault has to make.

## The key's lifetime

The encryption key is derived from your master password **in memory** when you unlock the vault, held only
while the vault is open, and cleared when it **auto-locks** (after 5 minutes of inactivity by default) or
when you quit. It is never written to disk.

## Brute-force resistance

Wrong master-password attempts trigger an escalating backoff — 3 failures → 3 seconds, and climbing — so
the local database can't be hammered with guesses at speed.

## Platform protections

- **macOS App Sandbox** confines QlipLab to its own container. The one capability it requests for paste
  and shortcuts is the Accessibility permission you grant explicitly.
- **Content Security Policy** restricts where the app may connect — the report Worker and the editor CDN,
  nothing else.
- **Signed updates.** Updates are cryptographically signed and verified before they're applied; a tampered
  update won't install.
- **Sanitized error reports.** If you opt into crash reporting, stack traces have file paths stripped
  before they leave the machine, and no clipboard or vault content is ever included. See
  [Privacy](/privacy/#what-can-leave-the-device).

## What is *not* encrypted, and why

Clipboard history and snippets are stored in plaintext in the local database. This is a deliberate
trade-off: they hold everyday content, they need to be instantly searchable, and the database sits inside
the OS sandbox with the app's own file permissions. Anything that genuinely needs to be secret belongs in
the [vault](/vault/), which is encrypted. Sensitive-looking clips are still
[detected and blurred](/format-detection/#sensitive-data) in the UI so they don't leak over your shoulder.

## Reviewing it yourself

QlipLab is open source under Apache-2.0. The encryption, the detection patterns, and the report Worker are
all in the [public repository](https://github.com/omercelikdev/qliplab) — the security claims on this page
are things you can read the code for, not things you have to take on trust.
