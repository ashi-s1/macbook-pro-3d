import { useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative">
      <nav>
        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Apple Logo" />
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={`#${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-4">
          <button type="button" aria-label="Search">
            <img src={`${import.meta.env.BASE_URL}search.svg`} alt="Search" />
          </button>
          <button type="button" aria-label="Cart">
            <img src={`${import.meta.env.BASE_URL}cart.svg`} alt="Cart" />
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1 cursor-pointer z-50 focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-5 shadow-2xl flex flex-col gap-3">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ label }) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="block text-white/80 hover:text-white text-base py-1 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavBar