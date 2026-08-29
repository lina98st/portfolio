import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Selected Projects</h2>

      <div className="projects__list">
        {/* SaaS Dashboard */}
        <div className="project">
          <span className="project__badge">In Development</span>

          <h3 className="project__name">SaaS Dashboard</h3>

          <div className="project__image-wrap">
            <Image
              src="/saas-dashboard-preview.png"
              alt="SaaS Dashboard"
              width={600}
              height={300}
              className="project__image"
            />
          </div>

          <p className="project__desc">
            A full-stack SaaS dashboard currently in development. Built with
            Next.js, TypeScript, Express and PostgreSQL, focusing on clean data
            visualization and a polished user experience.
          </p>

          <div className="project__tags">
            <span className="project__tag">Next.js</span>
            <span className="project__tag">TypeScript</span>
            <span className="project__tag">Tailwind CSS</span>
            <span className="project__tag">PostgreSQL</span>
          </div>

          <div className="project__links">
            <a
              href="https://github.com/lina98st/taskflow"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Recipe API */}
        <div className="project">
          <h3 className="project__name">Recipe API</h3>

          <Image
            src="/recipe-api-preview.png"
            alt="Recipe API"
            width={600}
            height={300}
            className="project__image project__image--flush"
          />

          <p className="project__desc">
            A RESTful backend API for managing recipes, categories, ingredients,
            users, profiles and ratings. Built with Flask, SQLAlchemy and
            PostgreSQL, including relational data models, database migrations,
            CRUD endpoints and Docker based local development.
          </p>

          <div className="project__tags">
            <span className="project__tag">Python</span>
            <span className="project__tag">Flask</span>
            <span className="project__tag">SQLAlchemy</span>
            <span className="project__tag">PostgreSQL</span>
            <span className="project__tag">Docker</span>
            <span className="project__tag">pytest</span>
          </div>

          <div className="project__links">
            <a
              href="https://github.com/lina98st/recipe-api"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Cocktail Finder */}
        <div className="project">
          <h3 className="project__name">Cocktail Finder</h3>

          <Image
            src="/react-cocktail-finder.png"
            alt="Cocktail Finder"
            width={600}
            height={300}
            className="project__image project__image--flush"
          />

          <p className="project__desc">
            A full-stack web app built on top of the TheCocktailDB REST API. The
            frontend uses React with dynamic routing and Formik-based form
            validation, including a custom ingredient parser that handles
            inconsistent API response structures. The backend is a Node.js /
            Express / MongoDB REST API with JWT authentication, role-based
            access control, and protected CRUD endpoints.
          </p>

          <div className="project__tags">
            <span className="project__tag">React</span>
            <span className="project__tag">Bootstrap</span>
            <span className="project__tag">Node.js</span>
            <span className="project__tag">Express.js</span>
            <span className="project__tag">MongoDB</span>
            <span className="project__tag">JWT</span>
          </div>

          <div className="project__links">
            <a
              href="https://github.com/lina98st/cocktail-finder"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Frontend Repo
            </a>

            <a
              href="https://github.com/lina98st/cocktail-finder-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Backend Repo
            </a>

            <a
              href="https://cocktailfinder-alina.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link project__link--primary"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
