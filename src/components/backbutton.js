import React from "react"
import { Link } from "gatsby"

import "../styles/tachyons.css"


const Backbutton = () =>
     <Link className="hover-nord9 nord3 no-underline" to={`/`}>
        <div className="v-mid">← BACK</div>
      </Link>

export default Backbutton
