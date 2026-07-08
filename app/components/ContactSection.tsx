export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Get in touch</h2>
      <p className="contact__text">Feel free to reach out!</p>

      <div className="contact__links">
        <a
          href="https://www.linkedin.com/in/alina-schmi/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/lina98st"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
