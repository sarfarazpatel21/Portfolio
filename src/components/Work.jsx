import "./Work.css";

const projects = [
  {
    number: "01",
    title: "TripGenie",
    description:
      "An AI-powered travel itinerary planner that turns a destination, budget, and preferences into a structured day-by-day plan — with hotels, restaurants, safety guidance, hidden gems, and a follow-up chat.",
    stack: "FastAPI · Pydantic · React · Google Gemini API · Tailwind CSS · Framer Motion",
    tag: "API design / prompt logic / product UI",
  },
  {
    number: "02",
    title: "NextStay",
    description:
      "A full-stack real-estate booking platform for browsing, listing, and managing properties. The backend was migrated from Node.js and Express to FastAPI, with async MongoDB access, roles, bookings, search, and image workflows.",
    stack: "FastAPI · MongoDB · Motor · React · Clerk · Cloudinary · JWT",
    tag: "Async data / authentication / booking flow",
  },
  {
    number: "03",
    title: "Smart Monitoring System",
    description:
      "An IoT mini project designed around sensor data collection, cloud integration, and logic for interpreting real-time signals.",
    stack: "IoT · Sensor data · Cloud integration",
    tag: "Data collection / real-time interpretation",
  },
];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work__intro">
        <p className="eyebrow">Selected Work · 01—03</p>
        <h2 className="h2-display">Products shaped from the inside out.</h2>
      </div>

      <div className="work__chapters">
        {projects.map((project) => (
          <article className="work__row" key={project.number}>
            <p className="eyebrow work__number">{project.number}</p>
            <div className="work__detail">
              <h3 className="work__title">{project.title}</h3>
              <p className="body-text">{project.description}</p>
              <p className="small-label">{project.stack}</p>
            </div>
            <p className="tag-label work__tag">{project.tag}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
