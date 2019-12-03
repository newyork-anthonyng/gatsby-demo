import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';

export default ({data}) => (
  <div style={{ color: 'teal' }}>
    <Header headerText="About Gatsby" />
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Such wow.</p>
  </div>
)

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`
