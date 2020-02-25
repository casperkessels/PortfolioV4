import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/tachyons.css"
import "../fonts/fonts.css"




export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )


  return (
    <div className="min-vh-100 w-100 flex flex-column inria">
      <nav className=" dt absolute w-100 border-box pa3 ph5-ns bg-white-10">
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <Link className="link hover-nord9 nord0 f5 f4-ns dib mr3 mr4-l" to={`/`}>
            My Work
          </Link>
          <Link className="link hover-nord9 nord0 f5 f4-ns dib mr3 mr4-l"
            to={`/about/`}
            >
            About
          </Link>
          <a href="https://www.casperkessels.com/CV_CasperKessels.pdf" className="link hover-nord9 nord0 f5 f4-ns dib mr3 mr4-l">
            Resume
          </a>
        </div>
      </nav>

      <div className=" flex flex-wrap content-start center">
      {children}
      </div>

      <footer className="pv4 tc">
        <div className="flex flex-wrap justify-between-ns justify-center items-center center list w-60-l w-70-m">
          <a href="https://www.linkedin.com/in/casper-kessels/" target="_blank">
            <h6 className="link hover-nord9 nord0 f5 dib light-silver pv3 ph3 ph4-ns">LinkedIn</h6>
          </a>
          <a href="https://www.flickr.com/photos/182446581@N04/" target="_blank">
            <h6 className="link hover-nord9 nord0 f5 dib light-silver pv3 ph3 ph4-ns">Flickr</h6>
          </a>
          <a href="https://twitter.com/CasperKessels" target="_blank">
            <h6 className="link hover-nord9 nord0 f5 dib light-silver pv3 ph3 ph4-ns">Twitter</h6>
          </a>
          <a href="https://medium.com/@casperkessels" target="_blank">
            <h6 className="link hover-nord9 nord0 f5 dib light-silver pv3 ph3 ph4-ns">Medium</h6>
          </a>
          <a href="mailto:casperkessels@gmail.com" target="_blank">
            <h6 className="link hover-nord9 nord0 f5 dib light-silver pv3 ph3 ph4-ns">Email</h6>
          </a>
        </div>
        <div className="w-60 center mt3">
        <p className="inria f6 light-silver">This website is made from scratch with React, Gatsby, and Tachyons. It is typeset in Inria and uses the Nord Theme.</p>
        </div>
      </footer>
    </div>
  )
}