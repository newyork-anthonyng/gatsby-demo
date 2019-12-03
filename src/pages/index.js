import React from "react"
import Header from '../components/header';
import { Link } from 'gatsby'

export default () => (
  <div>
    <Link to="/contact/">Contact</Link>
    <Link to="/about-css-modules/">CSS Modules</Link>
    <Header headerText="Home" />
    Hello Gatsby!!
  </div>
)
