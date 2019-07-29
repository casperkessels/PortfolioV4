import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/tachyons.css"
import "../fonts/fonts.css"
import mirabeau_logo from "../../content/images/mirabeau_logo.jpg"
import openesbk_logo from "../../content/images/openesbk_logo.png"
import turnsignal_logo from "../../content/images/turnsignal_logo.png"
import profilepicture from "../../content/images/profilepicture.jpg"
import banner1 from "../../content/images/article1_banner.png"
import banner2 from "../../content/images/article2_banner.gif"
import banner3 from "../../content/images/article3_banner.gif"
import uxcollective from "../../content/images/uxcollective.png"
import noteworthy from "../../content/images/noteworthy.png"
import thestartup from "../../content/images/thestartup.jpg"
import muzli from "../../content/images/muzli.png"
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
        <section className="w-100 h-auto bg-white inria">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="db mv7 ph3 pv3 mh-auto center-l w-60-l" >
            <div className="w-30 w-20-ns v-mid pv2 ph3 dib-l">
              <img className="br-100" src={profilepicture} alt="Profile Picture"/>
            </div>
            <div className="w-80-l ph3 bl v-mid dib-l">
              <p className="tl b inria f5"> Hi! I am Casper!</p>
              <p className="tl inria f5"> I am an interaction designer currently based in Amsterdam. I am passionate about empowering people with technolgy through design </p>            </div>
          </div>
          </ScrollAnimation>

        </section>

        <section className="w-100 h-auto bg_nord17 nord0 inria">
          <div className="cf pv6 center">
            <h1 className="tc f3 fw9 inria mb6">I am currently</h1>
            <div className="cf w-70 w-100-ns mb5 inline-flex-ns  ph6-ns center">
              <div className="cf fl tc w-25-ns center grow">
                <div className="center w-50 w-40-ns mb4">
                  <a href="https://mirabeau.nl">
                    <img className="br-100 db bg-center cover" src={mirabeau_logo} alt="Mirabeau Logo"/>
                  </a>
                </div>
                <div className="db dib-ns nord0 mb6">
                  <a href="https://mirabeau.nl" className="tc f5 inria nord0 no-underline"> Interaction Designer at Mirabeau </a>
                </div>
              </div>
              <div className="cf fl tc w-third-m w-25-ns center grow">
                <div className="center w-50 w-40-ns mb4">
                  <a href="https://openesbk.com">
                    <img className="br-100 db bg-center cover" src={openesbk_logo} alt="OpeneSBK Logo"/>
                  </a>
                </div>
                <div className="db mb6 nord0">
                  <a href="https://openesbk.com" className="tc f5 inria nord0 no-underline"> Starting up an electric motorcycle racing series at Open eSBK </a>
                </div>
              </div>
              <div className="cf center fl w-third-m w-25-ns grow">
                <div className="center w-50 w-40-ns mb4">
                  <a href="https://theturnsignalblog.com">
                  <img className="br-100 db bg-center cover" src={turnsignal_logo} alt="Turnsignal Logo"/>
                  </a>
                </div>
                <div className="db mb6 tc nord0">
                  <a href="https://theturnsignalblog.com" className="tc f5 inria nord0 no-underline"> Writing my thoughts about cars, design, and technology at The Turnsignal </a>
                </div>
              </div>
            </div>
           </div>
        </section>

        <section className="cf w-100 h-auto ph4-ns ph3 pv6 center bg_nord0 nord6">
        <h1 className="tc f3 fw9 inria mb6 white">Check out some of my recent projects</h1>


        <ul className="list fl w-100  center tc db ph1 ph4-ns pv4 v-top ">


        {data.allMarkdownRemark.edges.map(({ node }) => (

          <li key={node.id} className="dib mh-auto w5 w6-ns h6-ns mv3 mh3-ns v-top" >
            <Link
              to={node.fields.slug}
              className="no-underline nord0"
            >
            <ScrollAnimation animateIn="fadeInUp">
              <div className="relative br4 bg-white pb3 shadow-4 grow" >
                <div>
                  <img className="br-top-4" src={node.frontmatter.thumbnail.childImageSharp.fluid.src} alt=""/>
                </div>
                <div className="mh4 mv3 tl">
                  <h2 className="f4 fw9 mt0 lh-title inria"> {node.frontmatter.title} </h2>
                  <p className="f6 inria ">{node.frontmatter.tags}</p>
                </div>
              </div>
              </ScrollAnimation>
             </Link>
          </li>

        ))}
        </ul>
        </section>

        <section className="ph4-l ph3 pv4 bg_nord17 inria">
          <div className="cf pv6 center">
            <p className="tc f3 fw9 inria mb6 nord0">Here are some of my recent articles</p>
            <div className="cf db  w-100 mb5 ph5 inline-flex-ns center">

              <div className="cf dib br4 w6-ns h6-ns grow w-third-m fl w-25-l center mb4 pointer bg-white shadow-4" >
                <div className="center mb3">
                  <a href="https://mirabeau.nl">
                    <img className="db bg-center br-top-4 cover" src={banner1} alt="Article 1 banner"/>
                  </a>
                </div>
                <div className="db dib-ns tl mt3 mb2 ph3">
                  <a href="https://theturnsignalblog.com/blog/why-car-companies-need-interaction-designers" className="tl f5 b inria black no-underline">Why Car Companies Need Interaction Designers</a>
                  <p>9 minute read</p>
                </div>
              </div>

              <div className="cf fl dib grow w6-ns h6-ns w-third-m w-25-l center mb4 pointer bg-white br4 shadow-4">
                <div className="center mb3">
                  <a href="https://openesbk.com">
                    <img className="db bg-center br-top-4 cover" src={banner2} alt="Article 2 banner"/>
                  </a>
                </div>
                <div className="db tl mt3 mb2 ph3">
                  <a href="https://theturnsignalblog.com/blog/overcoming-automotive-consumerism" className="tl f5 b inria black no-underline">Overcoming Automotive Consumerism, How Design Can Encourage Sustainability</a>
                  <p>11 minute read</p>
                </div>
              </div>

              <div className="cf center dib grow w6-ns h6-ns fl w-third-m w-25-l mb4 pointer bg-white br4 shadow-4">
                <div className="center mb3">
                  <a href="https://theturnsignalblog.com">
                  <img className="db bg-center br-top-4 cover" src={banner3} alt="Article 3 banner"/>
                  </a>
                </div>
                <div className="db tl mt3 mb2 ph3">
                  <a href="https://theturnsignalblog.com/blog/newconceptfordriverdistraction" className="tl f5 b inria black no-underline">Designing A New UX Concept to Reduce Driver Distraction</a>
                  <p>13 minute read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cf pv4">
            <p className="tc f3 fw9 inria mb6 nord0">Some cool people like what I write</p>
            <div className=" w-40-m w-30-l center">
              <div className="cf w-100 mb5 center inline-flex ">
                <div className="cf fl w-50 ph3 mb4 grow">
                  <a href="https://uxdesign.cc">
                    <img className="db bg-center cover" src={uxcollective} alt="UX Collective Logo"/>
                  </a>
                </div>
                <div className="cf fl w-50 ph3 mb4 grow">
                  <a href="https://blog.usejournal.com">
                    <img className="db bg-center cover" src={noteworthy} alt="Noteworthy Logo"/>
                  </a>
                </div>
                <div className="cf fl w-50 ph3 mb4 grow">
                  <a href="https://medium.com/swlh">
                    <img className="db bg-center cover" src={thestartup} alt="The Startup Logo"/>
                  </a>
                </div>
                <div className="cf fl w-50 ph3 mb4 grow">
                  <a href="https://muz.li">
                    <img className="db bg-center cover" src={muzli} alt="Muzli Logo"/>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
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