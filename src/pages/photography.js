import React from "react"
import { graphql } from "gatsby"
import Backbutton from "../components/backbutton"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import alps1 from "../../content/photography/alps.jpg"
import alps2 from "../../content/photography/alps2.jpg"
import brazil1 from "../../content/photography/brazil.jpg"
import brazil2 from "../../content/photography/brazil2.jpg"
import brazil3 from "../../content/photography/brazil3.jpg"
import cow from "../../content/photography/cow.jpg"
import marseille from "../../content/photography/marseille.jpg"
import paris1 from "../../content/photography/paris1.jpg"
import peugeot from "../../content/photography/peugeot.jpg"
import prague from "../../content/photography/prague.jpg"


const settings = {
  dots: false,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default ({ data }) => (

  <div className="vh-100-ns nord0 pa5-l pa3 cf overflow-hidden">

    <div className="absolute">
      <div className="fl pa0-l dib">
        <Backbutton />
      </div>

      <div className="dib">
        <p className="dib ph2 mb0">|</p>
        <p className="dib fw7 mb0">Photography</p>
      </div>
    </div>

    <div className= "db h-100 flex-ns items-end-l items-center-m justify-center flex-column-reverse-m">
        <div className="w-100 w-25-l w-80-m self-end-l pr3-l mt0-ns mv0-ns mv5">
          <p className="f5 mb1 mt3-m">Check out my Flickr or Instagram for more</p>
          <a href="https://www.flickr.com/photos/182446581@N04/" target="_blank" rel="noopener noreferrer">
            <p className="link hover-nord9 dib pr2 nord3 f8 mb0">FLICKR</p>
          </a>
          <p className="dib nord3 f8 mb0">·</p>
          <a href="https://www.instagram.com/theturnsignal/" target="_blank" rel="noopener noreferrer">
            <p className="link hover-nord9 dib ph2 nord3 f8 mb0">INSTAGRAM</p>
          </a>
        </div>

        <div className="w-100 w-80-ns justify-center cf overflow-hidden db-ns dn">
          <Slider {...settings} className="v-mid">
            <img className="mb0" src={peugeot} alt="Peugeot 404"/>
            <img className="mb0" src={marseille} alt="Marseille Architecture"/>
            <img className="mb0" src={paris1} alt="Paris Architecture"/>
            <img className="mb0" src={prague} alt="Prague Architecture"/>
            <img className="mb0" src={alps1} alt="French Alps"/>
            <img className="mb0" src={alps2} alt="French Alps"/>
            <img className="mb0" src={brazil1} alt="Brazil"/>
            <img className="mb0" src={brazil2} alt="Brazil"/>
            <img className="mb0" src={brazil3} alt="Brazil"/>
            <img className="mb0" src={cow} alt="Nature"/>
          </Slider>
        </div>

        <div className="dn-ns db ">
          <img className="" src={peugeot} alt="Peugeot 404"/>
          <img className="" src={marseille} alt="Marseille Architecture"/>
          <img className="" src={paris1} alt="Paris Architecture"/>
          <img className="" src={prague} alt="Prague Architecture"/>
          <img className="" src={alps1} alt="French Alps"/>
          <img className="" src={alps2} alt="French Alps"/>
          <img className="" src={brazil1} alt="Brazil"/>
          <img className="" src={brazil2} alt="Brazil"/>
          <img className="" src={brazil3} alt="Brazil"/>
          <img className="" src={cow} alt="Nature"/>
        </div>
    </div>
  </div>
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