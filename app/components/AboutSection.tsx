export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div>
          <h2 className="about__title">About me</h2>

          <p className="about__text">
            I'm Alina, a fullstack developer based in Germany with a strong
            passion for the frontend. I come from a background in IT business
            roles, which gives me a broader understanding of how software fits
            into real business needs.
          </p>

          <p className="about__text about__text--spaced">
            Over the past two years I've focused primarily on frontend
            development, later expanding into mobile with React Native and
            fullstack with Node.js, Express and PostgreSQL. Now moving into
            Next.js and TypeScript.
          </p>
        </div>

        <div className="about__facts">
          {[
            { label: "Based in", value: "Germany" },
            { label: "Focus", value: "Frontend · Fullstack" },
            {
              label: "Main Stack",
              value: "React · Node.js · Express.js · PostgreSQL",
            },
            { label: "Background", value: "IT Business" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="about__fact-label">{label}</p>
              <p className="about__fact-value">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
