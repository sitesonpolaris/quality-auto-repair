// Business data for Quality Auto Repair. Source: Google Business Profile (Oct 2026).
// Items marked CONFIRM still need the owner's sign-off.

export const site = {
  name: "Quality Auto Repair",
  legalName: "Quality Auto Repair and Service, LLC",
  url: "https://quality-auto-repair-gastonia.netlify.app",
  tagline: "Family- and veteran-owned auto repair in Gastonia, NC",
  description:
    "Family- and veteran-owned auto repair shop on E Second Ave in Gastonia, NC. Brakes, engine diagnostics, A/C, tires, transmission, oil changes and general repairs.",
  phone: "(980) 888-0293",
  phoneHref: "tel:+19808880293",
  address: {
    street: "615 E Second Ave",
    city: "Gastonia",
    region: "NC",
    postalCode: "28054",
  },
  geo: { lat: 35.2617, lng: -81.1757 }, // CONFIRM: approximate
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Quality+Auto+Repair+615+E+Second+Ave+Gastonia+NC+28054",
  mapsEmbed:
    "https://www.google.com/maps?q=Quality+Auto+Repair,+615+E+Second+Ave,+Gastonia,+NC+28054&output=embed",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Quality+Auto+Repair+615+E+Second+Ave+Gastonia+NC",
  rating: { value: 4.6, count: 144 },
  // CONFIRM: full weekly hours. Google only showed "Closes 5 PM".
  hoursNote: "We close at 5 PM. Call ahead to confirm today's hours.",
  serviceArea: ["Gastonia", "Lowell", "Ranlo", "Dallas", "Cramerton", "Belmont"], // CONFIRM
  tireBrands: ["Michelin", "BFGoodrich", "Uniroyal"], // from the storefront awning
} as const;

export const services = [
  { name: "Engine diagnostics", blurb: "Check engine light on? We read the codes and find the actual cause before we quote a repair." },
  { name: "Brakes", blurb: "Pads, rotors, calipers and brake lines. Squeaks, grinding or a soft pedal? Bring it in." },
  { name: "Oil changes", blurb: "Quick oil and filter changes with a look over the basics while your car is on the lift." },
  { name: "Tires", blurb: "New tires mounted and balanced, flat repairs and rotations." },
  { name: "Air conditioning", blurb: "A/C diagnosis and recharge, so you're not sweating out a Carolina summer." },
  { name: "Engine repair", blurb: "From leaks and belts to bigger engine work, explained in plain words before we start." },
  { name: "Transmission", blurb: "Slipping, hard shifts or fluid leaks diagnosed and repaired." },
  { name: "Steering & suspension", blurb: "Shocks, struts, tie rods and ball joints for a car that tracks straight and rides right." },
  { name: "Electrical repair", blurb: "Batteries, alternators, starters and the wiring gremlins in between." },
  { name: "General maintenance", blurb: "Fluids, filters, belts and the scheduled upkeep that keeps a car out of the shop." },
] as const;

// Verbatim from the Google review summary. No reviewer names were shown there.
export const reviews = [
  { quote: "Good family business, nice atmosphere and speedy service.", source: "Google review" },
  { quote: "Great people fast service, great prices", source: "Google review" },
] as const;
