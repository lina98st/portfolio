export default function SkillsSection() {
  return (
<section id="skills" className="flex flex-col items-center justify-center py-24 text-center px-6">
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
  )
}