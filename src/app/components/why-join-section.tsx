export function WhyJoinSection() {
  const benefits = [
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Access to courses, workshops, conferences, and mentorship programs. We invest in your growth because your success is our success.',
      accentColor: '#FF5318',
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear paths for advancement, regular feedback cycles, and opportunities to lead. Your career trajectory is in your hands.',
      accentColor: '#6595F1',
    },
    {
      icon: '💡',
      title: 'True Ownership',
      description: 'Own your projects from concept to launch. Make decisions, drive impact, and see the direct results of your contributions.',
      accentColor: '#FF5318',
    },
    {
      icon: '🌟',
      title: 'Collaborative Culture',
      description: 'Work with talented, passionate people who genuinely care. Share knowledge, celebrate wins, and build lasting relationships.',
      accentColor: '#6595F1',
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Sahara Waves */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 800" className="w-full h-full">
          <path 
            d="M0,100 Q100,80 200,100 T400,100 L400,0 L0,0 Z" 
            fill="#FF5318" 
            opacity="0.3"
          />
          <path 
            d="M0,300 Q100,280 200,300 T400,300 L400,200 L0,200 Z" 
            fill="#6595F1" 
            opacity="0.2"
          />
          <path 
            d="M0,500 Q100,480 200,500 T400,500 L400,400 L0,400 Z" 
            fill="#FF5318" 
            opacity="0.3"
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
              Benefits
            </span>
          </div>
          <h2 
            className="text-6xl md:text-7xl mb-8 text-[#191D1E] leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
          >
            Why Join <span className="text-[#FF5318] italic">Trybe</span>
          </h2>
          <p 
            className="text-xl text-[#191D1E]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Beyond competitive compensation and benefits, here's what makes Trybe an exceptional place to build your career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#F4F3F0] to-white p-10 rounded-3xl h-full transition-all duration-500 group-hover:-translate-y-2 border border-[#191D1E]/5 hover:border-[#FF5318]/20 hover:shadow-xl">
                {/* Icon Container */}
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF5318]/10 to-[#6595F1]/10 rounded-2xl mb-6 text-4xl group-hover:scale-110 transition-transform duration-300"
                >
                  {benefit.icon}
                </div>
                
                <div>
                  <h3 
                    className="text-3xl mb-4 text-[#191D1E]"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="text-[#191D1E]/70 leading-relaxed text-lg"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 rounded-b-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: benefit.accentColor }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Perks */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#FF5318]/5 via-[#6595F1]/5 to-[#FF5318]/5 px-8 py-6 rounded-2xl">
            <p 
              className="text-[#191D1E]/60 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="text-[#FF5318]">+</span> Flexible work arrangements 
              <span className="text-[#191D1E]/30 mx-3">•</span> Competitive salary 
              <span className="text-[#191D1E]/30 mx-3">•</span> Health & wellness benefits
              <br className="hidden md:block" />
              <span className="text-[#191D1E]/30 mx-3">•</span> Team retreats 
              <span className="text-[#191D1E]/30 mx-3">•</span> Latest tech & tools 
              <span className="text-[#191D1E]/30 mx-3">•</span> And more...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
