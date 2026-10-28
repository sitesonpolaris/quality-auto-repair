import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Logo from "@/components/Logo";
import QuoteForm from "@/components/QuoteForm";
import SiteMotion from "@/components/SiteMotion";
import Year from "@/components/Year";
import { reviews, services, site } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
  { href: "#quote", label: "Get a quote" },
];

function PhoneIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1Z" />
    </svg>
  );
}

function Stars({ className = "size-5" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-sign" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8Z" />
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SiteMotion />
      <a
        href="#main"
        className="sr-only z-50 rounded bg-sign px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      {/* Hero */}
      <header className="relative isolate flex min-h-[92svh] flex-col overflow-hidden bg-ink text-paper sm:min-h-[100svh] lg:max-h-[960px]">
        <HeroVideo />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 pt-5 sm:px-6">
          <a href="#" aria-label={`${site.name} home`}>
            <Logo />
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[0.95rem] font-semibold md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-paper/85 transition hover:text-sign">
                {item.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-sign px-4 py-2.5 text-ink transition hover:bg-sign/90"
            >
              <PhoneIcon className="size-4" />
              {site.phone}
            </a>
          </nav>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-sign px-3.5 py-2.5 text-sm font-bold text-ink md:hidden"
          >
            <PhoneIcon className="size-4" />
            Call
          </a>
        </div>

        <div className="relative z-10 mx-auto mt-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.14em] text-sign uppercase">
            <span className="h-0.5 w-8 bg-stripe" />
            Family- &amp; veteran-owned · Gastonia, NC
          </p>
          <h1 className="max-w-4xl font-display text-[clamp(3.1rem,10vw,7.5rem)] leading-[0.88] font-black tracking-tight uppercase">
            Good people.
            <br />
            Fast service.
            <br />
            <span className="text-sign">Fair prices.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/85 sm:text-xl">
            Brakes, diagnostics, A/C, tires and everyday repairs at our shop on E Second Ave.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-md bg-sign px-6 py-4 font-display text-2xl font-extrabold tracking-wide text-ink uppercase transition hover:bg-sign/90"
            >
              <PhoneIcon />
              Call {site.phone}
            </a>
            <a
              href="#quote"
              className="inline-flex items-center rounded-md border-2 border-paper/70 px-6 py-[0.85rem] font-display text-2xl font-extrabold tracking-wide uppercase transition hover:border-paper hover:bg-paper hover:text-ink"
            >
              Get a quote
            </a>
          </div>
          <a
            href={site.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-sm text-paper/85 hover:text-paper"
          >
            <Stars className="size-4" />
            <span>
              <strong className="text-paper">{site.rating.value}</strong> from {site.rating.count} Google reviews
            </span>
          </a>
        </div>
      </header>
      <div className="tri-stripe" />

      <main id="main">
        {/* About */}
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_1.1fr]">
          <div className="rise">
            <p className="text-sm font-bold tracking-[0.14em] text-stripe uppercase">The shop</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] font-black text-navy uppercase sm:text-6xl">
              A family shop with the flag on the wall.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-ink-soft">
              <p>
                Quality Auto Repair is a family- and veteran-owned shop at {site.address.street} in Gastonia. Look for the
                navy building with the yellow sign and the blue awning out front.
              </p>
              <p>
                Inside you&rsquo;ll find a front counter covered in vintage tin signs, a waiting room with a drink cooler,
                and a crew that handles everything from oil changes to engine work.
              </p>
              <p className="font-semibold text-ink">
                Customers keep coming back for the same reasons: good people, fast service and fair prices.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {["Family-owned", "Veteran-owned", "All makes & models"].map((tag) => (
                <li key={tag} className="rounded-full border border-navy/25 px-4 py-1.5 text-sm font-semibold text-navy">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative pb-16 sm:pb-24">
            <div className="door rounded-lg shadow-xl">
              <Image
                src="/images/building.webp"
                alt="Quality Auto Repair's navy building with yellow sign and blue awning on E Second Ave"
                width={680}
                height={510}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="h-auto w-full"
                priority={false}
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[58%] sm:-right-4">
              <div data-depth="0.35" className="door rounded-lg border-4 border-paper shadow-2xl will-change-transform">
                <Image
                  src="/images/waiting-room.webp"
                  alt="Waiting room with chairs, a fish tank, a drink cooler and walls of patriotic signs"
                  width={680}
                  height={510}
                  sizes="(min-width: 1024px) 330px, 55vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-navy text-paper">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
            <div className="rise flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm font-bold tracking-[0.14em] text-sign uppercase">What we fix</p>
                <h2 className="mt-3 font-display text-5xl leading-[0.95] font-black uppercase sm:text-6xl">
                  Bring it in. We&rsquo;ll sort it out.
                </h2>
              </div>
              <a href="#quote" className="font-semibold text-sign underline underline-offset-4 hover:text-paper">
                Ask about your car &rarr;
              </a>
            </div>

            <ol className="mt-14 grid border-t border-paper/15 md:grid-cols-2 md:gap-x-12">
              {services.map((service, i) => (
                <li key={service.name} className="rise flex gap-5 border-b border-paper/15 py-6">
                  <span className="w-8 shrink-0 font-display text-2xl font-black text-stripe tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-extrabold uppercase">{service.name}</h3>
                    <p className="mt-1.5 text-paper/75">{service.blurb}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="rise mt-14 flex flex-col gap-4 rounded-lg bg-sign p-6 text-ink sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="font-display text-3xl leading-none font-black uppercase sm:text-4xl">Need tires?</p>
              <p className="text-lg font-medium sm:max-w-md">
                Look for the {site.tireBrands.join(", ").replace(/, ([^,]*)$/, " and $1")} names on our awning. Call
                for sizes and pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rise">
              <p className="text-sm font-bold tracking-[0.14em] text-stripe uppercase">What folks say</p>
              <p className="mt-4 font-display text-[7rem] leading-none font-black text-navy sm:text-[9rem]">
                {site.rating.value}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <Stars className="size-6" />
                <span className="font-semibold text-ink-soft">{site.rating.count} Google reviews</span>
              </div>
              <a
                href={site.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-navy underline underline-offset-4 hover:text-stripe"
              >
                Read them on Google &rarr;
              </a>
            </div>
            <div className="grid gap-6">
              {reviews.map((review) => (
                <figure key={review.quote} className="rise relative rounded-lg bg-white p-8 shadow-sm">
                  <span className="absolute top-0 left-8 h-1.5 w-16 bg-stripe" aria-hidden="true" />
                  <blockquote className="font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-ink-soft">{review.source}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <div className="tri-stripe" />

        {/* Visit */}
        <section id="visit" className="bg-paper-dim">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
            <div className="rise">
              <p className="text-sm font-bold tracking-[0.14em] text-stripe uppercase">Come by</p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] font-black text-navy uppercase sm:text-6xl">
                615 E Second Ave
              </h2>
              <dl className="mt-8 grid gap-6 text-lg">
                <div>
                  <dt className="text-sm font-bold tracking-[0.12em] text-ink-soft uppercase">Address</dt>
                  <dd className="mt-1">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold tracking-[0.12em] text-ink-soft uppercase">Phone</dt>
                  <dd className="mt-1">
                    <a href={site.phoneHref} className="font-semibold text-navy underline underline-offset-4">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold tracking-[0.12em] text-ink-soft uppercase">Hours</dt>
                  <dd className="mt-1">{site.hoursNote}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-navy px-6 py-3.5 font-display text-xl font-extrabold tracking-wide text-paper uppercase transition hover:bg-navy-deep"
                >
                  Get directions
                </a>
                <a
                  href={site.phoneHref}
                  className="rounded-md border-2 border-navy px-6 py-3 font-display text-xl font-extrabold tracking-wide text-navy uppercase transition hover:bg-navy hover:text-paper"
                >
                  Call the shop
                </a>
              </div>
              <div className="door mt-10 max-w-md rounded-lg shadow-lg">
                <Image
                  src="/images/counter.webp"
                  alt="The front counter, covered in vintage car signs and patriotic decor"
                  width={680}
                  height={510}
                  sizes="(min-width: 1024px) 448px, 92vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="rise min-h-[380px] overflow-hidden rounded-lg shadow-lg lg:min-h-0">
              <iframe
                title="Map to Quality Auto Repair, 615 E Second Ave, Gastonia"
                src={site.mapsEmbed}
                className="h-full min-h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="bg-navy-deep text-paper">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rise">
              <p className="text-sm font-bold tracking-[0.14em] text-sign uppercase">Get a quote</p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] font-black uppercase sm:text-6xl">
                Tell us what it&rsquo;s doing.
              </h2>
              <p className="mt-6 text-lg text-paper/80">
                Send a few details and we&rsquo;ll call you back. For anything urgent, calling is fastest.
              </p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2.5 font-display text-3xl font-extrabold text-sign hover:text-paper"
              >
                <PhoneIcon className="size-6" />
                {site.phone}
              </a>
            </div>
            <div className="rise">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <div className="tri-stripe" />
      <footer className="bg-ink pb-24 text-paper/70 md:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm">{site.tagline}.</p>
          </div>
          <address className="text-sm not-italic">
            <p className="font-semibold text-paper">{site.name}</p>
            <p className="mt-1">
              {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
            <p className="mt-1">
              <a href={site.phoneHref} className="hover:text-paper">
                {site.phone}
              </a>
            </p>
          </address>
          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-paper">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-paper/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-4 py-6 text-xs text-paper/60 sm:px-6">
            <span>
              &copy; <Year /> {site.legalName}
            </span>
            <span>
              Designed by{' '}
              <a
                href="https://www.sitesonpolaris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition"
              >
                Sites on Polaris
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-ink/20 bg-ink/20 md:hidden">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 bg-sign py-4 font-display text-xl font-extrabold text-ink uppercase"
        >
          <PhoneIcon /> Call
        </a>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-navy py-4 font-display text-xl font-extrabold text-paper uppercase"
        >
          Directions
        </a>
      </div>
    </>
  );
}
