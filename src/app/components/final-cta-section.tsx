import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function FinalCTASection() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Layered Sahara Background */}
      <div className="absolute inset-0 bg-[#191D1E]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1641050075956-82a3f0df6100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWhhcmElMjBkZXNlcnQlMjBsYW5kc2NhcGUlMjBhZXJpYWx8ZW58MXx8fHwxNzY5ODEzMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sahara Desert Landscape"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191D1E] via-[#191D1E]/90 to-[#191D1E]/60" />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5318]/20 via-transparent to-[#6595F1]/10 opacity-50"></div>
      </div>

      {/* Dune Waves */}
      <div className="absolute top-0 left-0 w-full h-40 opacity-20">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path 
            fill="#FF5318" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Decorative Top Element */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#FF5318]"></div>
            <div className="w-2 h-2 bg-[#FF5318] rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#FF5318]"></div>
          </div>
        </div>

        <h2 
          className="text-6xl md:text-7xl lg:text-8xl mb-10 text-[#F4F3F0] leading-tight"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
        >
          Ready to Build
          <br />
          the <span className="text-[#FF5318] italic">Future</span>
          <br />
          With Us?
        </h2>
        
        <p 
          className="text-xl md:text-2xl text-[#F4F3F0]/90 mb-14 leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Your next chapter starts here. Join a tribe that values your voice, 
          nurtures your growth, and empowers you to create meaningful impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <a
            href="#open-roles"
            className="group relative px-12 py-6 bg-[#FF5318] text-[#F4F3F0] rounded-full text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF5318]/50 hover:scale-105"
            style={{ fontFamily: 'var(--font-body)', fontWeight: '600' }}
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5318] to-[#FF5318]/70 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
          <a
            href="mailto:careers@thetrybe.com"
            className="px-12 py-6 bg-transparent text-[#F4F3F0] border-2 border-[#F4F3F0]/50 rounded-full text-lg hover:bg-[#F4F3F0]/10 hover:border-[#F4F3F0] transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)', fontWeight: '600' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Decorative Bottom Elements */}
        <div className="flex flex-wrap justify-center gap-12 text-[#F4F3F0]/50">
          {['Innovate', 'Collaborate', 'Evolve', 'Grow'].map((word, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-default">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#FF5318] to-transparent group-hover:via-[#6595F1] transition-colors duration-300"></div>
              <span 
                className="text-sm uppercase tracking-widest group-hover:text-[#F4F3F0] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)', fontWeight: '500' }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-10">
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
