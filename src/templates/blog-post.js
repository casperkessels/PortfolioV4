import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/tachyons.css"
import "../fonts/fonts.css"


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="w-100 bg_nord17">
        <article>
          <div className="ph3 ph4-ns w-70-ns mt5 center">
            <Link className="black hover-gray no-underline" to={`/`}>⟵ Back</Link>
          </div>
          <div className="ph3 ph0-ns mt5 w-50-ns nord0 center">
            <h1 className="f2">{post.frontmatter.title}</h1>
            <div className="w-100 f5 lh-copy" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
      </div>
    </Layout>
  )
}



export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tags
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
      }
    }
  }
`