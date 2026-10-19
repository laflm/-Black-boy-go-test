# Black Boy Go! — sprite pack (generated from the real game)

Edit/replace any PNG, keep the file name and size, then host the folder next to `index.html` (`./sprites/`). The game reads `sprites/pack.json` at start; anything missing falls back to the drawn version. Regenerate everything with `node export-sprites.js index.html sprites`.

## Character sheets (`*_sheet.png`, 6 columns x 4 rows, transparent)
Rows: 1 idle (4 frames) · 2 walk (6) · 3 attack (4) · 4 hurt (2). Frames face RIGHT (the game mirrors them). Sheets are drawn 1:1; the feet sit at the anchor (ax, ay) of each cell.

| file | cell (fw x fh) | feet anchor | sheet size |
|---|---|---|---|
| hero_sheet.png, citizen_sheet.png | 260 x 200 | 130, 180 | 1560 x 800 |
| robot_sheet.png | 160 x 200 | 80, 180 | 960 x 800 |
| flyer_sheet.png | 140 x 120 | 70, 100 | 840 x 480 |
| pinata_sheet.png | 120 x 140 | 60, 120 | 720 x 560 |
| boss_sheet.png | 260 x 260 | 130, 235 | 1560 x 1040 |

- Robot colour variants (Frost-Bot, Sentinel...) all share `robot`. For a variant with its own sheet: add `skin:'myskin'` in `ENEMY` and `loadSheet('myskin','x.png',{fw:160,fh:200,ax:80,ay:180,anims:ANIMS})`.
- The hero sheet is the BARE body: no weapon, shield or armour.

## Gear overlays (`gear/item_<id>.png`)
Same grid and anchor as the hero sheet. Only the pixels the item adds are present. Drawn over the hero in this order: foot, body, talisman, head, shield, weapon. Weapon overlays show the weapon at each attack frame (it can rotate through the swing). Capes are an overlay on top of the body.

## Icons (`icons/<id>.png`, 64x64): shown in menus; every item has one (gear, potions, materials).
## Buildings (`buildings/*.png`): shop, arcade, house 280x380 · gate 240x380 · church 300x320 · forge 300x340 · chest and chest_open 152x140. Centred; the bottom edge is a little below the ground line.
## `_overview.png`: one picture of everything (hero, enemies/bosses, boss sets, buildings, icons).

Not in the pack (still drawn in code): HUD, menus, backgrounds, projectiles/effects, the party portal.
