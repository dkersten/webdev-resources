import React from "react"

const ResourceCard = (props) => {
    return ( 
        <div className="resource-card">
            <div className="initials-container">
                <span>{props.abbreviation}</span>
            </div>
            <div className="info-container">
                <h3><a aria-label={props.name + ' (opens in a new tab'} target="_blank" href={props.url}>{props.name}</a></h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ResourceCard