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



export default ({ data }) => {
  return (
    <Layout>
    <Helmet>
      <title>Portfolio Casper Kessels</title>
      <meta name="Description" content="My professional portfolio."/>
    </Helmet>
      <div className="w-100">
        <section className="w-100 h-auto bg-white inria">
          <div className="db mv7 ph3 pv3 mh-auto center-l w-60-l">
            <div className="w-30 w-20-l v-mid pv2 ph3 dib-l">
              <img className="br-100" src={profilepicture} alt="Profile Picture"/>
            </div>
            <div className="w-80-l ph3 bl v-mid dib-l">
              <p className="tl b inria f5"> Hi! I am Casper!</p>
              <p className="tl inria f5"> I am an interaction designer currently based in Amsterdam. I am passionate about solving complex problems with design and do some other stuff to fill up the emtpy space here !</p>
            </div>
          </div>
        </section>

        <section className="w-100 h-auto bg-lighter-blue inria">
          <div className="cf  pv4 center">
            <p className="tc f4 inria mb6">I am currently</p>
            <div className="cf w-70 w-100-ns mb5 inline-flex-ns  ph6-ns center">
              <div className="cf fl tc w-25-ns center grow">
                <div className="center w-50 w-40-ns mb4">
                  <a href="https://mirabeau.nl">
                    <img className="br-100 db bg-center cover" src={mirabeau_logo} alt="Mirabeau Logo"/>
                  </a>
                </div>
                <div className="db dib-ns mb6">
                  <a href="https://mirabeau.nl" className="tc f5 inria black no-underline"> Interaction Designer at Mirabeau </a>
                </div>
              </div>
              <div className="cf fl tc w-third-m w-25-ns center grow">
                <div className="center w-50 w-40-ns mb4">
                  <a href="https://openesbk.com">
                    <img className="br-100 db bg-center cover" src={openesbk_logo} alt="OpeneSBK Logo"/>
                  </a>
                </div>
                <div className="db mb6">
                  <a href="https://openesbk.com" className="tc f5 inria black no-underline"> Starting up an electric motorcycle racing series at Open eSBK </a>
                </div>
              </div>
              <div className="cf center fl w-third-m w-25-ns grow">
                <div className="center w-50 w-40-ns mb4">
                  <a href="https://theturnsignalblog.com">
                  <img className="br-100 db bg-center cover" src={turnsignal_logo} alt="Turnsignal Logo"/>
                  </a>
                </div>
                <div className="db mb6 tc">
                  <a href="https://theturnsignalblog.com" className="tc f5 inria black no-underline"> Writing my thoughts about cars, design, and technology at The Turnsignal </a>
                </div>
              </div>
            </div>
           </div>
        </section>

        <section className="cf w-100 h-auto ph4-ns ph3 pv4 center">
        <p className="tc f4 inria mb6">Check out some of my recent projects</p>


        <ul className="list fl w-100 tc db pa0">

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id} className="dib mh-auto mv3">
            <Link
              to={node.fields.slug}
              className="db no-underline black grow w6"
            >
              <div className="relative w6 h6 br4 bg-white shadow-4" >
                <div>
                  <img className="br-top-4" src={node.frontmatter.thumbnail.childImageSharp.fluid.src} alt=""/>
                </div>
                <div className="mh4 mt3">
                  <h2 className="f5 fw1 mt0 lh-title inria bold"> {node.frontmatter.title} </h2>
                  <h4 className="f5 inria">{node.frontmatter.tags}</h4>
                </div>
              </div>
             </Link>
          </li>
        ))}

        </ul>



        </section>
        <section className="ph4-ns ph3 pv4 bg-lighter-blue inria">
          <div className="cf pv4 center">
            <p className="tc f4 inria mb6">Here are some of my recent articles</p>
            <div className="cf w-80 w-100-ns mb5 inline-flex-ns  ph6-ns center">
              <div className="cf fl w-25-ns center grow">
                <div className="center mb3">
                  <a href="https://mirabeau.nl">
                    <img className="db bg-center br3 cover" src={banner1} alt="Article 1 banner"/>
                  </a>
                </div>
                <div className="db dib-ns tl mb5">
                  <a href="https://mirabeau.nl" className="tl f5 b inria black no-underline">Why Car Companies Need Interaction Designers ⟶</a>
                </div>
              </div>
              <div className="cf fl w-third-m w-25-ns center grow">
                <div className="center mb3">
                  <a href="https://openesbk.com">
                    <img className="db bg-center br3 cover" src={banner2} alt="Article 2 banner"/>
                  </a>
                </div>
                <div className="db mb5 tl">
                  <a href="https://openesbk.com" className="tl f5 b inria black no-underline">Overcoming Automotive Consumerism, How Design Can Encourage Sustainability ⟶</a>
                </div>
              </div>
              <div className="cf center fl w-third-m w-25-ns grow">
                <div className="center mb3">
                  <a href="https://theturnsignalblog.com">
                  <img className="db bg-center br3 cover" src={banner3} alt="Article 3 banner"/>
                  </a>
                </div>
                <div className="db mb3 mb5-ns tl">
                  <a href="https://theturnsignalblog.com" className="tl f5 b inria black no-underline">Designing A New UX Concept to Reduce Driver Distraction ⟶</a>
                </div>
              </div>
            </div>
          </div>
          <div className="cf pv4">
            <p className="tc f4 inria mb4">Some cool people like what I write</p>
            <div className="w-30-ns center-ns">
              <div className="cf w-100 mb5 inline-flex center">
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