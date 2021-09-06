import React from "react"
import styled from "styled-components"

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
    background: linear-gradient(to bottom right, rgba(75, 144, 226, .4), rgba(91, 236, 203, .4));
    color: #2f2f2f;
    text-shadow: 1px 1px 3px rgba(255,255,255,.8);
    line-height: 1.6;
`

export default Header