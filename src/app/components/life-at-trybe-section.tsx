import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function LifeAtTrybeSection() {
  const principles = [
    {
      quote: "We don't just build products—we build people.",
      author: 'Trybe Philosophy',
    },
    {
      quote: "Growth happens at the edge of comfort. We create space for bold ideas and brave experiments.",
      author: 'Our Commitment',
    },
    {
      quote: "Every member of the tribe brings unique strengths. We celebrate diversity in thought, background, and approach.",
      author: 'Team First',
    },
  ];

  return (
    <section className="relative py-32 bg-[#191D1E] text-[#F4F3F0] overflow-hidden">
      {/* Layered Sahara Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1703878119848-8f3a6f8f5e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWhhcmElMjBkZXNlcnQlMjBkdW5lcyUyMGFic3RyYWN0fGVufDF8fHx8MTc2OTgxMjU2NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sahara Dunes"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#191D1E] via-[#191D1E]/95 to-[#191D1E]"></div>
      </div>

      {/* Dune Wave Top */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path 
            fill="#FF5318" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
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
              Our Culture
            </span>
          </div>
          <h2 
            className="text-6xl md:text-7xl mb-8 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
          >
            Life at <span className="text-[#FF5318] italic">Trybe</span>
          </h2>
          <p 
            className="text-xl text-[#F4F3F0]/80 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            More than a workplace, Trybe is a community where creativity meets purpose, 
            and individual growth fuels collective success.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-10 rounded-3xl border border-[#F4F3F0]/10 hover:border-[#FF5318]/50 transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Quote Mark */}
                <div 
                  className="text-7xl text-[#FF5318] leading-none mb-4 opacity-30"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  "
                </div>
                
                <p 
                  className="text-xl mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {principle.quote}
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#FF5318]"></div>
                  <p 
                    className="text-[#FF5318] text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '600' }}
                  >
                    {principle.author}
                  </p>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF5318]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Grid - Modern Masonry */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 aspect-video rounded-3xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzY5ODEyNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Innovation and Technology"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-12 md:col-span-5 aspect-video rounded-3xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758876201723-9f050343325c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMHdvcmtmbG93JTIwbW9kZXJufGVufDF8fHx8MTc2OTgxMjU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern Teamwork"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path 
            fill="#FF5318" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
