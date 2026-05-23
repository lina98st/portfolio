export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {[
          {
            category: "Frontend",
            items: ["JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "Bootstrap", "Redux"],
          },
          {
            category: "Backend",
            items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
          },
          {
            category: "Mobile",
            items: ["React Native"],
          },
        ].map(({ category, items }) => (
          <div key={category}>
            <p className="text-xs text-muted uppercase tracking-widest mb-4">{category}</p>
            <ul className="flex flex-col gap-2">
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