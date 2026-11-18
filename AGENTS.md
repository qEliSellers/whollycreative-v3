<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Amulets catalog as typed category/product data so it can map directly to SureCart after WordPress migration; until then, categories remain visible with an empty catalog state.
- Mount TanStack ScrollRestoration in the root layout so internal page navigation reliably starts at the expected position.
- Keep “Begin the Journey” unavailable until Cal.com is integrated, and replace the interim Writing mailto signup with SureContact during the WordPress migration.
- Store removed page content as non-rendered text snapshots under `.lovable/content-backups/` so copy can be recovered without exposing duplicate pages.
- Serve downloadable files from the repository with `DownloadLink` in `src/components/Buttons.tsx` so downloads retain their original filenames across Lovable projects.
