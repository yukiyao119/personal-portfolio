import React from "react"
import Img from "gatsby-image";
import Scroll from './Scroll';
import './bg.css'

const About = ({ profileImg }) => {
  console.log(profileImg);

  return (
    <section className="content-section bg-mid" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
              <Img style={{ display: 'block',borderRadius: '50%', width: '220px', margin: '0 auto 20px'}}
              title="Profile image"
              alt="Large image of Yuki"
              sizes={profileImg.sizes}
              />
            <h2>
              Yuki(Xue) Yao
            </h2>
            <p className="lead mb-5" style={{width: '80%', margin: '0 auto'}}>
            I'm a Full Stack Developer with strong background in Ecommerce and Internet industries. Former Optimization and Account Manager utilizing vast technology knowledge <br/>
            to provide technical support and optimal solutions to clients.<br/><br/>
            I believe that technology can solve real life problem. Every step of designing and building things is truly exciting!<br/><br/>
            <strong>Programming Language: </strong>JavaScript, Ruby, HTML, CSS <br/>
            <strong>Frameworks and Libraries: </strong>React, Ruby on Rails, Redux, jQuery, Gatsby, Semantic UI <br/>
            <strong>Database Management System: </strong>PostgreSQL<br/>
            <strong>Design: </strong>Adobe Photoshop, Sketch<br/>
            <strong>Language: </strong>English - fluent, Mandarin - native <br/>
            </p>
            <Scroll type="id" element="portfolio" offset={100}>
              <a className="btn btn-secondary btn-xl" style={{ color: 'white'}} href="#portfolio">
                Projects
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>
  )


}

export default About