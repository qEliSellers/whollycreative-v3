import { createFileRoute } from "@tanstack/react-router";
import maryaEarth from "../assets/marya-earth.webp";
import { PageHeader } from "../components/PageHeader";
import { DownloadLink, PrimaryLink } from "../components/Buttons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Marya — Wholly Creative" },
      {
        name: "description",
        content:
          "Marya Summers is a writer, diviner, and maker working at the meeting place of story, spirit, and craft.",
      },
      { property: "og:title", content: "About Marya Summers" },
      {
        property: "og:description",
        content:
          "Writer, diviner, and maker working at the meeting place of story, spirit, and craft.",
      },
      { property: "og:image", content: maryaEarth },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="A little about me"
        title={
          <>
            I write. I read.
            <br />
            <em className="italic text-teal">I make sacred things.</em>
          </>
        }
      />

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 pb-14 md:grid-cols-[5fr_6fr] lg:px-12">
        <div className="overflow-hidden rounded-sm bg-stone">
          <img
            src={maryaEarth}
            alt="Marya Summers, smiling outdoors among oaks"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6 text-base leading-[1.85] text-ink/80">
          <p className="font-display text-2xl italic leading-snug text-forest">
            My name is Marya (rhymes with papaya). I’m named for the wind. I live where galaxies
            spiral into ancient forests, at the edge of shifting rivers, in sacred spaces of stones,
            books, and other tools of divination.
          </p>
          <p>
            My work is built on wild faith and deep questions. I write with lightning. At the
            threshold, my wonder cat Perceval keeps watch.
          </p>
          <p>
            I came to this work the long way around—through journalism and editing, through decades
            of teaching writers in college classrooms and community workshops, through losses that
            asked me to grow up and griefs that asked me to grow down.
          </p>
          <p>
            I have also performed poetry and original music on stages across the country; organized
            community arts events; helped launch the Palm Beach Poetry Festival and the Delray Beach
            Poetry Slam at Dada.
          </p>
          <p>
            Through all of these experiences, I came to understand creativity not simply as an
            artistic practice but as a way of engaging life itself. The same process that shapes a
            poem can shape a conversation, a business, a relationship, or an entire life.
          </p>
          <p>
            Creativity isn't just the making of things: each act of expression changes the one who
            creates it, and each return to experience reshapes what can be expressed next. It is a
            way of participating consciously in the ongoing rhythm of revelation, expression,
            reflection, and renewal.
          </p>
          <p>
            This understanding was shaped not only by success but by hardship. Childhood abuse,
            foster care, domestic violence, homelessness, poverty, chronic illness, and disability
            taught me to make room for life's most difficult truths rather than turning away from
            them. I learned that our deepest challenges often conceal our greatest teachers, and
            that apparent contradictions often point toward a larger pattern waiting to be
            recognized. You will find here no spiritual bypassing – no invitation to think
            positively instead of telling and feeling the truth.
          </p>
          <p>
            Because I have walked through profound difficulty and uncertainty myself, I can meet
            others there without losing sight of what is possible. I know how to hold complexity,
            recognize emerging patterns, and help people move toward greater clarity, confidence,
            and integrity.
          </p>
          <p>
            I work with writers, makers, seekers, and people in the middle of their own becoming.
            The work is quiet and particular. It does not promise transformation in thirty days. It
            promises company, rigor, and the kind of language that holds.
          </p>
          <div className="pt-4">
            <PrimaryLink to="/contact">Begin a conversation</PrimaryLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <div>
            <div className="eyebrow">Curriculum vitae</div>
            <h2 className="mt-3 font-display text-2xl leading-snug text-forest">
              Marya Summers Complete CV
            </h2>
          </div>
          <DownloadLink href="/downloads/MaryaSummers_WritingCV_2026.pdf" type="application/pdf">
            Download the CV
          </DownloadLink>
        </div>
      </section>

    </>
  );
}
