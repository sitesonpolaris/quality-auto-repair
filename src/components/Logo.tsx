// Mirrors the real storefront sign: yellow plate, navy letters, red underline.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col overflow-hidden rounded-[3px] bg-sign shadow-sm ${className}`}>
      <span className="px-2.5 pt-1 pb-0.5 font-display text-[1.35rem] leading-none font-black tracking-wide text-navy uppercase">
        Quality Auto Repair
      </span>
      <span className="h-1 bg-stripe" />
    </span>
  );
}
