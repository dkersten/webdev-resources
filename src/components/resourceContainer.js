import * as React from "react"
import styled from "styled-components"
// import { graphql, useStaticQuery } from "gatsby"

import AccessibilityResources from "./AccessibilityResources"
import ColorResources from "./ColorResources"
import DesignResources from "./DesignResources"
import FontsResources from "./FontResources"
import ImgResources from "./ImgResources"
import InspirationResources from "./InspirationResources"
import LearningResources from "./LearningResources"
import MiscResources from "./MiscResources"
import ToolingResources from "./ToolingResources"

const ResourceContainer = () => {

    return (
        <ResourceContainerDiv>
            <AccessibilityResources />
            <ColorResources />
            <DesignResources />
            <FontsResources />
            <ImgResources />
            <InspirationResources />
            <LearningResources />
            <MiscResources />
            <ToolingResources />
            
        </ResourceContainerDiv>
    )
}

const ResourceContainerDiv = styled.main`
    /* justify-content: center; */
`

export default ResourceContainer