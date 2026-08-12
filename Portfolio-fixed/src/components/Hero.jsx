import "./Hero.css";

const RESUME_URL =
  "https://drive.google.com/file/d/1UYhiidMStuEClXgX48CUfOouO4I4PR8I/view?usp=sharing";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Spline / 3D Chain */}
      <div className="hero__spline">
        <iframe
          src="https://my.spline.design/unchained-cKApoujAfIeQh6Ne86xViw1M/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Interactive 3D world"
          loading="eager"
        />
      </div>

      {/* Cinematic lighting / readability */}
      <div className="hero__glow" />
      <div className="hero__gradient" />

      {/* Main content */}
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="hero__status" />
            <span>Python Developer · Full Stack</span>
          </div>

          <h1 className="h1-display">
            Building systems
            <br />
            <span>with a point of view.</span>
          </h1>

          <p className="hero__summary">
            I build full-stack web applications with Python, FastAPI, React,
            and thoughtful AI integrations — from structured APIs to polished
            product experiences.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              <span>View Selected Work</span>
              <span className="btn__icon">↗</span>
            </a>

            <a
              href="mailto:sarfarazpatel890@gmail.com"
              className="btn btn--secondary"
            >
              Contact
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn--secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

