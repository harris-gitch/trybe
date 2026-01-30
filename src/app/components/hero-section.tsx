import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#191D1E]">
      {/* Layered Background with Multiple Sahara Images */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1641050075956-82a3f0df6100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWhhcmElMjBkZXNlcnQlMjBsYW5kc2NhcGUlMjBhZXJpYWx8ZW58MXx8fHwxNzY5ODEzMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sahara Desert Aerial View"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#191D1E] via-[#191D1E]/70 to-[#FF5318]/20" />
        
        {/* Animated Dune Shapes */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-20">
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path 
              fill="#FF5318" 
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        {/* Decorative Element */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FF5318] to-transparent"></div>
        </div>

        <h1 
          className="text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-none"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
        >
          <span className="text-[#F4F3F0] block mb-2">Join the</span>
          <span className="text-[#FF5318] italic">Trybe</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-[#F4F3F0]/90 max-w-3xl mx-auto mb-14 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontWeight: '400' }}
        >
          Where innovation meets collaboration. Build the future with a team rooted in culture, 
          driven by purpose, and designed for growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#open-roles"
            className="group relative px-10 py-5 bg-[#FF5318] text-[#F4F3F0] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF5318]/50 hover:scale-105"
            style={{ fontFamily: 'var(--font-body)', fontWeight: '500' }}
          >
            <span className="relative z-10">View Open Roles</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5318] to-[#FF5318]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#who-we-are"
            className="px-10 py-5 bg-transparent text-[#F4F3F0] border-2 border-[#F4F3F0]/50 rounded-full hover:bg-[#F4F3F0]/10 hover:border-[#F4F3F0] transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)', fontWeight: '500' }}
          >
            Discover Our Culture
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[#FF5318] text-sm tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#FF5318] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#F4F3F0 1px, transparent 1px), linear-gradient(90deg, #F4F3F0 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>
    </section>
  );
}
