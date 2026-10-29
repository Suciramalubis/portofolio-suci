import { useEffect, useState } from 'react';

/**
 * Auto-load every file inside src/assets/sertifikat/.
 * Needs Vite 5+. On Vite 4, replace the options with { eager: true, as: 'url' }.
 */
const CERT_FILES = import.meta.glob('../assets/sertifikat/*.{pdf,png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

/**
 * `file`  = exact file name inside src/assets/sertifikat/ (adjust to your real names).
 * `link`  = external credential URL (optional).
 * `date`  = optional.
 */
const CERTIFICATES = [
  {
    title: 'Belajar Pengembangan Web Intermediate',
    issuer: 'Dicoding',
    date: 'Jun 2025',
    file: 'Belajar Pengembangan Web Intermediate.pdf',
    link: 'https://www.dicoding.com/certificates/4EXGVWKDDXRL',
    tags: ['Web Development', 'Accessibility', 'PWA'],
  },
  {
    title: 'Belajar Fundamental Front-End Web Development',
    issuer: 'Dicoding',
    file: 'Belajar Fundamental Front-End Web Development.pdf',
    tags: ['Front-End', 'Web Development'],
  },
  {
    title: 'Financial Literacy 101',
    issuer: 'Dicoding',
    file: 'Financial Literacy 101.pdf',
    tags: ['Financial Literacy'],
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding',
    file: 'Belajar Membuat Front-End Web untuk Pemula.pdf',
    tags: ['Front-End', 'JavaScript'],
  },
  {
    title: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding',
    file: 'Belajar Back-End Pemula dengan JavaScript.pdf',
    tags: ['Back-End', 'JavaScript', 'Node.js'],
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    file: 'Belajar Dasar Pemrograman JavaScript.pdf',
    tags: ['JavaScript', 'Programming'],
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    file: 'Belajar Dasar Pemrograman Web.pdf',
    tags: ['HTML', 'CSS', 'Web Development'],
  },
];

const getSrc = (file) => (file ? CERT_FILES[`../assets/sertifikat/${file}`] : undefined);
const isPdf = (file) => !!file && file.toLowerCase().endsWith('.pdf');
const pdfParams = '#toolbar=0&navpanes=0&scrollbar=0&view=Fit';

const getKind = (cert) => (isPdf(cert.file) ? 'pdf' : 'image');

/* ───────── Icons ───────── */
function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckBadge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.3 2.6 2.6L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

/* ───────── Cover (thumbnail) ───────── */
function Cover({ cert, src, onOpen }) {
  // No file found: decorative placeholder (links to the credential page if available)
  if (!src) {
    const Wrapper = cert.link ? 'a' : 'div';
    const wrapperProps = cert.link
      ? { href: cert.link, target: '_blank', rel: 'noreferrer', 'aria-label': `Open ${cert.title} credential` }
      : {};
    return (
      <Wrapper
        {...wrapperProps}
        className="group/cover relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl bg-[#EDE0CF] dark:bg-[#30251C]"
      >
        <div className="absolute h-24 w-24 rounded-full border border-[#CDB99E] dark:border-[#53402E]" />
        <div className="absolute h-14 w-14 rounded-full border border-[#CDB99E] dark:border-[#53402E]" />
        <span className="relative select-none font-serif text-xl tracking-tight text-[#80553A] dark:text-[#E3A17B]">
          {cert.issuer}
        </span>
        {cert.link && (
          <span className="absolute bottom-3 right-3 text-[#927E68] transition-transform duration-300 group-hover/cover:-translate-y-0.5 group-hover/cover:translate-x-0.5 dark:text-[#B5A18A]">
            <ArrowUpRight />
          </span>
        )}
      </Wrapper>
    );
  }

  const kind = getKind(cert);

  return (
    <button
      type="button"
      onClick={() => onOpen(cert, src)}
      aria-label={`View ${cert.title}`}
      className="group/cover relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#E9DCC9] dark:bg-[#30251C]"
    >
      {kind === 'image' && (
        <img src={src} alt={cert.title} className="absolute inset-0 h-full w-full object-contain" />
      )}

      {kind === 'pdf' && (
        <>
          <iframe
            src={`${src}${pdfParams}`}
            title={cert.title}
            tabIndex={-1}
            className="pointer-events-none absolute left-0 top-0 hidden h-full w-[calc(100%+17px)] max-w-none border-0 bg-white md:block"
          />
          {/* Mobile placeholder: phones rarely render PDFs inline */}
          <span className="absolute inset-0 flex items-center justify-center md:hidden">
            <span className="select-none font-serif text-xl tracking-tight text-[#80553A] dark:text-[#E3A17B]">
              {cert.issuer}
            </span>
          </span>
        </>
      )}

      {/* Hover overlay */}
      <span className="absolute inset-0 flex items-center justify-center bg-[#241F19]/0 text-white opacity-0 transition-all duration-300 group-hover/cover:bg-[#241F19]/45 group-hover/cover:opacity-100">
        <ExpandIcon />
      </span>
    </button>
  );
}

/* ───────── Modal ───────── */
function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const kind = getKind(item.cert);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.cert.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#17130F]/75 p-4 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#E7DACA] bg-[#F5EDE1] dark:border-[#382E22] dark:bg-[#211B16]"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#E7DACA] px-5 py-3.5 dark:border-[#382E22]">
          <p className="truncate font-serif text-base text-[#30261E] dark:text-[#F1E9DC]">
            {item.cert.title}
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <a
              href={item.src}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 text-xs font-medium text-[#BF5B37] transition-colors hover:text-[#963D22] dark:text-[#E08856] dark:hover:text-[#F0A174] sm:inline-flex"
            >
              Open in new tab
              <ArrowUpRight />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5D9C9] text-[#6E6459] transition-colors hover:border-[#BF5B37] hover:text-[#BF5B37] dark:border-[#382E22] dark:text-[#C9BCAE] dark:hover:border-[#E08856] dark:hover:text-[#E08856]"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-[#E9DCC9] p-3 dark:bg-[#30251C] sm:p-4">
          {kind === 'image' ? (
            <img
              src={item.src}
              alt={item.cert.title}
              className="mx-auto max-h-[75vh] w-auto max-w-full rounded-lg"
            />
          ) : (
            <div className="relative h-[75vh] w-full overflow-hidden rounded-lg bg-white">
              <iframe
                src={`${item.src}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                title={item.cert.title}
                className="absolute left-0 top-0 h-full w-[calc(100%+17px)] max-w-none border-0"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ───────── Page ───────── */
export default function Certificate() {
  const [active, setActive] = useState(null);

  const open = (cert, src) => {
    // Phones can't preview PDFs inline: open the file directly instead
    if (isPdf(cert.file) && window.innerWidth < 768) {
      window.open(src, '_blank', 'noreferrer');
      return;
    }
    setActive({ cert, src });
  };

  return (
    <section className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-5 flex items-center gap-2 font-mono text-xs text-[#9C9184] dark:text-[#746859]">
          <span className="text-[#BF5B37] dark:text-[#E08856]">/</span> certificates
        </p>
        <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#241F19] dark:text-[#F1E9DC] sm:text-5xl">
          Certificates<span className="text-[#BF5B37] dark:text-[#E08856]">.</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {CERTIFICATES.map((cert) => {
          const src = getSrc(cert.file);

          return (
            <article
              key={cert.title}
              className="flex flex-col rounded-2xl border border-[#EEE6D8] p-3 transition-colors duration-300 hover:border-[#D8B9A0] dark:border-[#2C241B] dark:hover:border-[#644432]"
            >
              <Cover cert={cert} src={src} onOpen={open} />

              <div className="mt-4 flex flex-1 flex-col px-1 pb-1">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="line-clamp-2 font-serif text-[15px] leading-snug text-[#30261E] dark:text-[#F1E9DC]">
                    {cert.title}
                  </h2>
                  {cert.date && (
                    <span className="shrink-0 pt-1 font-mono text-[11px] text-[#9C9184] dark:text-[#746859]">
                      {cert.date}
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="flex items-center gap-2 text-xs text-[#8B7A68] dark:text-[#A79A87]">
                    <CheckBadge />
                    {cert.issuer}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-[#BF5B37] transition-colors hover:text-[#963D22] dark:text-[#E08856] dark:hover:text-[#F0A174]"
                    >
                      View Credential
                      <ArrowUpRight />
                    </a>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E9DFD1] px-2.5 py-1 font-mono text-[10px] text-[#8B7A68] dark:border-[#382E22] dark:text-[#B5A592]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {active && <Lightbox item={active} onClose={() => setActive(null)} />}
    </section>
  );
}