export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">About me</h2>
          <p className="text-muted text-lg leading-relaxed">
            I'm Alina, a fullstack developer based in Germany with a strong
            passion for the frontend. I come from a background in IT business
            roles, which gives me a broader understanding of how software fits
            into real business needs.
          </p>
          <p className="text-muted text-lg leading-relaxed mt-4">
            Over the past two years I've focused primarily on frontend
            development, later expanding into mobile with React Native and
            fullstack with Node.js, Express and MongoDB. Now moving into
            Next.js and TypeScript.
          </p>
        </div>
        <div className="flex flex-col gap-6 pt-2 md:pt-16">
          {[
            { label: "Based in", value: "Germany" },
            { label: "Focus", value: "Frontend · Fullstack" },
            { label: "Stack", value: "React · Next.js · Node.js · MongoDB" },
            { label: "Background", value: "IT Business" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



