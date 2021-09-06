import * as React from "react"
import styled from "styled-components"

import ResourceCard from "./ResourceCard"

const ResourceContainer = () => {

    return (
        <ResourceContainerDiv className="wrapper">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
        </ResourceContainerDiv>
    )
}

const ResourceContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default ResourceContainer