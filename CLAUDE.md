# Rumi for Pinokio — Agent Guide

This repository is a **Pinokio launcher only**. Rumi itself is cloned by `install.js` into `app/` from
<https://github.com/Orenda-Project/rumi-platform> and is git-ignored here.

| Need | Go to |
|------|-------|
| The launcher scripts, the sidebar, and the rules for editing them | [.claude/skills/pinokio-launcher](.claude/skills/pinokio-launcher/SKILL.md) |
| The GUI setup wizard | [onboarding/CLAUDE.md](onboarding/CLAUDE.md) |
| User-facing docs and the HTTP API | [README.md](README.md) |
| Rumi's own code (bot, schema, tests, skills) | `app/CLAUDE.md`, after Install |

Rules:

- **Never edit `app/`** to make the launcher work. It is upstream's repository; `update.js` runs `git pull`
  in it, and a local change there either blocks the pull or is lost. Work around it from the launcher side.
- **`onboarding/bridge.js` is the only file that requires Rumi's modules.** Keep it that way.
