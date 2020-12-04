import React from "react"
import "../styles/tachyons.css"


const Tags = ({ children }) =>
  children && (
    <ul className="mb0 ml0 list flex flex-wrap">
      {children.toString().split(", ").map(t => (
        <li
          className="bg_nord6 mr2 mt2 nord1 list lh-copy f7 mb0 opensans fw5 pv0 ph1 ph2-ns pv05-ns"
          key={t}
          style={{ }}

        >
          {t}
        </li>
      ))}
    </ul>
  )

export default Tags
