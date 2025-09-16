import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"

function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
       {/* useEffect(() => {
  const sections = document.querySelectorAll("section[id]") as NodeListOf<HTMLElement>;

  const handleScroll = () => {
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50; // biar nggak terlalu mepet
      const sectionId = "#" + section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActive(sectionId);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []); */}


        </div>
    </section>
  )
}

export default Skills