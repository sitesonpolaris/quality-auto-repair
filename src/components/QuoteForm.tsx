"use client";

import { useState, type FormEvent } from "react";
import { services, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-md border border-ink/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = new FormData(form);
    try {
      // Netlify detects the form from public/__forms.html.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-lg bg-white p-8 text-ink shadow-sm">
        <p className="font-display text-3xl font-extrabold uppercase text-navy">Got it. Thanks!</p>
        <p className="mt-3 text-ink-soft">
          We&rsquo;ll call you back during shop hours. Need us sooner? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-navy underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form name="quote" method="post" action="/__forms.html" onSubmit={onSubmit} className="grid gap-4 rounded-lg bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out: <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label className="grid gap-1.5 text-sm font-semibold text-ink">
        Name
        <input type="text" name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-ink">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-ink">
        Vehicle (year, make, model)
        <input type="text" name="vehicle" placeholder="2015 Honda Accord" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-ink">
        Service
        <select name="service" defaultValue="" className={field}>
          <option value="" disabled>
            Pick one
          </option>
          {services.map((s) => (
            <option key={s.name}>{s.name}</option>
          ))}
          <option>Not sure / something else</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-ink sm:col-span-2">
        What&rsquo;s going on?
        <textarea name="message" rows={4} placeholder="Noise, warning light, when it started…" className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-stripe px-7 py-3.5 font-display text-xl font-extrabold tracking-wide text-white uppercase transition hover:bg-stripe/90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request a quote"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm font-semibold text-stripe">
            That didn&rsquo;t go through. Please call {site.phone}.
          </p>
        )}
      </div>
    </form>
  );
}
