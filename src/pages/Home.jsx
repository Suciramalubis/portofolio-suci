
import { NavLink } from 'react-router-dom';

const PROFILE = [
  { label: 'Based in', value: 'Medan, Indonesia' },
  { label: 'Education', value: 'Informatics Engineering · ITP' },
  { label: 'Main focus', value: 'Full-Stack Web Development, Data Analytics & IT Solutions' },
  { label: 'Currently', value: 'Open to Work & Collaborations' },
];

const FOCUS_AREAS = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'Building responsive, user-centric interfaces and robust backend logic to deliver seamless digital products.',
    tags: ['React', 'Laravel', 'Tailwind CSS', 'MySQL'],
  },
  {
    number: '02',
    title: 'Data Analysis & Processing',
    description:
      'Extracting insights, managing structured databases, and processing complex datasets to support data-driven decision making.',
    tags: ['Python', 'Data Analytics', 'SQL', 'Data Modeling'],
  },
  {
    number: '03',
    title: 'API & System Integration',
    description:
      'Connecting applications to external services and building reliable workflows to ensure smooth system interoperability.',
    tags: ['REST API', 'Webhooks', 'System Integration', 'RajaOngkir'],
  },
  {
    number: '04',
    title: 'IT Solutions & Support',
    description:
      'Solving technical challenges, optimizing system performance, and providing reliable IT infrastructure support.',
    tags: ['Troubleshooting', 'System Admin', 'Technical Support'],
  },
];

const TOOLS = [
  'React',
  'Tailwind CSS',
  'Laravel',
  'MySQL',
  'Docker',
  'Nginx',
  'DigitalOcean',
  'Git',
  'GitHub',
  'RajaOngkir API',
  'TypeScript',
  'PHP',
  'TensorFlow.js',
];

const PROJECTS = [
  {
    number: '01',
    type: 'WEB DEVELOPMENT / E-COMMERCE',
    title: 'Toko Khairul Audio',
    description:
      'An e-commerce platform concept for automotive audio products, with product management, online ordering, and contextual shipping-service recommendations.',
    tags: ['React', 'PHP', 'MySQL', 'SAW'],
    accent: 'audio',
  },
  {
    number: '02',
    type: 'MACHINE LEARNING / WEB APP',
    title: 'Awakey',
    description:
      'A web-based drowsiness detection project exploring real-time eye-state recognition and machine learning in the browser.',
    tags: ['React', 'Vite', 'TensorFlow.js'],
    accent: 'aw ak ey',
  },
];

const NOW = [
  'Actively seeking new opportunities in Data Analytics, Web Development, and IT roles.',
  'Refining e-commerce systems and expanding expertise in data processing for better decision-making.',
  'Designing and implementing RESTful APIs to ensure seamless integration across diverse platforms.',
  'Applying analytical methodologies to extract actionable insights from structured databases.',
  'Exploring scalable IT infrastructure solutions to optimize application performance and reliability.',
];

