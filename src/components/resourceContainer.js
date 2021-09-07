import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ResourceCard from "./ResourceCard"

const ResourceContainer = () => {

    const data = useStaticQuery(graphql`
        query {
            allResourcesYaml(sort: {fields: category}) {
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
        <ResourceContainerDiv className="wrapper">
            {
                resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
               }
        </ResourceContainerDiv>
    )
}

const ResourceContainerDiv = styled.main`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
`

export default ResourceContainer