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
          <Link className="link hover-nord9 nord0 f5 f4-ns dib mr3 mr4-l"
            to={`/about/`}
            >
            Resume
          </Link>
        </div>
      </nav>
      <div className=" flex flex-wrap content-start center">
      {children}
      </div>
      <footer className="pv4 tc">
        <a href="https://www.linkedin.com/in/casper-kessels/" target="_blank">
          <p className="link hover-nord9 nord0 f6 f5-l dib mr3 mr4-l">LinkedIn</p>
        </a>
        <a href="https://www.flickr.com/photos/182446581@N04/" target="_blank">
          <p className="link hover-nord9 nord0 f6 f5-l dib mr3 mr4-l">Flickr</p>
        </a>
        <a href="https://twitter.com/CasperKessels" target="_blank">
          <p className="link hover-nord9 nord0 f6 f5-l dib mr3 mr4-l">Twitter</p>
        </a>
        <a href="https://medium.com/@casperkessels" target="_blank">
          <p className="link hover-nord9 nord0 f6 f5-l dib mr3 mr4-l">Medium</p>
        </a>
        <a href="mailto:casperkessels@gmail.com" target="_blank">
          <p className="link hover-nord9 nord0 f6 f5-l dib mr3 mr4-l">Email</p>
        </a>
        <div className="w-60 center mt3">
        <p className="inria f6 light-silver">This website is made from scratch with React, Gatsby, and Tachyons. It is typeset in Inria and uses the Nord Theme.</p>
        </div>
      </footer>
    </div>
  )
}