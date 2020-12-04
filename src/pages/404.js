import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/tachyons.css"
import peugeot from "../../content/images/Peugeot404.jpg"
import Backbutton from "../components/backbutton"



export default ({ data }) => {
  return (
    <Layout>
        <section className="center tc">
        	<div className="pv4">
        		<Backbutton />
        	</div>
        	<img className="" src={peugeot} alt="404"/>
        </section>
    </Layout>
  )
}
