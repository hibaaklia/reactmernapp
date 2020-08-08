import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            
<NavContainer className="navbar navbar-expand-lg navbar-light bg-dark " >
  <Link  className="navbar-brand  text-white ml-2 text-uppercase " to="/">DWM-Enset</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/">Home &nbsp; <i className="fas fa-home"></i> <span className="sr-only">(current)</span> &nbsp;</Link>
      </li>

      <li className="nav-item ">
        <Link className="nav-link text-white text-uppercase ml-5" to="/mock">mock</Link>
      </li>
    </ul>
   
  </div>








</NavContainer> 


        )
    }
}
const NavContainer=styled.div`


padding: 17px;

.navbar-brand {
    font-size:20px
}
`