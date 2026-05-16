export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-24 text-center px-6"
    >
      <h2 className="text-4xl font-bold">About me</h2>
      <p className="text-muted text-lg max-w-2xl mt-8">
        I&apos;m Alina, a fullstack developer based in Germany with a strong
        passion for the frontend. I come from a background in IT business roles,
        which gives me a broader understanding of how software fits into real
        business needs.
      </p>
      <p className="text-muted text-lg max-w-2xl mt-4">
        Over the past two years I&apos;ve focused primarily on frontend
        development, later expanding into mobile with React Native and fullstack
        with Node.js, Express and MongoDB. Now moving into Next.js and
        TypeScript.
      </p>
      <p className="text-muted text-lg max-w-2xl mt-4">
        I care about writing clean code, building interfaces that actually feel
        good to use, and understanding the whole stack from database to
        deployment.
      </p>
    </section>
  );
}
