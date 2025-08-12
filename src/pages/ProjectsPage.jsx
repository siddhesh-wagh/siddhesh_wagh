// src/pages/ProjectsPage.jsx
import React from "react";
import Projects from "../components/projects"; // ✅ Fixed casing

const ProjectsPage = () => {
  return (
    <div>
      {/* Show all projects on this page */}
      <Projects showAll={true} />
    </div>
  );
};

export default ProjectsPage;
