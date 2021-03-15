import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/tachyons.css"

import Hello from "../components/hello"
import photography from "../../content/images/photography.jpg"
import turnsignal from "../../content/images/turnsignal.jpg"




export default ({ data }) => {

  return (
    <Layout>
    <Helmet>
      <title>Portfolio Casper Kessels</title>
      <meta name="Description" content="My professional portfolio."/>
    </Helmet>        
    
    <div className="w-70-ns ph0-ns ph3 mt0 center vh-100">
        <div className="db mt6-ns mt3 mh-auto center" >
          <div className="cf v-mid center">
            <Hello /> 
            <p className="lh-copy mt3 f4-ns f5 nord0">I am Casper, a digital product designer based in <s>Amsterdam</s> Paris. I am currently a product designer at <a href="https://aircall.io" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">Aircall</a>. In my spare time I write on my <a href="https://theturnsignalblog.com" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">blog</a> and work on side projects</p>
            <a href="https://twitter.com/CasperKessels" target="_blank" rel="noopener noreferrer">
              <p className="link hover-nord9 dib pr2 nord3 f8" rel="noopener noreferrer">TWITTER</p>
            </a>
            <p className="dib nord3 f8">·</p>
            <a href="mailto:casperkessels@gmail.com" target="_blank" rel="noopener noreferrer">
              <p className="link hover-nord9 dib ph2 nord3 f8">EMAIL</p>
            </a>
            <p className="dib nord3 f8">·</p>
            <a href="https://www.linkedin.com/in/casper-kessels/" target="_blank" rel="noopener noreferrer">
              <p className="link hover-nord9 dib ph2 nord3 f8">LINKEDIN</p>
            </a>
            <p className="dib nord3 f8">·</p>
            <a href="https://theturnsignalblog.com" target="_blank" rel="noopener noreferrer">
              <p className="link hover-nord9 dib ph2 nord3 f8">BLOG</p>
            </a>
            <p className="dib nord3 f8">·</p>
            <a href="https://www.flickr.com/photos/182446581@N04/" target="_blank" rel="noopener noreferrer">
              <p className="link hover-nord9 dib pl2 nord3 f8">FLICKR</p>
            </a>
          </div>
        </div>


      <div className="tc w-100 nord0 absolute bottom-0 left-0 ">
        <p>Here is my latest work</p>
        <p><span role="img" aria-label="point down">👇</span></p>
        <div className="verticalLine tc center mb0">
          <br />
          <br />
        </div>
      </div>
    </div>

        <div className="cf w-100 ">

          <div className="w-70-l w-90-m ph0-ns ph2 center">
              <ul className="list db v-top ph0 ml0">
              {data.allMarkdownRemark.edges.map(({ node }) => {
                    if (node.frontmatter.status === "published" && node.frontmatter.category === "work"){
                      return ( 
                        <li key={node.id} className="dib w-100 center mt5" >
                        <Link
                          to={node.fields.slug}
                          className="no-underline nord0 hover-nord9"
                        >
                        <div className="dib-ns" >
                          <div className="w-100 w-40-ns dib-ns v-top pr3">
                              <h2 className="lh-title mb0 mt0 f4">{node.frontmatter.title}</h2>
                              <p className="lh-title mb0 mt2 f6-ns f7 ">{node.frontmatter.subtitle}</p>
                              <p className="lh-title mb0 mt2 f7 bt pv2 dib">{node.frontmatter.date}</p>
                            </div>
                          
                            <div className="grow w-60-ns w-100 dib">
                              <img className="" src={node.frontmatter.thumbnail.publicURL} alt=""/>
                            </div>

                            
                          </div>
                         </Link>
                      </li>
                      )
                    } 
                  })}
              </ul>
          </div>
        </div>


        <div className="w-100 center h-auto">

          <div className="w-70-l w-90-m center ph0-ns ph2 center">

          <div className="tc w-100 nord3 center mv5 ">
           <div className="verticalLine tc center mb0">
              <br />
              <br />
            </div>
            <p className="pv4 mb0">I am also always working on some side projects</p>
            <div className="verticalLine tc center mb0">
              <br />
              <br />
            </div>
          </div>

          <ul className="list db v-top ph0 ml0 mv6">
            <li className="dib-ns w-50-ns w-100 pr3-ns center" >
              <a href="https://theturnsignalblog.com" target="_blank" rel="noopener noreferrer" className="no-underline nord0">
                <div className="relative" >
                  <div className="grow">
                    <img className="" src={turnsignal} alt="The Turn Signal"/>
                  </div>
                  <div className="pb3">
                    <h2 className="lh-title mb0 f4 f5-ns mt2 nord0">The Turn Signal Blog</h2>
                    <p className="lh-title mb0 mt2 f6-ns f7 ">My blog about automotive UX design</p>
                  </div>
                </div>
               </a>
            </li>

            <li className="dib-ns w-50-ns w-100 pr3-ns center" >
              <Link
                to={`/photography/`}
                className="no-underline nord0"
              >
                <div className="relative" >
                  <div className="grow">
                    <img className="" src={photography} alt="photography"/>
                  </div>
                  <div className="pb3">
                    <h2 className="lh-title mb0 f4 f5-ns mt2 nord0">Photography</h2>
                    <p className="lh-title mb0 mt2 f6-ns f7 ">I like to travel and take pictures</p>
                  </div>
                </div>
               </Link>
            </li>

          </ul>

          </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            tags
            title
            subtitle
            date
            status
            author
            category
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`