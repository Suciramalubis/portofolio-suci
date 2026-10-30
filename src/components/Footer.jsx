
export default function Footer() {
  return (
    <footer className="mt-24">
      {/* Main Footer */}
      <div className="border-t border-[#EEE6D8] dark:border-[#2C241B] pt-8 pb-7">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          {/* Identity */}
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#BF5B37] dark:text-[#E08856]">
              Let's connect
            </p>

            <h3 className="text-lg font-semibold tracking-tight text-[#3B3027] dark:text-[#E8DED0]">
              Suci Ramadhani Lubis
              <span className="text-[#BF5B37] dark:text-[#E08856]">.</span>
            </h3>

            <p className="text-xs leading-relaxed text-[#9C9184] dark:text-[#938678]">
              Always open to new ideas and opportunities.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* GitHub */}
            <a
              href="https://github.com/Suciramalubis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Suci Ramadhani Lubis"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#EEE6D8] bg-white/60 px-4 py-2.5 text-xs font-medium text-[#6F6255] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#BF5B37] hover:bg-[#BF5B37] hover:text-white dark:border-[#332A20] dark:bg-[#211B16] dark:text-[#C9BCAE] dark:hover:border-[#E08856] dark:hover:bg-[#E08856] dark:hover:text-[#211B16]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] fill-current transition-transform duration-300 group-hover:rotate-[-8deg]"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.06 3.27 1.57.1-.71.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.28-2.62 5.22-5.11 5.5.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>
              <span>GitHub</span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-3 w-3 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                aria-hidden="true"
              >
                <path
                  d="M4 12 12 4M5 4h7v7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/suci-ramadhani-lubis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Suci Ramadhani Lubis"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#EEE6D8] bg-white/60 px-4 py-2.5 text-xs font-medium text-[#6F6255] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#BF5B37] hover:bg-[#BF5B37] hover:text-white dark:border-[#332A20] dark:bg-[#211B16] dark:text-[#C9BCAE] dark:hover:border-[#E08856] dark:hover:bg-[#E08856] dark:hover:text-[#211B16]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] fill-current"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.98V9h2.95v9.45ZM6.46 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74h-2.94v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.26V9h2.82v1.29h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.53 1.96 3.53 4.5v5.18h.03Z" />
              </svg>
              <span>LinkedIn</span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-3 w-3 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                aria-hidden="true"
              >
                <path
                  d="M4 12 12 4M5 4h7v7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:sucilubis20041111@gmail.com"
              aria-label="Email Suci Ramadhani Lubis"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#EEE6D8] bg-white/60 px-4 py-2.5 text-xs font-medium text-[#6F6255] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#BF5B37] hover:bg-[#BF5B37] hover:text-white dark:border-[#332A20] dark:bg-[#211B16] dark:text-[#C9BCAE] dark:hover:border-[#E08856] dark:hover:bg-[#E08856] dark:hover:text-[#211B16]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="3"
                />
                <path
                  d="m4 7 8 6 8-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col-reverse gap-3 border-t border-[#EEE6D8] py-5 text-[10px] font-mono text-[#9C9184] dark:border-[#2C241B] dark:text-[#746859] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Suci Ramadhani Lubis.
        </p>

        <div className="inline-flex items-center gap-2 self-start sm:self-auto">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BF5B37] opacity-30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#BF5B37] dark:bg-[#E08856]" />
          </span>
          <span>Medan, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
