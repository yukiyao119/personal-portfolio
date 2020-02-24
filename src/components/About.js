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
              Xue Yao(Yuki)
            </h2>
            <p className="lead mb-5" style={{width: '80%', margin: '0 auto'}}>
            Full-stack web developer with experience in JavaScript, React, Redux, HTML, CSS, Ruby on Rails, SQL and a background in engineering. <br/> After six years of work from startups to Fortune 500 such as Industrial and Commercial Bank of China, Danone, and Bain & Company, I discovered web development while I was working for E-commerce companies as operations and business development. Currently I live in New York, eligible and authorized to work in the U.S.
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