# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static HTML website for Picoyune (mercury monitors). No build framework — plain HTML pages with Tailwind CSS utility classes and custom SCSS, compiled separately. jQuery + Slick carousel handle all JS behavior.

## CSS Pipeline

Two separate CSS compilation steps feed into `css/main.scss`, which is then compiled to the final `css/main.css`:

1. **Tailwind** — watches HTML/JS files and outputs to `css/tailwind-output.css`:
   ```
   npx tailwindcss -i ./css/tailwind-input.css -o ./css/tailwind-output.css --watch
   ```

2. **SCSS** — compiles `css/main.scss` (which `@import`s `tailwind-output.css` and `slick.css`) into `css/main.css`:
   ```
   sass --watch css/main.scss:css/main.css --style compressed
   ```

Both watchers should be running simultaneously during development. Tailwind must compile first (or simultaneously) so its output is available when SCSS compiles.

## Site Structure

- `index.html` — homepage
- `about/index.html` — about page
- `pico-1/index.html` — product page (uses Slick carousel for product images)
- `download/index.html` — software download page
- `documents/` — PDF spec sheets

Tailwind's content scan covers `*.{html,js}` in the root and one level deep (`*/*.{html,js}`), so any new subdirectory pages are automatically picked up.

## Git

Do not mention Claude or Anthropic in commit messages.

## JS Behavior (`js/main.js`)

- Slick carousel: synced `.product-image` (main) and `.slider-nav` (thumbnails) carousels on the product page
- Parallax: elements with class `parallax` shift position on scroll
- Sticky header: `.js-header` gains `fixed top-0` classes after 70px scroll; `#header-logo` shrinks; `#header-placeholder` unhides to prevent layout jump
