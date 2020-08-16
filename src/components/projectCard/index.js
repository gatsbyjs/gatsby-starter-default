// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"
const ProjectCard = ({ projects }) => (
  <>
    <div className="projects-container">
      {projects.map((project, index) => {
        return (
          <div key={index} className="project-container">
            {project.title}
          </div>
        )
      })}
    </div>
  </>
)

ProjectCard.propTypes = {
  siteTitle: PropTypes.string
}

ProjectCard.defaultProps = {
  siteTitle: ``
}

export default ProjectCard
