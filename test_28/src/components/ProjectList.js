import Project from "./project";

function ProjectList(props) {
  return (
    <div className="ProjectList">
      {Array.from(props.projects).map((project, projectIndex) => (
        <Project key={projectIndex} img={project.img} name={props.category} />
      ))}
    </div>
  );
}

export default ProjectList;
