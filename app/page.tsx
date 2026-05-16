import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <span className="border border-pink text-pink text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          Available for projects
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
        Software developer who builds things that{" "}
       <span className="text-pink">actually work.</span>
        </h1>
        <p className="mt-6 text-muted text-lg max-w-xl">
          Fullstack developer with a strong frontend focus. I build
          interfaces that feel good to use and APIs that support them properly.
        </p>
        <div className="flex gap-4 mt-10">
          <a href="#projects" className="bg-pink text-white font-semibold px-8 py-3 rounded-full hover:bg-pink-light transition-colors">
            See my work
          </a>
          <a href="#contact" className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Let&apos;s talk
          </a>
        </div>
      </section>
      <section id="skills" className="flex flex-col items-center justify-center min-h-screen text-center px-6">
       <h2 className="text-4xl font-bold">Tech Stack</h2>
       <div className="grid grid-cols-3 gap-6 mt-12">
<div className="bg-zinc-900 p-6 rounded-2xl">
<h3 className="font-bold text-left">
    Frontend
  </h3>
  <div className="flex flex-wrap gap-2 mt-4">
      <span className="border border-white/20 text-sm px-3 py-1 rounded-full">HTML</span>
        <span className="border border-white/20 text-sm px-3 py-1 rounded-full">CSS</span>
  <span className="border border-white/20 text-sm px-3 py-1 rounded-full">JavaScript</span>
    <span className="border border-white/20 text-sm px-3 py-1 rounded-full">TypeScript</span>
  <span className="border border-white/20 text-sm px-3 py-1 rounded-full">React</span>
    <span className="border border-white/20 text-sm px-3 py-1 rounded-full">Next.js</span>
  <span className="border border-white/20 text-sm px-3 py-1 rounded-full">Redux</span>
    <span className="border border-white/20 text-sm px-3 py-1 rounded-full">TailwindCSS</span>
      <span className="border border-white/20 text-sm px-3 py-1 rounded-full">Bootstrap</span>
</div>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl">
<h3 className="font-bold text-left">
    Backend
  </h3>
  <div className="flex flex-wrap gap-2 mt-4">
    <span className="border border-white/20 text-sm px-3 py-1 rounded-full">Node.js</span>
      <span className="border border-white/20 text-sm px-3 py-1 rounded-full">Express.js</span>
        <span className="border border-white/20 text-sm px-3 py-1 rounded-full">MongoDB</span>
        </div>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl">
<h3 className="font-bold text-left">
  Mobile
</h3>
<div className="flex flex-wrap gap-2 mt-4">
  <span className="border border-white/20 text-sm px-3 py-1 rounded-full">React Native</span>
</div>
</div>
</div>
      </section>
      <section id="projects" className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h2 className="text-4xl font-bold">Selected Projects</h2>
      <div className="flex flex-col gap-6 mt-12 w-full max-w-3xl">
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
A full-stack web app built on top of the TheCocktailDB REST API. The frontend uses React with dynamic routing and Formik-based form validation, including a custom ingredient parser that handles inconsistent API response structures. The backend is a Node.js / Express / MongoDB REST API with JWT authentication, role-based access control, and protected CRUD endpoints.
  </p>
  <div className="flex flex-wrap gap-2 mb-6">
    <span className="border border-white/20 text-sm px-3 py-1 rounded-full">React</span>
    <span className="border border-white/20 text-sm px-3 py-1 rounded-full">Node.js</span>
    <span className="border border-white/20 text-sm px-3 py-1 rounded-full">MongoDB</span>
  </div>
  <div className="flex gap-3">
    <a href="https://github.com/lina98st/cocktail-finder" target="_blank" className="border border-white/20 text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Frontend Repo</a>
    <a href="https://github.com/lina98st/cocktail-finder-backend" target="_blank" className="border border-white/20 text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Backend Repo</a>
    <a href="https://cocktailfinder-alina.netlify.app/" target="_blank" className="bg-pink text-white text-sm px-4 py-2 rounded-full hover:bg-pink-light transition-colors">Live Demo</a>
  </div>
</div>
      <div className="bg-zinc-900 p-6 rounded-2xl text-left">
  <h3 className="font-bold text-xl mb-3">Cocktail Mobile App</h3>
  <Image 
  src="/cocktail-react-native.png" 
  alt="Cocktail Finder" 
  width={600} 
  height={300} 
  className="rounded-xl mb-4 w-full object-cover"
/>
  <p className="text-muted text-sm mb-4">
Cross-platform mobile version of the cocktail finder, built with React Native and Redux Toolkit. Features global state management, a favorites system, native share functionality, and nested stack/tab navigation.
  </p>
  <div className="flex flex-wrap gap-2 mb-6">
    <span className="border border-white/20 text-sm px-3 py-1 rounded-full">React Native</span>
        <span className="border border-white/20 text-sm px-3 py-1 rounded-full">Redux</span>
  </div>
  <div className="flex gap-3">
    <a href="https://github.com/lina98st/cocktail-app-react-native" target="_blank" className="border border-white/20 text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Github Repo</a>
    <a href="https://www.youtube.com/shorts/9ijJ1hSreWk" target="_blank" className="bg-pink text-white text-sm px-4 py-2 rounded-full hover:bg-pink-light transition-colors">Demo Video</a>
  </div>
</div>
</div>
      </section>
    </main>
  );
}