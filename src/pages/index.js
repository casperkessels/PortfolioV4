import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/tachyons.css"
import aircall_logo from "../../content/images/aircall_logo.png"
import openesbk_logo from "../../content/images/openesbk_logo.png"
import turnsignal_logo from "../../content/images/turnsignal_logo.png"
import profilepicture from "../../content/images/profilepicture.jpg"
import banner1 from "../../content/images/renaultconcept.gif"
import banner2 from "../../content/images/waymo.gif"
import banner3 from "../../content/images/touchconcept.png"
import uxcollective from "../../content/images/uxcollective.png"
import noteworthy from "../../content/images/noteworthy.png"
import thestartup from "../../content/images/thestartup.jpg"
import muzli from "../../content/images/muzli.png"
import uxweekly from "../../content/images/uxweekly.png"
import sidebar from "../../content/images/sidebar.png"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default ({ data }) => {

  return (
    <Layout>
    <Helmet>
      <title>Portfolio Casper Kessels</title>
      <meta name="Description" content="My professional portfolio."/>
    </Helmet>
      <div className="w-100">
        <section className="w-100 center h-auto bg-white ">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="db mv7 ph3 pv3 mh-auto center-ns w-60-ns" >
            <div className="w-30 w-20-l v-mid pv2 ph3 dib-l">
              <img className="br-100" src={profilepicture} alt="Profile Picture"/>
            </div>
            <div className="w-80-l ph3 bl v-mid dib-l">
              <p className="tl b f5"> Hi! I am Casper!</p>
              <p className="tl f5"> I am an interaction designer currently based in Paris. I am passionate about exploring new ways how design and technology can improve people’s lives. I love the challenge of creating simple interfaces for complex systems. </p>            </div>
          </div>
          </ScrollAnimation>

        </section>

        <section className="w-100 h-auto tc bg_nord17 nord0">
          <div className="cf pv6 center w-100">
            <h1 className="tc fw9 mb6 nord1">I am currently</h1>

            <div className="cf w-60 w-80-ns inline-flex-ns center">
              
              <div className="cf center fl w-third-ns grow ph3-ns">
                <div className="center w-50 w-40-m w-30-l mb4">
                  <a href="https://aircall.io">
                    <img className="br-100 db bg-center cover" src={aircall_logo} alt="Aircall Logo"/>
                  </a>
                </div>
                <div className="db dib-ns nord0 mb6 tc ">
                  <a href="https://aircall.io" className="tc f5 nord0 no-underline"> Product Designer at Aircall </a>
                </div>
              </div>

              <div className="cf center fl w-third-ns grow ph3-ns">
                <div className="center w-50 w-40-m w-30-l mb4">
                  <a href="https://theturnsignalblog.com">
                  <img className="br-100 db bg-center cover" src={turnsignal_logo} alt="Turnsignal Logo"/>
                  </a>
                </div>
                <div className="db mb6 tc nord0">
                  <a href="https://theturnsignalblog.com" className="tc f5 nord0 no-underline"> Writing about cars, design, and technology at The Turnsignal </a>
                </div>
              </div>

              <div className="cf fl tc w-third-ns center grow ph3-ns">
                <div className="center w-50 w-40-m w-30-l mb4">
                  <a href="https://openesbk.com">
                  <img className="br-100 db bg-center cover" src={openesbk_logo} alt="OpeneSBK Logo"/>
                  </a>
                </div>
                <div className="db mb6 nord0">
                  <a href="https://openesbk.com" className="tc f5 nord0 no-underline"> Starting up an electric motorcycle racing series at Open eSBK </a>
                </div>
              </div>
            </div>
            </div>
        </section>

        <section className="cf w-100 bg_nord0 nord6">
        <div className="w-90 cf h-auto w-70-ns pv6 center">
          <h1 className="tc fw9 mb6 white">Check out some of my recent projects</h1>


          <ul className="list tc db v-top ph0">


          {data.allMarkdownRemark.edges.map(({ node }) => (

            <li key={node.id} className="dib mh-auto w6-ns h6-ns mv3 ph3 v-top" >
              <Link
                to={node.fields.slug}
                className="no-underline nord0"
              >
              <ScrollAnimation animateIn="fadeInUp">
                <div className="relative br4 bg-white pb3 shadow-4 grow" >
                  <div>
                    <img className="br-top-4" src={node.frontmatter.thumbnail.childImageSharp.fluid.src} alt=""/>
                  </div>
                  <div className="mh4 mv3 h3-ns tl">
                    <h2 className="f4 fw9 mt0 mb0 lh-title"> {node.frontmatter.title} </h2>
                    <p className="f6 mt2 ">{node.frontmatter.tags}</p>
                  </div>
                </div>
                </ScrollAnimation>
               </Link>
            </li>

          ))}
          </ul>
        </div>
        </section>

        <section className="bg_nord17 w-100">
          <div className="cf pv6 w-100 center">
            <h1 className="tc fw9 mb6 nord1">Here are some of my recent articles</h1>
           
            <div className="cf w-80 mb5 flex-ns justify-between-ns justify-center-ns center">

              <div className="grow w-third-ns pointer bg-white br4 shadow-4 mr4-ns mb3">
                <div className="mb3">
                  <a href="https://theturnsignalblog.com/blog/porschetaycan">
                  <img className="db bg-center br-top-4 cover" src={banner3} alt="Article 3 banner"/>
                  </a>
                </div>
                <div className="cf db tl mt3 mb2 ph3">
                  <a href="https://theturnsignalblog.com/blog/new-touch-concept" className="tl f5 b black no-underline">A New Concept for Usable Touch Interaction in Cars</a>
                  <p>12 minute read</p>
                </div>
              </div>

              <div className="grow w-third-ns pointer bg-white br4 shadow-4 mb3">
                <div className="mb3">
                  <a href="https://theturnsignalblog.com/blog/waymo-design">
                    <img className="db bg-center br-top-4 cover" src={banner2} alt="Article 2 banner"/>
                  </a>
                </div>
                <div className="cf db tl mt3 mb2 ph3">
                  <a href="https://www.theturnsignalblog.com/blog/waymo-design/" className="tl f5 b black no-underline">How Waymo Uses Design to Create Trust in Self-Driving Cars</a>
                  <p>11 minute read</p>
                </div>
              </div>

              <div className="br4 grow w-third-ns pointer bg-white shadow-4 ml4-ns mb3">
                <div className="mb3">
                  <a href="https://theturnsignalblog.com/blog/gesture-interaction">
                    <img className="db bg-center br-top-4 cover" src={banner1} alt="Article 1 banner"/>
                  </a>
                </div>
                <div className="cf db tl mt3 mb2 ph3">
                  <a href="https://www.theturnsignalblog.com/blog/gesture-interaction/" className="tl f5 b  black no-underline">Designing A New UX Concept to Reduce Driver Distraction</a>
                  <p>13 minute read</p>
                </div>
              </div>

            </div>
          </div>
          <div className="cf pv4">
            <h2 className="tc fw9 mb6 nord1 ph3">Some cool people like what I write</h2>
            <div className=" w-40-m w-30-l center">
              <div className="flex flex-wrap justify-between-ns justify-center items-center center list mb5">
                <div className="fl w4 ph3 mb4 grow">
                  <a href="https://uxdesign.cc">
                    <img className="db bg-center cover" src={uxcollective} alt="UX Collective Logo"/>
                  </a>
                </div>
                <div className="fl w4 ph3 mb4 grow">
                  <a href="https://blog.usejournal.com">
                    <img className="db bg-center cover" src={noteworthy} alt="Noteworthy Logo"/>
                  </a>
                </div>
                <div className="fl w4 ph3 mb4 grow">
                  <a href="https://medium.com/swlh">
                    <img className="db bg-center cover" src={thestartup} alt="The Startup Logo"/>
                  </a>
                </div>
                <div className="fl w4 ph3 mb4 grow">
                  <a href="https://muz.li">
                    <img className="db bg-center cover" src={muzli} alt="Muzli Logo"/>
                  </a>
                </div>
                <div className="fl w4 ph3 mb4 grow">
                  <a href="https://uxdesignweekly.com">
                    <img className="db bg-center cover" src={uxweekly} alt="UXWeekly Logo"/>
                  </a>
                </div>
                <div className="fl w4 ph3 mb4 grow">
                  <a href="https://sidebar.io">
                    <img className="db bg-center cover" src={sidebar} alt="Sidebar Logo"/>
                  </a>
                </div>
              </div>
            </div>
           </div>
        </section>
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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 6000) {
                  ...GatsbyImageSharpFluid
                }
              }
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