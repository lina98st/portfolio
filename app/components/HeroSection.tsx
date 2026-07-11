import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__content">
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

            <a href="#about" className="hero__cta hero__cta--ghost">
              About me
            </a>
          </div>
        </div>

        <div className="hero__portrait-wrap">
          <div className="hero__portrait-ring">
            <Image
              src="/Alina_Schmidt.png"
              alt="Portrait of Alina Schmidt"
              width={440}
              height={440}
              priority
              className="hero__portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
