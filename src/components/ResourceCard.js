import React from "react"
import styled from "styled-components"

const ResourceCard = (props) => {
    return ( 
        <ResourceCardEl>
            <div className="initials-container">
                <span>{props.abbreviation}</span>
            </div>
            <div className="info-container">
                <h2><a aria-label={props.name + ' (opens in a new tab'} target="_blank" href={props.url}>{props.name}</a></h2>
                <p>{props.description}</p>
            </div>
        </ResourceCardEl>
    )
}

const ResourceCardEl = styled.div`
    margin: 0 1.5rem 3rem 0;
    width: 350px;
    position: relative;

    .initials-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 30px;
        
        span {
            font-size: 30px;
            font-weight: 700;
            display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: -webkit-linear-gradient(#4b90e2, #5beccb);
            color: #fff;
            text-shadow: 1px 1px rgba(0,0,0,.2);
        }
    }

    h2 {
        font-size: 22px;
        margin-bottom: 10px;

        a {
            text-decoration: none;
            color: #2375d7;
        }
    }

    p {
        font-size: 14px;
        color: rgba(26,27,28,.6);
        line-height: 1.5;
    }
`

export default ResourceCard