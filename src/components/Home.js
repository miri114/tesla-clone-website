import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Albanian audience"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />

        <Section 
            title="Model Y"
            description="Order Online for Albanian audience"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />

        <Section 
            title="Model 3"
            description="Order Online for Albanian audience"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />

        <Section 
            title="Model X"
            description="Order Online for Albanian audience"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />

        <Section 
            title="Lowest Cost Solar Panels in Albania"
            description="Money Back garantie"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />

        <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />

        <Section 
            title="Accesories"
            description="Something to keep going"
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`