import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/tachyons.css"





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
    <div className="min-vh-100 w-100 nord16">
      

      <div className=" flex flex-wrap content-start center">
      {children}
      </div>

      <footer className="pv2 nord5 w-70-ns ph0-ns ph2 center f7 bt b--black-20">
        <div className="subtitlecolor dib">
          <a href="https://twitter.com/CasperKessels" target="_blank" rel="noopener noreferrer">
            <p className="link hover-nord9 dib pr2 subtitlecolor f8">TWITTER</p>
          </a>
          <p className="dib subtitlecolor">·</p>
          <a href="mailto:casperkessels@gmail.com" target="_blank" rel="noopener noreferrer">
            <p className="link hover-nord9 dib ph2 subtitlecolor f8">EMAIL</p>
          </a>
          <p className="dib subtitlecolor">·</p>
          <a href="https://www.linkedin.com/in/casper-kessels/" target="_blank" rel="noopener noreferrer">
            <p className="link hover-nord9 dib ph2 subtitlecolor f8">LINKEDIN</p>
          </a>
          <p className="dib subtitlecolor">·</p>
          <a href="https://theturnsignalblog.com" target="_blank" rel="noopener noreferrer">
            <p className="link hover-nord9 dib ph2 subtitlecolor f8">BLOG</p>
          </a>
          <p className="dib subtitlecolor">·</p>
          <a href="https://www.flickr.com/photos/182446581@N04/" target="_blank" rel="noopener noreferrer">
            <p className="link hover-nord9 dib pl2 subtitlecolor f8">FLICKR</p>
          </a>
        </div>
        <div className="dib-ns db fr-ns">
          <p className="subtitlecolor mb2">Made in Paris</p>
        </div>
        <div className="db">
          <p className="f8 subtitlecolor">This website is made from scratch with React, Gatsby, and Tachyons. It is typeset in Inter.</p>
        </div>
      </footer>
    </div>
    
  )
}