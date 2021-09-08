import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ResourceCard from "./ResourceCard"

const DesignResources = () => {

    const data = useStaticQuery(graphql`
        query {
            allResourcesYaml(
                filter: {category: {eq: "design"}}
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
        <SectionEl id="design" class="resource-section">
            <div className="wrapper">
                <h2>Design</h2>

                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </div>
        </SectionEl>
    )

}

const SectionEl = styled.section`

    .flex-container {
        display: flex;
        flex-wrap: wrap;
        @media only screen and (max-width: 779px) {
            justify-content: center;
        }
    }

    h2 {
        margin-bottom: 2rem;
        color: #1d1d1f;
        font-size: 36px;

        @media only screen and (max-width: 779px) {
            text-align: center;
            margin-bottom: 2.5rem;
        }
    }
`

export default DesignResources