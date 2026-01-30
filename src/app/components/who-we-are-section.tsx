export function WhoWeAreSection() {
  const values = [
    {
      title: 'Innovation & Adaptability',
      description: 'We embrace change as opportunity. Our team thrives on pushing boundaries, exploring new technologies, and adapting to the evolving digital landscape with agility and purpose.',
      gradient: 'from-[#FF5318]/10 to-[#FF5318]/5',
    },
    {
      title: 'Collaboration & Tribe Mindset',
      description: 'We believe in the power of collective intelligence. Every voice matters, every idea counts. We build together, learn together, and succeed together as one unified tribe.',
      gradient: 'from-[#6595F1]/10 to-[#6595F1]/5',
    },
    {
      title: 'Rooted Culture, Futuristic Vision',
      description: 'Like the Sahara—ancient yet ever-shifting—we draw strength from our roots while constantly moving forward. Our culture is timeless, our vision is boundless.',
      gradient: 'from-[#FF5318]/10 via-[#6595F1]/5 to-[#FF5318]/5',
    },
  ];

  return (
    <section id="who-we-are" className="relative py-32 bg-[#F4F3F0] overflow-hidden">
      {/* Sahara Wave Pattern */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-10">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path 
            fill="#FF5318" 
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span 
              className="text-[#FF5318] uppercase tracking-[0.3em] text-sm"
              style={{ fontFamily: 'var(--font-body)', fontWeight: '600' }}
            >
              Who We Are
            </span>
          </div>
          <h2 
            className="text-6xl md:text-7xl mb-8 text-[#191D1E] leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
          >
            The <span className="text-[#FF5318] italic">Trybe</span> DNA
          </h2>
          <p 
            className="text-xl text-[#191D1E]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Our values aren't just words on a wall—they're the foundation of everything we build, 
            every decision we make, and every relationship we nurture.
          </p>
        </div>

        {/* Value Blocks */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${value.gradient} backdrop-blur-sm p-10 rounded-3xl border border-[#191D1E]/5 hover:border-[#FF5318]/30 transition-all duration-500 hover:-translate-y-2 h-full`}>
                {/* Number */}
                <div 
                  className="text-8xl font-bold text-[#FF5318]/10 absolute top-4 right-6 leading-none"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-1 bg-[#FF5318] mb-6"></div>
                  <h3 
                    className="text-3xl mb-5 text-[#191D1E] leading-tight"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-[#191D1E]/70 leading-relaxed text-lg"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {value.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF5318]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Dune Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-5">
        <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
          <path 
            fill="#191D1E" 
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  );
}
