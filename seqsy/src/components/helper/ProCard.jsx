import React from 'react'
import { Container } from '../styles/general'
import { ProHeader, ProBody } from '../styles/pros'

function ProCard({ pro }) {

  return (
    <Container noPadding>
        <ProHeader>
            {pro.title}
        </ProHeader>
        <ProBody>
            {pro.description}
        </ProBody>
    </Container>
  )
}

export default ProCard