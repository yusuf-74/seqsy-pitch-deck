import React from 'react'
import { Container, Header } from '../../styles/general'
function RoadMap() {
  const BACKGROUND ="https://pitch-assets.imgix.net/8f647d6e-28c4-4776-8b12-4a69bb8e4b17?pitch-bytes=52472667&pitch-content-type=image%2Fpng&w=666&h=374&fit=max&auto=format&q=60&frame=1"
  const ROADMAP = require('../../../assets/road-map.png')
  return (
    <Container fixed background={BACKGROUND}>
      <Header>
        Product Roadmap
      </Header>
      <Container noPadding>
        <img src={ROADMAP} alt="roadmap" />
      </Container>
    </Container>
  )
}

export default RoadMap