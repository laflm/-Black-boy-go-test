# Black Boy Go! — iPhone Home Screen Web App

This package prepares the supplied HTML5 game as a Progressive Web App (PWA). It is not an App Store binary. Host these files on an HTTPS website before installing from iPhone Safari.

## Included
- `index.html` — original game with PWA metadata and improved touch pointer handling
- `manifest.webmanifest` — standalone display, portrait preference and app icons
- `service-worker.js` — offline caching after the first successful load
- `icons/` — Home Screen icons

## Publish
Upload the **contents** of this folder to an HTTPS static host, keeping the directory structure.

## Install on iPhone
1. Open the hosted HTTPS URL in Safari.
2. Tap Share, then **Add to Home Screen**.
3. If shown, enable **Open as Web App**, then tap Add.

## Notes
- HTTPS is required for service-worker caching (except local development).
- The existing `localStorage` save key `bbg` is retained where used by the game. Save data stays associated with the same website origin; keep the same domain and URL.
- Portrait is declared as a preference; iOS may not strictly lock orientation for every Home Screen web app.
- The game is cached for offline launches after the first successful online load. Removing the web app or clearing website data can erase local save data.
