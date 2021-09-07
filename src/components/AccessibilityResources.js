import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ResourceCard from "./ResourceCard"

const AccessibilityResources = () => {

    const data = useStaticQuery(graphql`
        query {
            allResourcesYaml(filter: {category: {eq: "accessibility"}}) {
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
        <SectionEl id="accessibility">
            <h2>Accessibility</h2>

            <div className="flex-container">
            {
                resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
            }
            </div>
        </SectionEl>
    )

}

const SectionEl = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export default AccessibilityResources