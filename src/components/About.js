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
            After six years of diverse work from startups to Fortune 500, <br/>
            I discovered web development while I was working for Internet companies. I love that coding can bring ideas to life and I enjoy every step of designing and building things!<br/><br/>
            <strong>Programming Language: </strong>JavaScript, Ruby, HTML, CSS <br/>
            <strong>Frameworks and Libraries: </strong>React, Ruby on Rails, Redux, jQuery, Semantic UI <br/>
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