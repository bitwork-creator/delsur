const items = [
  'Diseño Web', 'Google Ads', 'CRO', 'GTM', 'GA4',
  'Next.js', 'WordPress', 'Tracking', 'Valencia', 'España', 'Patagonia → Valencia',
]

function MarqueeContent() {
  return (
    <div className="flex items-center gap-0 whitespace-nowrap" aria-hidden>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-oswald font-light text-lg uppercase tracking-widest px-6" style={{ color: '#EDEDED' }}>
            {item}
          </span>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF3319' }} />
        </span>
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section
      className="py-4 overflow-hidden"
      style={{ background: '#020202' }}
      aria-label="Technologies and services"
    >
      <div
        className="flex gap-0 group"
        style={{ width: 'max-content' }}
      >
        <div className="animate-marquee flex group-hover:[animation-play-state:paused]">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </section>
  )
}
