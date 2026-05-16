export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 text-center px-6"
    >
      <h2 className="text-4xl font-bold">Get in touch</h2>
      <p className="text-muted text-lg mt-4 mb-10">Feel free to reach out!</p>
<div className="flex flex-col md:flex-row gap-4">
        <a
          href="mailto:alinaschmidt846@proton.me"
          className="border border-pink/40 text-pink/80 px-8 py-3 rounded-full hover:border-pink hover:text-pink transition-colors"
        >
          Email me
        </a>
        <a
          href="https://www.linkedin.com/in/alina-schmi/"
          target="_blank"
          className="border border-pink/40 text-pink/80 px-8 py-3 rounded-full hover:border-pink hover:text-pink transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lina98st"
          target="_blank"
          className="border border-pink/40 text-pink/80 px-8 py-3 rounded-full hover:border-pink hover:text-pink transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
