import "./Contact.css";

const RESUME_URL =
  "https://drive.google.com/file/d/1UYhiidMStuEClXgX48CUfOouO4I4PR8I/view?usp=sharing";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="eyebrow contact__eyebrow">
        Contact / Open to meaningful work
      </p>

      <h1 className="h1-display contact__heading">
        Let’s make the next system feel inevitable.
      </h1>

      <div className="contact__details">
        <div className="contact__address">
          <a
            href="mailto:sarfarazpatel890@gmail.com"
            className="contact__email"
          >
            sarfarazpatel890@gmail.com
          </a>
          <p className="contact__location">Dewas, Madhya Pradesh, India</p>
        </div>

        <div className="contact__links">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="contact__github"
          >
            Resume ↗
          </a>

          <a
            href="https://github.com/sarfarazpatel21"
            target="_blank"
            rel="noreferrer"
            className="contact__github"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <p className="contact__signature">
        SARFARAZ PATEL · PYTHON DEVELOPER · FULL STACK
      </p>
    </section>
  );
}
