import * as React from "react"

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
        <main>
            <AccessibilityResources />
            <ColorResources />
            <DesignResources />
            <FontsResources />
            <ImgResources />
            <InspirationResources />
            <LearningResources />
            <MiscResources />
            <ToolingResources />
            
        </main>
    )
}

export default ResourceContainer