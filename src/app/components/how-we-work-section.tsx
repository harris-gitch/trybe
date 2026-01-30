import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HowWeWorkSection() {
  const workflowSteps = [
    {
      number: '01',
      title: 'Open Brainstorming',
      description: "We don't wait for perfection - we iterate, experiment, and grow. Mistakes are lessons, projects are classrooms, and every challenge is a chance to evolve.",
    },
    {
      number: '02',
      title: 'Flat Communication',
      description: 'No hierarchies, no gatekeepers. Ideas flow freely across teams and roles. Junior or senior, your insights shape our direction and drive real impact.',
    },
    {
      number: '03',
      title: 'Learning by Doing',
      description: "We don't wait for perfection - we iterate, experiment, and grow. Mistakes are lessons, projects are classrooms, and every challenge is a chance to evolve.",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Sahara Texture Background */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1549476130-8afd7ecd8a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kJTIwdGV4dHVyZSUyMG1pbmltYWwlMjBiZWlnZXxlbnwxfHx8fDE3Njk4MTMyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sand Texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span 
              className="text-[#FF5318] uppercase tracking-[0.3em] text-sm"
              style={{ fontFamily: 'var(--font-body)', fontWeight: '600' }}
            >
              Our Process
            </span>
          </div>
          <h2 
            className="text-6xl md:text-7xl mb-8 text-[#191D1E] leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
          >
            How We <span className="text-[#FF5318] italic">Work</span>
          </h2>
          <p 
            className="text-xl text-[#191D1E]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Our culture of collaboration and continuous learning shapes everything we do. 
            Here's what makes working at Trybe different.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative pl-24"
              >
                {/* Connecting Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-px h-full bg-gradient-to-b from-[#FF5318] to-transparent opacity-20"></div>
                )}
                
                {/* Number Circle */}
                <div 
                  className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-[#FF5318] to-[#FF5318]/80 text-[#F4F3F0] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
                >
                  {step.number}
                </div>
                
                <div>
                  <h3 
                    className="text-3xl mb-4 text-[#191D1E]"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-[#191D1E]/70 leading-relaxed text-lg"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image with Sahara-inspired design */}
          <div className="relative">
            <div className="relative aspect-square">
              {/* Main Image */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768207750856-e1241dd2888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMHdhdmVzJTIwcGF0dGVybnxlbnwxfHx8fDE3Njk4MTMyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Desert Dunes Pattern"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5318]/30 via-transparent to-[#6595F1]/20"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#6595F1]/20 to-[#6595F1]/10 rounded-[2rem] -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-[#FF5318]/20 to-[#FF5318]/10 rounded-[2rem] -z-10"></div>
              
              {/* Geometric Accent */}
              <div className="absolute top-1/2 -right-6 w-12 h-24 bg-[#FF5318] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
