import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    items: ["Python", "C/C++", "JavaScript (ES6+)"],
  },
  {
    title: "Backend",
    items: ["FastAPI · Flask", "Pydantic · Uvicorn", "REST APIs · Async", "Node.js · Express"],
  },
  {
    title: "Frontend",
    items: ["React.js · Vite", "HTML5 · CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Tools + Data",
    items: ["MongoDB · MySQL", "Git · GitHub · Postman", "Clerk · Cloudinary", "JWT · VS Code"],
  },
];

export default function Skills() {
  return (
    <section className="skills">
      <p className="eyebrow skills__eyebrow">Technical Practice</p>

      <div className="skills__grid">
        {skillCategories.map((category) => (
          <div className="skills__category" key={category.title}>
            <p className="skills__category-title">{category.title}</p>
            <p className="skills__category-items">
              {category.items.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < category.items.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
