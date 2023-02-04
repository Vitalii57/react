import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import Projects from "../data/projects";
import { useState } from "react";

function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(Projects);
  const filterProjects = (filter) => {
    return Projects.filter((project) => {
      if (filter === "All") {
        return Projects;
      }
      return project.category === filter;
    });
  };
  return (
    <div className="Portfolio">
      <Toolbar
        filters={filters}
        selected={filter}
        eventHandler={(filter) => {
          setFilter(filter);
          setFilteredProjects(filterProjects(filter));
        }}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default Portfolio;
