#!/usr/bin/env bash
# Pulls the final hero video edit (made in the Higgsfield sandbox) into public/video.
set -euo pipefail
cd "$(dirname "$0")/.."
URL="https://d2ol7oe51mr4n9.cloudfront.net/user_3KxhfbooZLKzyzCDzN5VzChvnpR/fd600f9d-86ad-491f-affb-d8c054eaeb33.zip"
tmp="$(mktemp -d)"
curl -fsSL -o "$tmp/hero.zip" "$URL"
unzip -o -q "$tmp/hero.zip" -d public/video
(cd public/video && sha256sum -c - <<'SUMS'
7b0e9888a5705a4fc747f4575efaefbc8563c453c1895d4fe36d2f0c88906f23  hero-1080.mp4
ff22240bfdcfdbf9948c0191b6fc9231b3c0c7b6734c125848020239918071cf  hero-mobile.mp4
4ebaf4b43b986d32740bff05033a1259c46c0c739262e9cab651d7965c5550c3  hero-poster.jpg
b3b47baa9e7ef0be0e72ef2c94c4972d1dbdc975b20170328c10d329bb33c25b  hero-poster.webp
SUMS
)
rm -rf "$tmp"
