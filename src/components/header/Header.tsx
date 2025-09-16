import React, { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
    const [active, setActive] = useState(window.location.hash || "#home")
    const [toggle, showMenu] = useState(false)

    useEffect(() => {
      const sections = document.querySelectorAll("section[id]") as NodeListOf<HTMLElement>;

      const handleScroll = () => {
        let scrollY = window.pageYOffset;

        sections.forEach((section) => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 50;
          const sectionId = "#" + section.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActive(sectionId);
          }
        })
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    useEffect(() => {
      localStorage.setItem("activeMenu", active);
      window.location.hash = active
    }, [active])
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Web Personal Profile
        </a>

        <div className={ toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className={`nav__list ${true ? "":"grid"}`}>
            <li className="nav__item">
              <a href="#home" onClick={() => setActive("#home")} className={`nav__link ${active === "#home" ? "active-link" : ""}`}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => setActive("#about")} className={`nav__link ${active === "#about" ? "active-link" : ""}`}>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => setActive("#skills")} className={`nav__link ${active === "#skills" ? "active-link" : ""}`}>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" onClick={() => setActive("#services")} className={`nav__link ${active === "#services" ? "active-link" : ""}`}>
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActive("#portfolio")} className={`nav__link ${active === "#portfolio" ? "active-link" : ""}`}>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={() => setActive("#contact")} className={`nav__link ${active === "#contact" ? "active-link" : ""}`}>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
