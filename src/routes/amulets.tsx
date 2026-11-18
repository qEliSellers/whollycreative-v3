import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import amuletBeeMother from "../assets/amulet-bee-mother.webp";
import amuletHeldLight from "../assets/amulet-held-light.webp";
import amuletStillWater from "../assets/amulet-still-water.webp";
import amuletThreshold from "../assets/amulet-threshold.webp";

export const Route = createFileRoute("/amulets")({
  head: () => ({
    meta: [
      { title: "Amulets — Wholly Creative" },
      {
        name: "description",
        content: "Handcrafted talismans and small sacred objects by Marya Summers.",
      },
      { property: "og:title", content: "Amulets — Marya Summers" },
      { property: "og:description", content: "Handcrafted talismans and small sacred objects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AmuletsPage,
});

const categories = [
  { slug: "amulets", label: "Amulets" },
  { slug: "prayer-beads-mala-beads", label: "Prayer Beads / Mala Beads" },
] as const;

type CategorySlug = (typeof categories)[number]["slug"];

type Product = {
  id: string;
  category: CategorySlug;
  status: "draft" | "available";
  name: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
};

// Placeholder listings — names, copy and prices are stand-ins until the real
// pieces are catalogued and mapped to SureCart during the WordPress migration.
const products: Product[] = [
  {
    id: "held-light",
    category: "amulets",
    status: "draft",
    name: "Held Light",
    subtitle: "Clear quartz, hand-turned brass, sage silk.",
    description:
      "A small spiral disc cradling a quartz point — for the days you need your own light back.",
    price: "$180",
    image: amuletHeldLight,
  },
  {
    id: "threshold",
    category: "amulets",
    status: "draft",
    name: "Threshold",
    subtitle: "Obsidian, copper wire, freshwater pearl.",
    description: "Wrapped by hand for crossings: new rooms, new names, new beginnings.",
    price: "$165",
    image: amuletThreshold,
  },
  {
    id: "bee-mother",
    category: "amulets",
    status: "draft",
    name: "Bee Mother",
    subtitle: "Amber, beeswax, gold thread.",
    description: "Strung with honey-colored beads to keep your work sticky with life.",
    price: "$195",
    image: amuletBeeMother,
  },
  {
    id: "still-water",
    category: "amulets",
    status: "draft",
    name: "Still Water",
    subtitle: "Fluorite, hand-formed silver, teal silk.",
    description: "A cool stone for quiet reading, set in silver at the studio bench.",
    price: "$210",
    image: amuletStillWater,
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="aspect-square overflow-hidden rounded-sm bg-stone">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg text-forest">{product.name}</h3>
        <p className="mt-1 text-xs italic text-ink/60">{product.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-base text-forest">{product.price}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-forest/70">
            View piece
          </span>
        </div>
      </div>
    </article>
  );
}

function AmuletsPage() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug>("amulets");
  const visibleProducts = products.filter(
    (product) => product.status === "available" && product.category === activeCategory,
  );
  const activeLabel = categories.find((category) => category.slug === activeCategory)?.label;

  return (
    <>
      <PageHeader
        eyebrow="Amulets & small sacred objects"
        title={
          <>
            Stone, crystal, metal, silk.
            <br />
            Intention held close.
          </>
        }
        intro="Each piece is made by hand in a small studio over the course of a week. Materials are sourced with well-being in mind. Nothing synthetic. Creations are wholly natural and fragrance-free to protect the most sensitive. While some designs may be similar, each amulet is one of a kind."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.22em] text-forest/70">
          <div className="flex flex-wrap gap-6" role="tablist" aria-label="Shop categories">
            {categories.map((category) => {
              const isActive = category.slug === activeCategory;
              return (
                <button
                  key={category.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.slug)}
                  className={
                    isActive ? "border-b border-gold pb-1 text-forest" : "pb-1 hover:text-gold"
                  }
                >
                  {category.label}
                </button>
              );
            })}
          </div>
          <div>{visibleProducts.length} pieces</div>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="border-y border-border py-16 text-center" role="tabpanel">
            <p className="font-display text-2xl italic text-forest">
              {activeLabel} are coming soon.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/65">
              New one-of-a-kind pieces will be added here as they become available.
            </p>
          </div>
        )}
      </section>

      <section className="bg-stone/50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <div className="eyebrow">About the craft</div>
          <SpiralDivider className="mt-4 mb-8" />
          <p className="font-display text-2xl italic leading-snug text-forest md:text-3xl">
            Each amulet is named, energetically cleared, blessed, and packed in a small burlap pouch
            with a handwritten card explaining its materials and how they support you. The pouch is
            closed with a drawstring and a satin bow.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            Commissioned creations designed uniquely for you are available upon request —{" "}
            <Link
              to="/contact"
              className="text-forest underline decoration-gold underline-offset-4 hover:text-gold"
            >
              contact Marya
            </Link>{" "}
            to begin. Shipping is slow and careful. Like all intimate items, returns are not
            accepted.
          </p>
        </div>
      </section>
    </>
  );
}
