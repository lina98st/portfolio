export default function HeroSection() {
  return (
<section className="flex flex-col items-start max-w-5xl mx-auto w-full justify-center min-h-screen text-left px-4 pt-24">
     <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl">
        Fullstack developer. Frontend at heart.{" "}
        <span className="text-pink">
          Ships products from idea to deployment.
        </span>
      </h1>
      <p className="mt-6 text-muted text-lg max-w-xl">
        Fullstack developer with a strong frontend focus. I build interfaces
        that feel good to use and APIs that support them properly.
      </p>
     <div className="flex flex-col md:flex-row gap-4 mt-10">
        <a
          href="#projects"
          className="bg-pink text-white font-semibold px-8 py-3 rounded-full hover:bg-pink-light transition-colors"
        >
          See my work
        </a>
        <a
          href="#contact"
            className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
