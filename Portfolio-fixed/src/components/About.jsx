import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__heading">
        <p className="eyebrow">Profile / Direction</p>
        <h2 className="h2-display">
          A builder who values structure and momentum.
        </h2>
      </div>

      <div className="about__details">
        <p className="body-text">
          My focus is full-stack development with Python at the core: clean
          FastAPI services, asynchronous data work, thoughtful validation,
          and React interfaces that make complex product logic feel clear.
          I bring a problem-solving foundation in Data Structures,
          Algorithms, and Object-Oriented Programming to every build.
        </p>

        <div className="about__education">
          <div>
            <p className="about__degree">B.Tech, Information Technology</p>
            <p className="about__school">SVVV, Indore · CGPA 7.71/10</p>
          </div>
        </div>

        <p className="tag-label">
          NPTEL Certifications — Introduction to Programming in C · Internet
          of Things
        </p>
      </div>
    </section>
  );
}
