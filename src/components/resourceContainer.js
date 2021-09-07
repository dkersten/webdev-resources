import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import AccessibilityResources from "./AccessibilityResources"

const ResourceContainer = () => {

    const data = useStaticQuery(graphql`
        query {
            allResourcesYaml {
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
            <AccessibilityResources />

            {/* <section id="accessibility">
                <h2>Accessibility</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section>
            <section id="color">
                <h2>Color</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section>
            <section id="design">
                <h2>Design</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section>
            <section id="fonts">
                <h2>Fonts</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section>
            <section>
                <h2>Images</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section>
            <section>
                <h2>Inspiration</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section>
            <section>
                <h2>Learning</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section>
            <section>
                <h2>Miscellaneous</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section>
            <section>
                <h2>Tooling</h2>
                <div className="flex-container">
                {
                    resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)
                }
                </div>
            </section> */}
        </ResourceContainerDiv>
    )
}

const ResourceContainerDiv = styled.main`

    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    /* justify-content: center; */
`

export default ResourceContainer