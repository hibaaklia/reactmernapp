import React, { Component } from 'react'
import styled from 'styled-components'

export default class Footer extends Component {
    render() {
        return (
            
                <FooterContainer >
          
      <div className="container bg-dark " >
        <span className="text-muted">@Copyright.</span>
      </div>
    
      </FooterContainer>
        )
    }
}

const FooterContainer=styled.div`
.container{
margin-top: 13px;
height:30px
}

`