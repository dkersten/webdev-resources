import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ResourceCard from "./ResourceCard"

const MiscResources = () => {

    const data = useStaticQuery(graphql`
        query {
            allResourcesYaml(
                filter: {category: {eq: "misc"}}
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
        <section id="misc" className="resource-section">
            <div className="wrapper">
                <h2>Miscellaneous</h2>

                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </div>
        </section>
    )

}

export default MiscResources