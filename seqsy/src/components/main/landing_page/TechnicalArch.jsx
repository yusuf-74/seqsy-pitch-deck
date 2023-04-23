import React from 'react'
import { Container , SubContainer , Header} from'../../styles/general'
import { ImageWrapper ,Image } from '../../styles/general'


export default function TechnicalArch() {

    const DIAGRAM = "https://pitch-assets.imgix.net/9a9d4dae-1db5-4726-85e3-41a6754f2397?pitch-bytes=46670&pitch-content-type=image%2Fpng&w=2140&h=1868&fit=max&auto=format&q=100"

    return (
    <Container>
        <Header color = "black">
            Technical Architecture
        </Header>
        <SubContainer justifyContent={'space-around'}>
            <ImageWrapper>
                <Image src = {DIAGRAM} />
            </ImageWrapper>
        </SubContainer>
    </Container>
  )
}
