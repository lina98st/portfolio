import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-24 text-center px-6"
    >
      <h2 className="text-4xl font-bold">Selected Projects</h2>

      <div className="flex flex-col gap-6 mt-12 w-full max-w-3xl">
        {/* SaaS Dashboard */}
        <div className="bg-zinc-900 p-6 rounded-2xl text-left relative">
          <span className="absolute top-4 right-4 bg-pink text-white text-xs px-3 py-1 rounded-full">
            In Development
          </span>

          <h3 className="font-bold text-xl mb-3">SaaS Dashboard</h3>

          <div className="relative mb-4">
            <Image
              src="/saas-dashboard-preview.png"
              alt="SaaS Dashboard"
              width={600}
              height={300}
              className="rounded-xl w-full object-cover opacity-40 blur-sm"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium tracking-widest uppercase text-white/60">
                Coming soon
              </span>
            </div>
          </div>

          <p className="text-muted text-sm mb-4">
            A full-stack SaaS dashboard currently in development. Built with
            Next.js, TypeScript, Express and PostgreSQL, focusing on clean data
            visualization and a polished user experience.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              Next.js
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              TypeScript
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              Tailwind CSS
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              PostgreSQL
            </span>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/lina98st/taskflow"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Cocktail Finder */}
        <div className="bg-zinc-900 p-6 rounded-2xl text-left">
          <h3 className="font-bold text-xl mb-3">Cocktail Finder</h3>

          <Image
            src="/react-cocktail-finder.png"
            alt="Cocktail Finder"
            width={600}
            height={300}
            className="rounded-xl mb-4 w-full object-cover"
          />

          <p className="text-muted text-sm mb-4">
            A full-stack web app built on top of the TheCocktailDB REST API. The
            frontend uses React with dynamic routing and Formik-based form
            validation, including a custom ingredient parser that handles
            inconsistent API response structures. The backend is a Node.js /
            Express / MongoDB REST API with JWT authentication, role-based
            access control, and protected CRUD endpoints.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              React
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              Bootstrap
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              Node.js
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              Express.js
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              MongoDB
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              JWT
            </span>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/lina98st/cocktail-finder"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              Frontend Repo
            </a>

            <a
              href="https://github.com/lina98st/cocktail-finder-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              Backend Repo
            </a>

            <a
              href="https://cocktailfinder-alina.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink text-white text-sm px-4 py-2 rounded-full hover:bg-pink-light transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Cocktail Mobile App */}
        <div className="bg-zinc-900 p-6 rounded-2xl text-left">
          <h3 className="font-bold text-xl mb-3">Cocktail Mobile App</h3>

          <Image
            src="/cocktail-react-native.png"
            alt="Cocktail Mobile App"
            width={600}
            height={300}
            className="rounded-xl mb-4 w-full object-cover"
          />

          <p className="text-muted text-sm mb-4">
            Cross-platform mobile version of the cocktail finder, built with
            React Native and Redux Toolkit. Features global state management, a
            favorites system, native share functionality, and nested stack/tab
            navigation.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              React Native
            </span>

            <span className="border border-white/20 text-sm px-3 py-1 rounded-full">
              Redux
            </span>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/lina98st/cocktail-app-react-native"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              GitHub Repo
            </a>

            <a
              href="https://www.youtube.com/shorts/9ijJ1hSreWk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink text-white text-sm px-4 py-2 rounded-full hover:bg-pink-light transition-colors"
            >
              Demo Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
