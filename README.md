# Wholly Creative

This is Marya Summers’s website. The `main` branch combines the Wholly Creative v3 edits with Creative Reboot’s publication and mentorship updates. Creative Reboot is the Lovable project connected to this branch. [Open Creative Reboot in Lovable](https://lovable.dev/projects/7c6d782e-819c-4601-9f62-f87d9895cc74).

The pre-merge site is preserved on the [Creative Reboot backup branch](https://github.com/qEliSellers/whollycreative-v3/tree/codex/backup-creative-reboot-2026-11-18).

## Hosting handoff

The public pages, downloadable CV and Divination portrait work from this repository. The public site can run with Lovable Cloud disabled. If the hosting project enables Cloud, use its own Supabase settings. The repository includes the integration code and empty schema from v3.

The four amulet mockups are marked as drafts. Both shop categories stay empty until inventory is available.

The “A Hard Climb” card shows the approved cover of *Kaleidoscope* No. 87, *The Ties That Bind* (Summer/Fall 2023). The card displays the full cover without cropping. [Approved cover](src/assets/a-hard-climb-cover.jpg) · [Archived v3 page image](.lovable/content-backups/2026-11-18/a-hard-climb-page.jpg)

## Development

With Node.js and Bun installed, run these commands from the repository root.

```sh
bun install --frozen-lockfile
bun run dev
```

Run `bun run build` for a production build.
