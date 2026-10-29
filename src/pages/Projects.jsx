const PROJECTS = [
  {
    title: 'Khairul Audio',
    type: 'E-Commerce & Freight Recommendation',
    year: '2026',
    description:
      'An e-commerce system for Khairul Audio, covering the product catalogue, checkout, and shipping-cost recommendations. Usability was validated with a System Usability Scale survey of 40 respondents, alongside full black-box functional testing.',
    highlight: '✓ 100% pass rate on black-box testing',
    tags: ['Laravel', 'MySQL', 'RajaOngkir API', 'QRIS Webhook'],
    link: 'https://www.khairulaudio.web.id/',
    cover: 'bg-[#EDE0CF] dark:bg-[#30251C]',
    coverText: 'text-[#80553A] dark:text-[#E3A17B]',
    coverLabel: 'text-[#9B6C4B] dark:text-[#B5A18A]',
  },
  {
    title: 'Awakey',
    type: 'Machine Learning / Web App',
    description:
      'A web-based drowsiness detection system that recognises eye state in real time, running the machine learning model directly in the browser.',
    tags: ['React', 'Vite', 'TensorFlow.js'],
    link: 'https://awakeyme.vercel.app/',
    cover: 'bg-[#E1E6DC] dark:bg-[#202A22]',
    coverText: 'text-[#486449] dark:text-[#A9C7A6]',
    coverLabel: 'text-[#5F8060] dark:text-[#8FAE8C]',
  },
  {
    title: 'Padang Earthquake Map',
    type: 'GIS / Disaster Mitigation',
    year: '2025',
    description:
      'A spatial analysis of earthquake and tsunami risk in Padang City. It maps risk zones, population density, and public facilities to support evacuation planning.',
    tags: ['QGIS', 'Spatial Analysis', 'GitHub Pages'],
    link: 'https://suciramalubis.github.io/SIG-KOTA-PADANG/',
    cover: 'bg-[#DDE4E8] dark:bg-[#1F2A31]',
    coverText: 'text-[#46606E] dark:text-[#A5C0CF]',
    coverLabel: 'text-[#5F7C8B] dark:text-[#87A3B3]',
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-5 flex items-center gap-2 font-mono text-xs text-[#9C9184] dark:text-[#746859]">
          <span className="text-[#BF5B37] dark:text-[#E08856]">/</span> projects
        </p>
        <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#241F19] dark:text-[#F1E9DC] sm:text-5xl">
          Things I've built<span className="text-[#BF5B37] dark:text-[#E08856]">.</span>
        </h1>
      </div>

      {/* Projects */}
      <div className="space-y-5">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className="group grid overflow-hidden rounded-2xl border border-[#EEE6D8] transition-colors duration-300 hover:border-[#D8B9A0] dark:border-[#2C241B] dark:hover:border-[#644432] md:grid-cols-[0.8fr_1.2fr]"
          >
            {/* Cover */}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.title}`}
              className={`relative flex min-h-44 items-center justify-center overflow-hidden ${project.cover}`}
            >
              <div className="absolute inset-4 rounded-xl border border-black/5 dark:border-white/10" />
              <span className={`absolute left-6 top-5 font-mono text-[10px] tracking-[0.2em] ${project.coverLabel}`}>
                PROJECT / 0{index + 1}
              </span>
              <span
                className={`px-6 text-center font-serif text-3xl tracking-tight transition-transform duration-500 group-hover:scale-105 sm:text-4xl ${project.coverText}`}
              >
                {project.title}
              </span>
            </a>

            {/* Content */}
            <div className="flex flex-col p-5 sm:p-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[#BF5B37] dark:text-[#E08856]">
                  {project.type}
                </p>
                {project.year && (
                  <span className="font-mono text-[11px] text-[#9C9184] dark:text-[#746859]">{project.year}</span>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#6E6459] dark:text-[#A79A87]">
                {project.description}
              </p>

              {project.highlight && (
                <span className="mt-4 inline-flex w-fit items-center rounded-md bg-[#F3DFCF] px-2.5 py-1 font-mono text-[11px] text-[#BF5B37] dark:bg-[#3A2A1E] dark:text-[#E08856]">
                  {project.highlight}
                </span>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E9DFD1] px-2.5 py-1 font-mono text-[10px] text-[#8B7A68] dark:border-[#382E22] dark:text-[#B5A592]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-medium text-[#BF5B37] transition-colors hover:text-[#963D22] dark:text-[#E08856] dark:hover:text-[#F0A174]"
              >
                Visit site
                <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}