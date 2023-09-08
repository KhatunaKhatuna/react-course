import "./Challenge1-2.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "TypeScript",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    skill: "Drupal",
    level: "intermediate",
    color: "#C3DCAF",
  },
];

export default function Challenge1() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name="Dog" surname="Dogger" />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="../../image/img-1.jpg" />;
}
function Intro(props) {
  return (
    <div>
      <h1>
        {props.name} {props.surname}
      </h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.Oh I forgot about dancing I
        live with it
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <ul className="skill-list ">
      {skills.map((skill) => {
        return <Skill skillobj={skill} key={skill.skill} />;
      })}
    </ul>
  );
}
{
  /*skill cpmponent */
}
function Skill({ skillobj }) {
  return (
    <li className="skill" style={{ background: skillobj.color }}>
      <span>{skillobj.skill}</span>
      <span>
        {skillobj.level === "advanced" && "💪"}
        {skillobj.level === "intermediate" && "👍️"}
        {skillobj.level === "beginner" && "🐣"}
      </span>
    </li>
  );
}
