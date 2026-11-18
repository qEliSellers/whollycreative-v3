import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { DownloadLink } from "../components/Buttons";

/**
 * Section headings as they appear in the PDF, so a visitor can see what the CV
 * covers before opening it. Keep this list in step with the document.
 */
const cvSections = [
  {
    label: "Education",
    detail:
      "M.F.A. Creative Writing, Antioch University Los Angeles; graduate coursework and B.A. English, Florida Atlantic University.",
  },
  {
    label: "Writing Awards",
    detail: "New Voices Fellowship, Pushcart Prize nomination, and a poet residency.",
  },
  {
    label: "Poetry & Creative NonFiction Published",
    detail: "Poems, essays, and a book chapter, 1991–2026.",
  },
  {
    label: "Journalism & Editorial Work",
    detail: "Columns, criticism, and editorships across South Florida.",
  },
  {
    label: "Select Performances & Readings",
    detail: "Slam teams, festivals, and featured readings nationwide.",
  },
  {
    label: "Seminars, Lectures & Workshops",
    detail: "Conference presentations and community writing workshops.",
  },
  {
    label: "Academic Committee & Literary Event Work",
    detail: "Committee service, festival coordination, and slam organization.",
  },
  {
    label: "Professional Development & Continuing Education",
    detail: "Writers' seminars and continuing study.",
  },
];

export const Route = createFileRoute("/academic")({
  head: () => ({
    meta: [
      { title: "Marya Summers Complete CV — Wholly Creative" },
      {
        name: "description",
        content:
          "The complete curriculum vitae of Marya Summers: education, awards, publications, journalism, performances, and teaching.",
      },
      { property: "og:title", content: "Marya Summers Complete CV" },
      {
        property: "og:description",
        content:
          "Education, awards, publications, journalism, performances, and teaching — read or download the full CV as a PDF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AcademicPage,
});

function AcademicPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic Writing"
        title="Marya Summers Complete CV"
        intro="A complete record of education, awards, publications, journalism, performances, and teaching."
      />

      <section className="mx-auto max-w-3xl px-6 pb-14 lg:px-12">
        <div className="border-y border-border py-12 text-center">
          <div className="eyebrow">Curriculum vitae</div>
          <SpiralDivider className="mt-4 mb-7" />
          <p className="mx-auto max-w-xl font-display text-2xl italic leading-snug text-forest md:text-3xl">
            The full CV, current through 2026.
          </p>
          <div className="mt-9 flex justify-center">
            <DownloadLink href="/downloads/MaryaSummers_WritingCV_2026.pdf" type="application/pdf">
              Download the CV
            </DownloadLink>
          </div>
          <p className="mt-4 text-xs italic text-ink/60">
            Opens as a PDF · MaryaSummers_WritingCV_2026.pdf
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-12">
        <div className="eyebrow">Inside the CV</div>
        <SpiralDivider className="mt-4 mb-10 justify-start" />
        <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {cvSections.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-lg leading-snug text-forest">{s.label}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink/70">{s.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center lg:px-12">
        <Link
          to="/writing"
          className="inline-flex font-sans text-[0.7rem] uppercase tracking-[0.22em] text-forest hover:text-gold"
        >
          ← Back to Writing
        </Link>
      </section>
    </>
  );
}
