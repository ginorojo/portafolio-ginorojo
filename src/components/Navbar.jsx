import React, { useState, useRef, useEffect } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuItemsVisible, setMenuItemsVisible] = useState(0)
  const dropdownRef = useRef(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleMouseEnter = () => {
    clearTimeout(dropdownRef.current)
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 50)
  }

  useEffect(() => {
    if (menuOpen) {
      setMenuItemsVisible(0)
      const interval = setInterval(() => {
        setMenuItemsVisible((prev) => {
          if (prev < 5) return prev + 1
          clearInterval(interval)
          return prev
        })
      }, 100)
      return () => clearInterval(interval)
    } else {
      setMenuItemsVisible(0)
    }
  }, [menuOpen])

  const handleCloseMenu = () => setMenuOpen(false)

  const hoverGradient =
    "hover:bg-gradient-to-r hover:from-[#18CCFC] hover:via-[#6344F5] hover:to-[#AE48FF] hover:bg-clip-text hover:text-transparent transition-colors"

  return (
    <nav className="z-500 w-full text-[white] fixed top-0 left-0 bg-[#242424] shadow-lg font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center px-6 py-4 md:py-6">
        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center ">
          <li className="hover:scale-120 transition-transform duration-300">
            <a href="#home" className={hoverGradient} >
              Home
            </a>
          </li>
          <li className="hover:scale-120 transition-transform duration-300">
            <a href="#about-me" className={hoverGradient}>
              About Me
            </a>
          </li>

          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className={hoverGradient}>Projects</button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-[#242424] shadow-lg rounded-md p-2 w-48 space-y-1 z-50 font-normal ">
                <li className="hover:scale-120 transition-transform duration-300">
                  <a
                    href="#personal-projects"
                    className={`${hoverGradient} block px-2 py-1`}
                  >
                    Personal Projects
                  </a>
                </li>
                <li className="hover:scale-120 transition-transform duration-300">
                  <a
                    href="#team-projects"
                    className={`${hoverGradient} block px-2 py-1`}
                  >
                    Team Projects
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:scale-120 transition-transform duration-300">
            <a href="#GitHub-Activity" className={hoverGradient}>
              Github Activity
            </a>
          </li>
          <li className="hover:scale-120 transition-transform duration-300">
            <a href="#education" className={hoverGradient}>
              Education
            </a>
          </li>

         <li className="hover:scale-120 transition-transform duration-300">
            <a href="#resume" className={hoverGradient}>
              Resume
            </a>
          </li>

         <li className="hover:scale-120 transition-transform duration-300">
            <a href="#contact" className={hoverGradient}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
        
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 bg-[#242424] space-y-3 overflow-hidden transition-all text-lg ">
            {menuItemsVisible >= 1 && (
            <li className="transition-all duration-300 ease-out">
              <a href="#home" onClick={handleCloseMenu} className={hoverGradient}>
                Home
              </a>
            </li>
          )}

            {menuItemsVisible >= 2 && (
            <li className="transition-all duration-300 ease-out">
              <a href="#about-me" onClick={handleCloseMenu} className={hoverGradient}>
                About me
              </a>
            </li>
          )}

          {menuItemsVisible >= 3 && (
            <li className="transition-all duration-300 ease-out">
              <details className="group">
                <summary className={`${hoverGradient} cursor-pointer`}>
                  Projects
                </summary>
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  <li>
                    <a
                      href="#personal-projects"
                      onClick={handleCloseMenu}
                      className={hoverGradient}
                    >
                      Personal Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team-projects"
                      onClick={handleCloseMenu}
                      className={hoverGradient}
                    >
                      Team Projects
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          )}

          {menuItemsVisible >= 4 && (
            <li className="transition-all duration-300 ease-out">
              <a href="#GitHub-Activity" onClick={handleCloseMenu} className={hoverGradient}>
                Github Activity
              </a>
            </li>
          )}
          {menuItemsVisible >= 4 && (
            <li className="transition-all duration-300 ease-out">
              <a href="#education" onClick={handleCloseMenu} className={hoverGradient}>
                Education
              </a>
            </li>
          )}

          {menuItemsVisible >= 5 && (
            <li className="transition-all duration-300 ease-out">
              <a href="#resume" onClick={handleCloseMenu} className={hoverGradient}>
                Resume
              </a>
            </li>
          )}

          {menuItemsVisible >= 6 && (
            <li className="transition-all duration-300 ease-out">
              <a href="#contact" onClick={handleCloseMenu} className={hoverGradient}>
                Contact
              </a>
            </li>
          )}
        </ul>
      )}
    </nav>
  )
}
