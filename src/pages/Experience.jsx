const EXPERIENCES = [
  {
    company: 'PT Agraris Muda Indonesia',
    role: 'Journalism Intern',
    mode: 'Remote',
    period: 'Jun 2026 – Aug 2026',
    points: [
      'Completed the Journalism Internship Program (Batch 2), focusing on media production and information dissemination within the agriculture sector.',
      'Conducted in-depth research, data collection, and verification to identify emerging topics and transform raw data into well-structured, informative news articles.',
      'Collaborated with internal editorial teams to organize content workflows, manage publishing schedules, and adapt complex technical agricultural concepts into engaging narratives for target audiences.',
    ],
    tags: [
      'Journalism',
      'Content Research',
      'Data Verification',
      'Technical Writing',
      'Agriculture & Agribusiness',
      'Critical Thinking',
    ],
  },
  {
    company: 'Bogo Software House',
    role: 'Backend Developer',
    period: 'Sep 2025 – Dec 2025',
    points: [
      'Analyzed, cleaned, and structured raw client data to ensure data accuracy and readiness for system implementation.',
      'Designed and built relational database schemas using MySQL to store and manage client data efficiently.',
      'Developed backend services and RESTful APIs using Laravel to support data integration and access for client applications.',
    ],
    tags: [
      'Laravel',
      'MySQL',
      'Data Cleaning',
      'Database Management',
      'Database Schema Design',
      'RESTful API',
    ],
  },
  {
    company: 'Dicoding Academy',
    role: 'Front-End and Back-End Developer Cohort',
    mode: 'Remote',
    period: 'Feb 2025 – Jul 2025',
    points: [
      'Selected as one of the 2,500 students out of 63,000+ applicants nationwide (top 4% acceptance rate) for an intensive tech training program powered by DBS Foundation.',
      'Completed a structured learning path specializing in Front-End and Back-End development, acquiring industry-standard technical skills in React.js, Tailwind CSS, Laravel, MySQL, and server deployment via DigitalOcean VPS.',
      'Developed full-stack web applications, including client-side machine learning integration for real-time applications, while enhancing soft skills, financial literacy, and professional English proficiency.',
    ],
    tags: [
      'React.js',
      'Tailwind CSS',
      'Laravel',
      'MySQL',
      'RESTful API',
      'DigitalOcean',
      'Full-Stack Web Development',
    ],
  },
];

export default function Experience() {
  return (
    <section className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-5 flex items-center gap-2 font-mono text-xs text-[#9C9184] dark:text-[#746859]">
          <span className="text-[#BF5B37] dark:text-[#E08856]">/</span> experience
        </p>
        <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#241F19] dark:text-[#F1E9DC] sm:text-5xl">
          My Experience<span className="text-[#BF5B37] dark:text-[#E08856]">.</span>
        </h1>
      </div>

      {/* Timeline */}
      <ol className="relative ml-1.5 border-l border-[#E4DAC9] dark:border-[#382E22]">
        {EXPERIENCES.map((item) => (
          <li key={item.company} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            {/* Marker */}
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-[#BF5B37] bg-[#FBF7F0] dark:border-[#E08856] dark:bg-[#17130F]" />

            {/* Meta */}
            <p className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-[#9C9184] dark:text-[#8D7F6E]">
              <span>{item.period}</span>
              {item.mode && (
                <>
                  <span className="text-[#BF5B37] dark:text-[#E08856]">✳</span>
                  <span>{item.mode}</span>
                </>
              )}
            </p>

            {/* Title */}
            <h2 className="font-serif text-2xl leading-tight text-[#30261E] dark:text-[#F1E9DC]">
              {item.company}
            </h2>
            <p className="mt-1 font-serif text-base italic text-[#BF5B37] dark:text-[#E08856]">
              {item.role}
            </p>

            {/* Points */}
            <ul className="mt-5 max-w-[65ch] space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-7 text-[#6E6459] dark:text-[#A79A87]">
                  <span className="pt-0.5 font-mono text-[#BF5B37] dark:text-[#E08856]">–</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E9DFD1] px-2.5 py-1 font-mono text-[10px] text-[#8B7A68] dark:border-[#382E22] dark:text-[#B5A592]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}