export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Tech Stack</h2>
      <div className="skills__grid">
        {[
          {
            category: "Frontend",
            items: [
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "TailwindCSS",
              "Bootstrap",
              "Redux",
            ],
          },
          {
            category: "Backend",
            items: ["Node.js", "Express.js", "MongoDB"],
          },
          {
            category: "Mobile",
            items: ["React Native"],
          },
        ].map(({ category, items }) => (
          <div key={category}>
            <p className="skills__category">{category}</p>
            <ul className="skills__list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
