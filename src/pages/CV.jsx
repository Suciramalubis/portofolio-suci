import cvFile from '../assets/Suci Ramadhani Lubis - CV.pdf';

const CV_FILENAME = 'Suci Ramadhani Lubis - CV.pdf';

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
      <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CV() {
  return (
    <section className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-9 max-w-2xl">
        <p className="mb-5 flex items-center gap-2 font-mono text-xs text-[#9C9184] dark:text-[#746859]">
          <span className="text-[#BF5B37] dark:text-[#E08856]">/</span> resume
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10">
        {/* ───────── PDF preview ───────── */}
        <div className="relative min-w-0">
          <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-[#DCCBB4] dark:border-[#493829]" />
          <div className="absolute -bottom-4 -left-3 hidden h-12 w-12 rounded-full border border-[#DCCBB4] dark:border-[#493829] sm:block" />

          <div className="relative overflow-hidden rounded-[24px] border border-[#E7DACA] bg-[#F5EDE1] dark:border-[#382E22] dark:bg-[#211B16]">
            {/* Window bar */}
            <div className="flex items-center gap-3 border-b border-[#E7DACA] px-5 py-3.5 dark:border-[#382E22]">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#BF5B37]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#9C9184]/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7BA86A]/60" />
              </div>
              <span className="truncate font-mono text-[10px] text-[#927E68] dark:text-[#B5A18A]">
                {CV_FILENAME}
              </span>
            </div>

            {/* Desktop / tablet: live preview */}
            <div className="hidden bg-[#E9DCC9] p-3 dark:bg-[#30251C] md:block sm:p-4">
              <iframe
                src={`${cvFile}#toolbar=0&navpanes=0&view=FitH`}
                title="Suci Ramadhani Lubis resume preview"
                className="h-[720px] w-full rounded-lg border-0 bg-white"
              />
            </div>

            {/* Mobile fallback: browsers rarely render PDFs inline on phones */}
            <div className="relative m-4 flex min-h-64 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#E9DCC9] px-6 py-10 text-center dark:bg-[#30251C] md:hidden">
              <div className="absolute h-52 w-52 rounded-full border border-[#CDB99E] dark:border-[#53402E]" />
              <div className="absolute h-36 w-36 rounded-full border border-[#CDB99E] dark:border-[#53402E]" />
              <span className="relative select-none font-serif text-7xl leading-none tracking-[-0.12em] text-[#8F5439] dark:text-[#E3A17B]">
                SR
              </span>
              <p className="relative mt-5 max-w-[26ch] text-xs leading-6 text-[#7C6A58] dark:text-[#B5A18A]">
                Inline preview works best on a larger screen. Use the buttons below to open
                the PDF.
              </p>
            </div>
          </div>
        </div>

        {/* ───────── Side rail ───────── */}
        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          {/* Actions */}
          <div className="space-y-3">
            <a
              href={cvFile}
              download={CV_FILENAME}
              className="flex w-full items-center justify-between rounded-full bg-[#BF5B37] px-5 py-3.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A7492A] dark:bg-[#E08856] dark:text-[#211B16] dark:hover:bg-[#F0A174]"
            >
              Download PDF
              <DownloadIcon />
            </a>

            <a
              href={cvFile}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-between rounded-full border border-[#E5D9C9] px-5 py-3.5 text-xs font-medium text-[#6E6459] transition-all duration-300 hover:border-[#BF5B37] hover:text-[#BF5B37] dark:border-[#382E22] dark:text-[#C9BCAE] dark:hover:border-[#E08856] dark:hover:text-[#E08856]"
            >
              Open in new tab
              <ArrowUpRight />
            </a>
          </div>

          {/* Availability + contact */}
          <div className="rounded-2xl border border-[#E8D8C5] bg-[#F6EFE5] p-5 dark:border-[#493829] dark:bg-[#211B16]">
            <p className="flex items-center gap-2 font-mono text-[10px] text-[#756758] dark:text-[#B5A592]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7BA86A]" />
              OPEN TO WORK
            </p>
            <p className="mt-3 font-serif text-lg leading-snug text-[#34271D] dark:text-[#F1E9DC]">
              Let's connect and collaborate!
            </p>
            <p className="mt-1.5 text-xs leading-6 text-[#817363] dark:text-[#A79A87]">
              I would love to explore how my skills can contribute to your next project or team. Please feel free to reach out!
            </p>
            <a
              href="mailto:sucilubis20041111@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#BF5B37] transition-colors hover:text-[#963D22] dark:text-[#E08856] dark:hover:text-[#F0A174]"
            >
              Send a message
              <ArrowUpRight />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}