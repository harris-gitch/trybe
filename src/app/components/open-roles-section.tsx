export function OpenRolesSection() {
  const roles = [
    {
      title: 'Senior Full-Stack Developer',
      team: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
    },
    {
      title: 'UX/UI Designer',
      team: 'Design',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Manager',
      team: 'Product',
      location: 'On-site',
      type: 'Full-time',
    },
    {
      title: 'DevOps Engineer',
      team: 'Infrastructure',
      location: 'Remote / Hybrid',
      type: 'Full-time',
    },
    {
      title: 'Digital Marketing Specialist',
      team: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Data Analyst',
      team: 'Analytics',
      location: 'Hybrid',
      type: 'Full-time',
    },
  ];

  return (
    <section id="open-roles" className="relative py-32 bg-[#F4F3F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span 
              className="text-[#FF5318] uppercase tracking-[0.3em] text-sm"
              style={{ fontFamily: 'var(--font-body)', fontWeight: '600' }}
            >
              Opportunities
            </span>
          </div>
          <h2 
            className="text-6xl md:text-7xl mb-8 text-[#191D1E] leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
          >
            Open <span className="text-[#FF5318] italic">Roles</span>
          </h2>
          <p 
            className="text-xl text-[#191D1E]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Find your place in the tribe. We're looking for passionate individuals ready to make an impact.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#FF5318]/20"
            >
              {/* Team Badge */}
              <div className="mb-6">
                <span 
                  className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF5318]/10 to-[#FF5318]/5 text-[#FF5318] rounded-full text-sm border border-[#FF5318]/20"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '600' }}
                >
                  {role.team}
                </span>
              </div>
              
              <h3 
                className="text-2xl mb-4 text-[#191D1E] leading-tight min-h-[4rem]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
              >
                {role.title}
              </h3>
              
              <div 
                className="flex flex-col gap-2 mb-6 text-[#191D1E]/60"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5318]">📍</span>
                  <span>{role.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5318]">⏰</span>
                  <span>{role.type}</span>
                </div>
              </div>
              
              <button 
                className="w-full py-3 px-6 bg-[#191D1E] text-[#F4F3F0] rounded-xl hover:bg-[#FF5318] transition-all duration-300 group-hover:shadow-lg"
                style={{ fontFamily: 'var(--font-body)', fontWeight: '500' }}
              >
                Apply Now →
              </button>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF5318]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Spontaneous Application Card */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="relative bg-gradient-to-br from-[#191D1E] via-[#191D1E] to-[#FF5318]/20 p-12 rounded-[3rem] text-center shadow-2xl overflow-hidden">
            {/* Sahara Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, #F4F3F0 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-1 bg-[#FF5318] mx-auto mb-6"></div>
              <h3 
                className="text-4xl mb-6 text-[#F4F3F0]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
              >
                Don't See Your Role?
              </h3>
              <p 
                className="text-[#F4F3F0]/90 mb-8 leading-relaxed text-lg max-w-xl mx-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We're always looking for exceptional talent. Send us a spontaneous application 
                and tell us how you can contribute to the Trybe.
              </p>
              <button 
                className="px-10 py-4 bg-[#FF5318] text-[#F4F3F0] rounded-full hover:bg-[#F4F3F0] hover:text-[#191D1E] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                style={{ fontFamily: 'var(--font-body)', fontWeight: '500' }}
              >
                Submit Spontaneous Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
