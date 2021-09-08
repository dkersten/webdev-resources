import React from "react"
import styled from "styled-components"
import '../components/wrapper.css'

const Header = () => {
    return ( 
        <HeaderEl>
            <div className="wrapper">
                <h1>Web Dev Resources</h1>
                <p>A collection of various tools, resources, articles, and documentation I've come across while developing that I've found helpful and/or incorporated into my workflow.</p>
        </div>
        </HeaderEl>
    )
}

const HeaderEl = styled.header`
    text-align: center;
    background: rgba(75, 144, 226, 1);
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0,0,0,.4);
    line-height: 1.6;

    .wrapper {
        max-width: 800px;
    }
`

export default Header