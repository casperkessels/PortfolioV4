import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/tachyons.css"

import Hello from "../components/hello"
import photography from "../../content/images/photography.png"
import turnsignal from "../../content/images/turnsignal.png"
import cardesignhistory from "../../content/images/cardesignhistory.png"




export default ({ data }) => {

  return (
    <Layout>
      <Helmet>
        <title>Portfolio Casper Kessels</title>
        <meta name="Description" content="My professional portfolio." />
      </Helmet>

      <div className="w-70-ns ph0-ns ph3 mt0 center vh-100">
        <div className="db mt6-ns mt3 mh-auto center" >
          <div className="cf v-mid center">
            <Hello />
            <p className="lh-copy mt3 f4-ns f5 nord0">I am Casper, a designer based in <s>Amsterdam</s> <s>Paris</s> Berlin. I am currently a product designer at <a href="https://aircall.io" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">Aircall</a>. In my spare time I write on my <a href="https://theturnsignalblog.com" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">blog</a> and work on side projects.</p>
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
          <p>Here is my latest professional work</p>
          <p><span role="img" aria-label="point down">👇</span></p>
          <div className="verticalLine tc center mb0">
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="cf w-100 mv4">
        <div className="w-70-l w-90-m ph0-ns ph2 center">
          <ul className="list db v-top ph0 ml0">
            {data.allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.status === "published" && node.frontmatter.category === "work") {
                return (
                  <li key={node.id} className="dib w-100 center mt3" >
                    <Link
                      to={node.fields.slug}
                      className="no-underline nord0 "
                    >
                      <div class="flex flex-column flex-row-ns bg_nord6 br2 overflow-hidden grow">
                        <div class="w-100 w-50-ns overflow-hidden relative h5">
                          <img className="h-100 w-auto object-fit-cover" src={node.frontmatter.thumbnail.publicURL} alt="" />
                        </div>
                        <div class="w-100 w-50-ns ph4 pv5 flex flex-column justify-center">
                          <h2 className="lh-title mb0 mt0 f4">{node.frontmatter.title}</h2>
                          <p className="lh-title mb0 mt2 f6-ns f7 ">{node.frontmatter.subtitle}</p>
                          <p className="lh-title mb0 mt2 f7 pv2 dib">{node.frontmatter.date} | {node.frontmatter.company}</p>
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

          <div className="tc w-100 nord3 center mv4 ">
            <div className="verticalLine tc center mb0">
              <br />
              <br />
            </div>
            <p className="pv4 mb0">I am also always working on side projects</p>
            <div className="verticalLine tc center mb0">
              <br />
              <br />
            </div>
          </div>

          <div className="db v-top ph0 ml0 mt6 flex flex-column flex-row-ns">
            <div className="w-third-ns w-100center grow mr0 mr3-ns mb3 mb0-ns" >
              <a href="https://theturnsignalblog.com" target="_blank" rel="noopener noreferrer" className="no-underline nord0">
                <div className="relative" >
                  <div className=" overflow-hidden">
                    <img className="br2 h4-5 w-100 object-fit-cover mb0" src={turnsignal} alt="The Turn Signal" />
                  </div>
                  <div className="pb3">
                    <h2 className="lh-title mb0 f4 f5-ns mt2 nord0">The Turn Signal Blog</h2>
                    <p className="lh-copy mb0 mt2 f6-ns f7 ">My blog about automotive UX design</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-third-ns w-100center grow mr0 mr3-ns mb3 mb0-ns" >
              <a href="https://cardesignhistory.com" target="_blank" rel="noopener noreferrer" className="no-underline nord0">
                <div className="relative" >
                  <div className="br2 overflow-hidden ">
                    <img className="h4-5 w-100 br2 object-fit-cover mb0" src={cardesignhistory} alt="Car Design History" />
                  </div>
                  <div className="pb3">
                    <h2 className="lh-title mb0 f4 f5-ns mt2 nord0">Car Design History</h2>
                    <p className="lh-copy mb0 mt2 f6-ns f7 ">A data visualization showing the evolution of car design</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-third-ns w-100 center grow" >
              <Link
                to={`/photography/`}
                className="no-underline nord0"
              >
                <div className="relative" >
                  <div className="br2 overflow-hidden ">
                    <img className="h4-5 w-100 br2 object-fit-cover mb0" src={photography} alt="photography" />
                  </div>
                  <div className="pb3">
                    <h2 className="lh-title mb0 f4 f5-ns mt2 nord0">Photography</h2>
                    <p className="lh-copy mb0 mt2 f6-ns f7 ">I like to travel and take pictures</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>

        </div>
      </div>

      <div className="w-100 center h-auto mb6">

        <div className="w-70-l w-90-m center ph0-ns ph2 center">

          <div className="tc w-100 nord3 center mv5 ">
            <div className="verticalLine tc center mb0">
              <br />
              <br />
            </div>
            <p className="pv4 mb0">I like to write about interesting topics, here are my recent articles:</p>
            <div className="verticalLine tc center mb0">
              <br />
              <br />
            </div>
          </div>


          <div>

          </div>
          <table class="nord3" cellspacing="0" cellpadding="0">
          <tr class="">
              <td class="pv1 pr1 bn">May, 2021</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/ehmi/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">The eHMI: How Autonomous Cars Will Communicate With the Outside World</a></td>
            </tr>
            <tr class="">
              <td class="pv1 pr1 bn">March, 2021</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/touch-screens/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">The Rise of Touch Screens in Cars Explained</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">January, 2021</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/take-over-moment/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">Take-Over Moments: The Hardest Design Problem of Semi-Autonomous Cars</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">November, 2020</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/mercedes-lucid-ui/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">Mercedes vs Lucid: Different Views on Luxury UI Design</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">October, 2020</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/ami-and-future-of-transportation/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">The Citroën Ami and the Future of Urban Transportation</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn nord3">July, 2020</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/chinese-cars/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">The State of UX Design of Chinese Car Brands</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">May, 2020</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/behind-touch-concept/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">The Process Behind the Touch Interaction Concept</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">April, 2020</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/new-touch-concept/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">A New Concept for Usable Touch Interaction in Cars</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">February, 2020</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/waymo-design/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">How Waymo Uses Design to Create Trust in Driverless Cars</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">November, 2019</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/porsche-taycan/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">An in-depth look at the UX Design of the Porsche Taycan</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">September, 2019</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/carrerapanamericana/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">Bringing the Coolest Car of the Carrera Panamericana to Life</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">June, 2019</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/gesture-interaction/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">Designing A New UX Concept to Reduce Driver Distraction</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">May, 2019</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/overconsumption/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">Overcoming Automotive Overconsumption Through Design</a></td>
            </tr>
            <tr>
              <td class="pv1 pr1 bn">April, 2019</td>
              <td class="pv1 pl1 bn"><a href="https://www.theturnsignalblog.com/blog/interaction-design/" target="_blank" rel="noopener noreferrer" className="bb bw1 nord0 no-underline hover-nord9">Why Car Companies Need More Interaction Designers</a></td>
            </tr>
          </table>
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
            company
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