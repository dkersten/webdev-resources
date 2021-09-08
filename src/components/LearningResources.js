import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ResourceCard from "./ResourceCard"

const LearningResources = () => {

    const data = useStaticQuery(graphql`
        query {
            allResourcesYaml(filter: {category: {eq: "learning"}}) {
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
        <section id="learning" className="resource-section">
            <div className="wrapper">
                <h2>Learning</h2>

                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </div>
        </section>
    )

}

export default LearningResources