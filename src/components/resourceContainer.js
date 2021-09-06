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

    console.log(resources)

    return (
        <ResourceContainerDiv className="wrapper">
            {
                resources.map((resource, index) => <ResourceCard key={index} {...resource} />)
               }


            {/* <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard /> */}
        </ResourceContainerDiv>
    )
}

const ResourceContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default ResourceContainer