const sectionTitle =
  'text-2xl sm:text-3xl font-serif font-medium tracking-tight text-[#241F19] dark:text-[#F1E9DC]';

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="space-y-16 md:space-y-24">
      {/* HERO */}
      <section className="relative pt-1">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Introduction */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8DDCE] bg-[#F8F3EB] px-3 py-1.5 dark:border-[#382E22] dark:bg-[#211B16]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7BA86A]" />
              <span className="font-mono text-[10px] text-[#756758] dark:text-[#B5A592]">
                OPEN TO WORK
              </span>
            </div>

            <p className="mb-2 font-serif text-lg italic text-[#BF5B37] dark:text-[#E08856]">
              Hello, I'm
            </p>

            <h1 className="max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#241F19] dark:text-[#F1E9DC] sm:text-5xl xl:text-[62px]">
              Suci Ramadhani
              <span className="block">Lubis<span className="text-[#BF5B37] dark:text-[#E08856]">.</span></span>
            </h1>

            <p className="mt-5 max-w-[55ch] text-sm leading-7 text-[#756B60] dark:text-[#A79A87] sm:text-[15px]">
              I craft modern web applications that blend intuitive interfaces, robust functionality, and scalable data systems. Passionate about Full-Stack development and seamless API integration, I am always eager to collaborate and turn complex ideas into impactful digital solutions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <NavLink
                to="/projects"
                className="inline-flex items-center gap-3 rounded-full bg-[#BF5B37] px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A7492A] dark:bg-[#E08856] dark:text-[#211B16] dark:hover:bg-[#F0A174]"
              >
                Explore my work
                <ArrowUpRight />
              </NavLink>

              <a
                href="mailto:sucilubis20041111@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-[#E5D9C9] px-5 py-3 text-xs font-medium text-[#6E6459] transition-all duration-300 hover:border-[#BF5B37] hover:text-[#BF5B37] dark:border-[#382E22] dark:text-[#C9BCAE] dark:hover:border-[#E08856] dark:hover:text-[#E08856]"
              >
                Get in touch
                <ArrowUpRight />
              </a>
            </div>

            {/* Small specialties */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#EEE6D8] pt-5 font-mono text-[10px] text-[#9C9184] dark:border-[#2C241B] dark:text-[#8D7F6E]">
              <span>WEB DEVELOPMENT</span>
              <span className="text-[#BF5B37] dark:text-[#E08856]">✳</span>
              <span>FULL STACK DEVELOPER</span>
              <span className="text-[#BF5B37] dark:text-[#E08856]">✳</span>
              <span>DATA ANALYST</span>
            </div>
          </div>

          {/* Visual profile card */}
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full border border-[#DCCBB4] dark:border-[#493829]" />
            <div className="absolute -bottom-4 -left-3 h-14 w-14 rounded-full border border-[#DCCBB4] dark:border-[#493829]" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#E7DACA] bg-[#F5EDE1] p-6 dark:border-[#382E22] dark:bg-[#211B16] sm:p-8">
              {/* Initial monogram */}
              <div className="relative my-8 flex min-h-48 items-center justify-center overflow-hidden rounded-2xl bg-[#E9DCC9] dark:bg-[#30251C] sm:min-h-56">
                <div className="absolute h-52 w-52 rounded-full border border-[#CDB99E] dark:border-[#53402E]" />
                <div className="absolute h-40 w-40 rounded-full border border-[#CDB99E] dark:border-[#53402E]" />
                <span className="relative select-none font-serif text-[112px] leading-none tracking-[-0.12em] text-[#8F5439] dark:text-[#E3A17B]">
                  SR
                </span>
              </div>

              <p className="font-serif text-xl text-[#33281F] dark:text-[#E8DED0]">
                Let's Build Together.
              </p>
              <p className="mt-2 max-w-sm text-xs leading-6 text-[#857665] dark:text-[#A79A87]">
                Passionate about software development, data analytics, and technology solutions, I combine technical expertise with clean logic to solve real-world problems. I am open to various tech roles and excited to explore how we can work together.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK PROFILE */}
      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#BF5B37] dark:text-[#E08856]">
              A little about me
            </p>
            <h2 className={sectionTitle}>The quick introduction.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {PROFILE.map((item, index) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#EEE6D8] bg-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B9A0] dark:border-[#2C241B] dark:bg-[#211B16]/60 dark:hover:border-[#644432]"
            >
              <p className="mb-5 font-mono text-[10px] text-[#BF5B37] dark:text-[#E08856]">
                0{index + 1}
              </p>
              <p className="mb-1.5 text-[11px] text-[#9C9184] dark:text-[#8D7F6E]">
                {item.label}
              </p>
              <p className="text-sm font-medium leading-relaxed text-[#44372B] dark:text-[#E0D3C3]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section>
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#BF5B37] dark:text-[#E08856]">
              What I work on
            </p>
            <h2 className={sectionTitle}>Areas of focus.</h2>
          </div>
          <p className="max-w-xs text-xs leading-6 text-[#8B7E70] dark:text-[#9E9080]">
            A blend of full-stack web development, data analysis, and scalable IT solutions.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {FOCUS_AREAS.map((area) => (
            <article
              key={area.number}
              className="group rounded-2xl border border-[#EEE6D8] p-5 transition-all duration-300 hover:border-[#C9A28A] hover:bg-[#FBF7F0] dark:border-[#2C241B] dark:hover:border-[#644432] dark:hover:bg-[#211B16] sm:p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#BF5B37] dark:text-[#E08856]">
                  {area.number}
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#30261E] dark:text-[#F1E9DC]">
                {area.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#7C7064] dark:text-[#A79A87]">
                {area.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F4EDE3] px-2.5 py-1 font-mono text-[9px] text-[#8B6C53] dark:bg-[#30251C] dark:text-[#C5A58A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section>
        <style>{`
          @keyframes toolScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .tool-track {
            animation: toolScroll 30s linear infinite;
          }

          .tool-marquee:hover .tool-track {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .tool-track {
              animation: none;
            }
          }
        `}</style>

        <div className="mb-5">
          <h2 className={sectionTitle}>Tools & Technologies</h2>
        </div>

        <div className="tool-marquee relative overflow-hidden border-y border-[#EEE6D8] py-5 dark:border-[#2C241B] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="tool-track flex w-max whitespace-nowrap">
            {[0, 1].map((repeat) => (
              <div
                key={repeat}
                aria-hidden={repeat === 1}
                className="flex shrink-0 items-center"
              >
                {TOOLS.map((tool) => (
                  <span
                    key={`${repeat}-${tool}`}
                    className="flex items-center"
                  >
                    <span className="px-5 font-mono text-xs text-[#6E6459] transition-colors duration-300 hover:text-[#BF5B37] dark:text-[#A79A87] dark:hover:text-[#E08856] sm:px-7 sm:text-sm">
                      {tool}
                    </span>

                    <span className="text-[10px] text-[#BF5B37] dark:text-[#E08856]">
                      ✳
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENTLY WORKING ON */}
      <section className="overflow-hidden rounded-[24px] border border-[#E8D8C5] bg-[#F6EFE5] p-6 dark:border-[#493829] dark:bg-[#211B16] sm:p-8">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#BF5B37] dark:text-[#E08856]">
              Right Now
            </p>
            <h2 className="max-w-xs font-serif text-3xl leading-tight text-[#34271D] dark:text-[#F1E9DC]">
              Ready for the next challenge.
            </h2>
            <p className="mt-3 max-w-sm text-xs leading-6 text-[#817363] dark:text-[#A79A87]">
              I believe in continuous growth through practical application. By combining my skills in full-stack development, data analysis, and IT solutions, I am ready to help your team tackle complex technical problems and drive meaningful results.
            </p>
          </div>

          <div className="space-y-0">
            {NOW.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 border-t border-[#E0CEB9] py-4 first:pt-0 first:border-t-0 dark:border-[#493829]"
              >
                <span className="pt-0.5 font-mono text-[10px] text-[#BF5B37] dark:text-[#E08856]">
                  0{index + 1}
                </span>
                <p className="text-sm leading-6 text-[#5F5041] dark:text-[#C8B8A5]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section>
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#BF5B37] dark:text-[#E08856]">
              Selected work
            </p>
            <h2 className={sectionTitle}>A few things I've built.</h2>
          </div>

          <NavLink
            to="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-medium text-[#BF5B37] transition-colors hover:text-[#963D22] dark:text-[#E08856] dark:hover:text-[#F0A174]"
          >
            All projects
            <ArrowUpRight />
          </NavLink>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <NavLink
              key={project.number}
              to="/projects"
              className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-[#EEE6D8] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B9A0] dark:border-[#2C241B] dark:hover:border-[#644432]"
            >
              {/* Project visual cover */}
              <div
                className={`relative flex min-h-44 items-center justify-center overflow-hidden ${
                  project.number === '01'
                    ? 'bg-[#EDE0CF] dark:bg-[#30251C]'
                    : 'bg-[#E1E6DC] dark:bg-[#202A22]'
                }`}
              >
                <div className="absolute inset-4 rounded-xl border border-black/5 dark:border-white/10" />

                <span
                  className={`absolute left-6 top-5 font-mono text-[10px] tracking-[0.2em] ${
                    project.number === '01'
                      ? 'text-[#9B6C4B]'
                      : 'text-[#5F8060]'
                  }`}
                >
                  PROJECT / {project.number}
                </span>

                <span
                  className={`font-serif text-4xl tracking-tight transition-transform duration-500 group-hover:scale-105 sm:text-5xl ${
                    project.number === '01'
                      ? 'text-[#80553A]'
                      : 'text-[#486449]'
                  }`}
                >
                  {project.number === '01' ? 'Khairul Audio' : 'Awakey'}
                </span>

                <span className="absolute bottom-5 right-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-mono text-[9px] tracking-[0.14em] text-[#BF5B37] dark:text-[#E08856]">
                  {project.type}
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#30261E] dark:text-[#F1E9DC]">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-xs leading-6 text-[#7C7064] dark:text-[#A79A87]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E9DFD1] px-2.5 py-1 font-mono text-[9px] text-[#8B7A68] dark:border-[#382E22] dark:text-[#B5A592]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-[#EEE6D8] pt-9 dark:border-[#2C241B]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#BF5B37] dark:text-[#E08856]">
              Have a project in mind?
            </p>
            <h2 className="max-w-lg font-serif text-3xl leading-tight text-[#30261E] dark:text-[#F1E9DC] sm:text-4xl">
              Let's make something useful.
            </h2>
            <p className="mt-3 max-w-md text-xs leading-6 text-[#7C7064] dark:text-[#A79A87]">
              I'm interested in connecting with people, learning from
              new challenges, and building meaningful digital products.
            </p>
          </div>

          <a
            href="mailto:sucilubis20041111@gmail.com"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#BF5B37] px-5 py-3 text-xs font-medium text-[#BF5B37] transition-all duration-300 hover:bg-[#BF5B37] hover:text-white dark:border-[#E08856] dark:text-[#E08856] dark:hover:bg-[#E08856] dark:hover:text-[#211B16]"
          >
            Say hello
            <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}
