import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <section className="cf w-50-ns ph4-ns ph3 pv4 center v-top">
      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 light-silver">1994</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3 v-top">I'm born!</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 light-silver">2012</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3 ">I finish my high school in Belgium and start my bachelor’s degree in creative technology</p>
          <p className="bl pl3">I start my bachelor’s degree in Creative Technology at the University of Twente. This focuses on computer science, design, and business.</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 light-silver">2014</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">I spend a semester abroad in Sweden to follow courses on computer science 🇸🇪</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 light-silver">2016</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">I finish my bachelor's degree</p>
          <p className="bl pl3">I start master's in Human Computer Interaction and Design at EIT Digital.</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 light-silver">2017</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">Summer school in Trento on cybersecurity & privacy 🇮🇹</p>
          <p className="bl pl3">Move to Paris for second year of master’s 🇫🇷</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 light-silver">2018</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">Complete internship at the design department of Groupe Renault</p>
          <p className="bl pl3">Obtain my master's degree with honours</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 light-silver">2019</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">I start Open eSBK with some friends</p>
          <p className="bl pl3">I start writing articles on my blog</p>
          <p className="bl pl3">I move to Amsterdam and start as interaction designer at Mirabeau 🇳🇱</p>
        </div>
      </div>
    </section>

    <section className="cf bg-lighter-blue pv4 ph4-ns ph3">
      <div className="cf w-60-ns center">
        <div className="inria f4 tc mb6">
          <p>In my spare time, I like to run, travel, and take photos. Here are some of my latest pictures</p>
        </div>

        <div className="cf db grow ">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/48210941356_a15293d155_k.jpg"/>
        </div>

        <div className="cf db">
          <div className="dib w-50-ns pt2 pb2 pr2-ns grow">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48198968296_c1ca709012_h.jpg"/>
          </div>
          <div className="dib pt2-ns pb2 pl2-ns w-50-ns grow">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48198960726_0752ed6b67_k.jpg"/>
          </div>
        </div>

        <div className="cf db grow">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/48210937991_311e612b01_h.jpg"/>
        </div>

        <div className="cf db">
          <div className="dib w-50-ns pt2 pb2 pr2-ns grow">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48210948791_98556817a7_k.jpg"/>
          </div>
          <div className="dib pt2-ns pb2 pl2-ns w-50-ns grow">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48199010917_b4a4b0ecef_k.jpg"/>
          </div>
        </div>

        <div className="cf db grow mb6">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/48210990507_a72e59e032_k.jpg"/>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`