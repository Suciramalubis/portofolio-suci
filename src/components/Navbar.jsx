import { NavLink } from 'react-router-dom';

export default function Navbar({ isDark, toggleTheme }) {
  const activeStyle = "text-[#241F19] dark:text-[#F1E9DC] font-medium bg-[#F1EAE0] dark:bg-[#2C241B]";
  const inactiveStyle = "text-[#6E6459] dark:text-[#A79A87] hover:text-[#241F19] dark:hover:text-[#F1E9DC] hover:bg-[#F1EAE0] dark:hover:bg-[#2C241B] transition-colors";
  const linkBase = "px-3 py-1.5 rounded-full transition-colors";

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 bg-white/85 dark:bg-[#221C15]/85 backdrop-blur-md border border-[#E4DAC9] dark:border-[#382E22] rounded-full pl-4 pr-1.5 py-1.5 shadow-sm text-sm">
        {/* Nav links */}
        <div className="flex items-center gap-0.5">
          <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? activeStyle : inactiveStyle}`}>Home</NavLink>
          <NavLink to="/projects" className={({isActive}) => `${linkBase} ${isActive ? activeStyle : inactiveStyle}`}>Projects</NavLink>
          <NavLink to="/experience" className={({isActive}) => `${linkBase} ${isActive ? activeStyle : inactiveStyle}`}>Experience</NavLink>
          {/* <NavLink to="/certificate" className={({isActive}) => `${linkBase} ${isActive ? activeStyle : inactiveStyle}`}>Certificates</NavLink> */}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-[#E4DAC9] dark:bg-[#382E22] mx-1.5"></div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#6E6459] dark:text-[#A79A87] hover:text-[#241F19] dark:hover:text-[#F1E9DC] hover:bg-[#F1EAE0] dark:hover:bg-[#2C241B] transition-colors"
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>

        {/* Resume button */}
        <NavLink
          to="/cv"
          className="flex items-center gap-1.5 bg-[#BF5B37] dark:bg-[#E08856] hover:opacity-90 text-white dark:text-[#1B1712] px-3.5 py-1.5 rounded-full transition-opacity font-medium ml-1 whitespace-nowrap"
        >
          Resume
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        </NavLink>
      </nav>
    </div>
  );
}