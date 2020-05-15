import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/grayscale.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                author
                description
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  property: `og:title`,
                  content: data.site.siteMetadata.title,
                },
                {
                  property: `og:description`,
                  content: data.site.siteMetadata.description,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                { name: 'description',
                  content: data.site.siteMetadata.description 
                },
                { 
                  name: 'keywords', 
                  content: 'site, web' 
                },
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
