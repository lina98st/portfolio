export default function HeroSection() {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Fullstack developer. Frontend at heart.{" "}
        <span className="hero__title-accent">
          Ships products from idea to deployment.
        </span>
      </h1>
      <p className="hero__text">
        Fullstack developer with a strong frontend focus. I build interfaces
        that feel good to use and APIs that support them properly.
      </p>
      <div className="hero__actions">
        <a href="#projects" className="hero__cta hero__cta--primary">
          See my work
        </a>
        <a href="#contact" className="hero__cta hero__cta--ghost">
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
