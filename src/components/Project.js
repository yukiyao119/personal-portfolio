import React from "react"
import Img from "gatsby-image"
import projectList from "../data/projects.json";
import "./bg.css"


const Project = ({ ProjectImgs }) => {

  // console.log("projectList is json", projectList, "ProjectImgs is arr of node", ProjectImgs, "typeof ProjectImgs", typeof(ProjectImgs))

  const projectItems = projectList.map(project => {
    const theImage = ProjectImgs.find( image => { 
      return image.node.relativePath === `projects/${project.img}`} )
    const theImageSizes = theImage.node.childImageSharp.sizes
    // console.log("theImage", theImage, "theImageSizes", theImageSizes);
    
    return (
      <div className="portfolio-container">
        <Img className="portfolio-img"
          title={project.name}
          alt="Screenshot of Project"
          sizes={theImageSizes}
        />
        <div className="portfolio-item">
          <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>{project.tech}</p>
            <p>{project.other}</p>
            <p><a href="https://link.medium.com/OLFfrmCjx5" target="_blank">{project.post}</a></p>
          </div>
          <a className="a-container" href={project.url} target="_blank">
            <span>
              Check out web application
            </span>
          </a>
          <a className="a-container" href={project.github} target="_blank">
            <span>
              Check out Github repository
            </span>

          </a>
        </div>
      </div>
    )
  })

  return (
    <section className="content-section bg-project" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        {projectItems}
      </div>
    </section>
  )
}

export default Project

