import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../assets/sass/stylish-portfolio.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                image
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: "I'm a Full Stack Developer with strong background in E-commerce and SaaS. Through years of experience at tech startups and Fortune 500, I utilized vast knowledge to analyze, communicate, improve, and resolve product and operation issues." },
                { name: 'keywords', content: 'Yuki Yao Developer' },
                // { name: 'og:image', content: `${data.site.siteMetadata.image}`  }
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={'page-top'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
