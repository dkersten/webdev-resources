import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ResourceCard from "./ResourceCard"

const FontsResources = () => {

    const data = useStaticQuery(graphql`
        query {
            allResourcesYaml(
                filter: {category: {eq: "fonts"}}
                sort: {order: ASC, fields: name}
              ) {
                nodes {
                  category
                  description
                  name
                  id
                  url
                  abbreviation
                }
              }
        }
    `)

    const resources = data.allResourcesYaml.nodes

    return (
        <section id="fonts" className="resource-section">
            <div className="wrapper">
                <h2>Fonts</h2>

                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </div>
        </section>
    )

}

export default FontsResources