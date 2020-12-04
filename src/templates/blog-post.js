import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/tachyons.css"
import Img from 'gatsby-image'
import SEO from "../components/seo"
import Cursor from "../components/cursor"
import Backbutton from "../components/backbutton"




class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const image = post.frontmatter.image
      ? post.frontmatter.image.childImageSharp.resize
      : null
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
      <Cursor />
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt || post.frontmatter.description }
          image={image}
          pathname={this.props.location.pathname}
        />

      <div className="w-100 nord0">
        <img src={post.frontmatter.banner.publicURL} alt="banner" className="db-ns dn w-100 mb0"/>
        <img src={post.frontmatter.thumbnail.publicURL} alt="thumbnail" className="db dn-ns w-100 mb0"/>

        <div className="sticky pt4-ns ph4-ns ph2 pv3 bg_nord17 bg-transparant-ns">
        <Backbutton />
        </div>

        <div className="w-50-l w-70-m center cf ph3 ph0-ns">

          <h1 className="f2-ns f3">{post.frontmatter.title}</h1>
          <h3>{post.frontmatter.tags} - {post.frontmatter.date}</h3>
        </div>


        <article>
          <div className="ph3 ph0-ns mt3 w-50-l w-70-m center mb5">
            <div className="w-100 lh-copy initial" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
      </div>
    </Layout>
    )
  }
}


export default BlogPostTemplate

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date
        tags
        title
        subtitle
        thumbnail {
        childImageSharp {
          fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
        }
          publicURL
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
    }
  }
}
`