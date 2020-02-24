import React from "react"
import Img from "gatsby-image"
import projectList from "../data/projects.json";
import "./bg.css"


const Project = ({ ProjectImgs }) => {

  console.log("projectList is json", projectList, "ProjectImgs is arr of node", ProjectImgs, "typeof ProjectImgs", typeof(ProjectImgs))

  const projectItems = projectList.map(project => {
    const theImage = ProjectImgs.find( image => { 
      return image.node.relativePath === `projects/${project.img}`} )
    const theImageSizes = theImage.node.childImageSharp.sizes
    console.log("theImage", theImage, "theImageSizes", theImageSizes);
    
    return (
      <div key={project.id}>
          <div style={{ width: '300px', margin: '20px'}}>
              <Img
                title={project.name}
                alt="Screenshot of Project"
                sizes={theImageSizes}
              />
            <a className="portfolio-item" href={project.url}>
              <span className="caption">
                <span className="caption-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                </span>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {projectItems}
        </div>
        
      </div>
    </section>
  )
}

export default Project

