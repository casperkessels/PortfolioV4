import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => (

  <Layout>
    <section className="cf w-50-ns ph4-ns ph3 mt6 pv4 center v-top">
      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 nord9">1994</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3 v-top">I'm born!</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 nord9">2012</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3 ">I graduate from my high school in Belgium</p>
          <p className="bl pl3">I start my bachelor’s degree in Creative Technology at the University of Twente. I will learn how to take an idea from brainstorm to prototype and create a business model around it</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 nord9">2014</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">I spend a semester abroad in Sweden to follow courses in computer science 🇸🇪</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 nord9">2016</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">I finish my bachelor's degree</p>
          <p className="bl pl3">I start my master's degree in Human-Computer Interaction and Design at the EIT Digital Master School. This is a program that combines a technical degree from two different universities with courses and a summer school on business & entrepreneurship. My first year is at the University of Twente</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 nord9">2017</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">Summer school in Trento on cybersecurity & privacy 🇮🇹</p>
          <p className="bl pl3">I move to Paris for the second year of my master program at the Université Paris-Saclay 🇫🇷</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 nord9">2018</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">6-month internship at the design department of Groupe Renault. I worked on the UX design of the next-generation infotainment system and executed my own project.</p>
          <p className="bl pl3">I obtain my master's degree with honors from EIT Digital</p>
        </div>
      </div>

      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 nord9">2019</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">I start Open eSBK with some friends</p>
          <p className="bl pl3">I start my blog and write articles about the intersection of cars, design, and technology</p>
          <p className="bl pl3">I move to Amsterdam and start as Interaction Designer at Mirabeau 🇳🇱</p>
        </div>
      </div>
      <div className="cf flex flex-column flex-row-ns mb4">
        <div className="fl w-30-ns pa2 v-top h-25">
          <div className="v-top tr-ns mr3">
            <h2 className="inria f4 nord9">2020</h2>
          </div>
        </div>
        <div className="fl w-70-ns pa2">
          <p className="bl pl3">I move back to Paris and start as a UX/UI Designer at Goodpatch where I work on automotive projects 🇫🇷</p>
        </div>
      </div>
    </section>

    <section className="cf bg_nord0 pv4 ph4-ns ph3">
      <div className="cf w-60-ns center">
        <div className="inria f4 nord6 tc mb6">
          <p>In my spare time, I like to run, travel, and take photos. Here are some of my latest pictures.</p>
          <p>You can find more of my pictures on my <a href="https://www.flickr.com/photos/182446581@N04/" target="_blank">Flickr</a></p>

        </div>

         <div className="cf db">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/49426522197_ece492c903_k.jpg"/>
        </div>

        <div className="cf db">
          <div className="dib w-50-ns pt2 pb2 pr2-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/49426298606_dc46fe682e_k.jpg"/>
          </div>
          <div className="dib pt2-ns pb2 pl2-ns w-50-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/49426521522_d5563d59f7_k.jpg"/>
          </div>
        </div>

        <div className="cf db">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/49426300171_6da4eba43e_k.jpg"/>
        </div>

        <div className="cf db">
          <div className="dib w-50-ns pt2 pb2 pr2-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/49426297926_c888864cba_k.jpg"/>
          </div>
          <div className="dib pt2-ns pb2 pl2-ns w-50-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/49426298951_f3848bff30_k.jpg"/>
          </div>
        </div>

        <div className="cf db">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/48210941356_a15293d155_k.jpg"/>
        </div>

        <div className="cf db">
          <div className="dib w-50-ns pt2 pb2 pr2-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48198968296_c1ca709012_h.jpg"/>
          </div>
          <div className="dib pt2-ns pb2 pl2-ns w-50-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48198960726_0752ed6b67_k.jpg"/>
          </div>
        </div>

        <div className="cf db">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/48210937991_311e612b01_h.jpg"/>
        </div>

        <div className="cf db">
          <div className="dib w-50-ns pt2 pb2 pr2-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48210948791_98556817a7_k.jpg"/>
          </div>
          <div className="dib pt2-ns pb2 pl2-ns w-50-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48199010917_b4a4b0ecef_k.jpg"/>
          </div>
        </div>

        <div className="cf db">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/48198959991_86d71c0678_k.jpg"/>
        </div>

        <div className="cf db">
          <div className="dib w-50-ns pt2 pb2 pr2-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48210947806_d1ea22c42e_k.jpg"/>
          </div>
          <div className="dib pt2-ns pb2 pl2-ns w-50-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48210946101_316d2988a4_k.jpg"/>
          </div>
        </div>

        <div className="cf db">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/48210990507_a72e59e032_k.jpg"/>
        </div>

        <div className="cf db">
          <div className="dib w-50-ns pt2 pb2 pr2-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48210991317_5743d38dd5_k.jpg"/>
          </div>
          <div className="dib pt2-ns pb2 pl2-ns w-50-ns">
            <img className="w-100-ns" src="https://live.staticflickr.com/65535/48198960326_fc6ba2977a_k.jpg"/>
          </div>
        </div>

        <div className="cf db mb6">
          <img className="w-100-ns center" src="https://live.staticflickr.com/65535/48199000637_6fee665594_k.jpg"/>
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