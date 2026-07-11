import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillGroup = {
  category: string;
  description: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description:
      "Interfaces that are responsive, accessible and pleasant to use.",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    category: "Backend",
    description:
      "APIs, databases and server-side logic supporting the frontend.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Mobile",
    description: "Cross-platform applications with a native user experience.",
    skills: [{ name: "React Native", icon: SiReact }],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="skills__heading">
        <p className="skills__eyebrow">Technologies I work with</p>
        <h2 className="skills__title">Tech Stack</h2>
      </div>

      <div className="skills__grid">
        {skillGroups.map(({ category, description, skills }) => (
          <article className="skills__card" key={category}>
            <h3 className="skills__category">{category}</h3>
            <p className="skills__description">{description}</p>

            <ul className="skills__list">
              {skills.map(({ name, icon: Icon }) => (
                <li className="skills__item" key={name}>
                  <Icon className="skills__icon" aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
