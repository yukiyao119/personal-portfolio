import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import About from '../components/About'

import config from '../../config';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Project from '../components/Project'


const IndexPage = ({ data }) => {
  console.log(data)
  const { edges: projectImgData } = data.ProjectImgs;
  // console.log(projectImgData)
  // const { edges: thumbnailImgData } = data.thumbnailImg;
  console.log(data.thumbnailImg.sizes.src);
  

  return (
  <Layout>
    <Helmet>
      <meta property="og:image" content={ data.thumbnailImg.sizes.src } />
    </Helmet>
    {/* <Header /> */}
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1" style={{color: 'white'}}>{config.heading}</h1>
        <h3 className="mb-5" style={{color: 'white'}}>
          <em>{config.subHeading}</em>
        </h3>
        <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-secondary btn-xl" href="#about">
            About
          </a>
        </Scroll>
      </div>
      <div className="overlay"></div>
    </header>
    <About profileImg={data.profileImg}/>
    <Project ProjectImgs={projectImgData}/>
    <ScrollToTop />
    <Footer />
  </Layout>
  )
}

export default IndexPage;


export const query = graphql`
query allImgsQuery {
  site {
    siteMetadata {
      title
      image
    }
  }

  thumbnailImg: imageSharp(sizes: {srcSet: {regex: "/thumbnail/"}}) {
    sizes {
      sizes
      src
    }
  }

  profileImg: imageSharp(sizes: {srcSet: {regex: "/Yukiyao/"}}) {
    sizes(maxWidth: 300, maxHeight: 300) {
      ...GatsbyImageSharpSizes
    }
  }

  ProjectImgs: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/projects/.*.png/" } }
  ) {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          sizes (maxWidth: 480) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }

  

  }

}
`