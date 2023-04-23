import React from 'react'
import { Container , SubContainer , Header} from'../../styles/general'
import { Paragraph } from '../../styles/intro'
function Product() {
    const BACKGROUND = "https://pitch-assets.imgix.net/496bd61c-7cf0-474c-bb92-159fc749b2a9?pitch-bytes=12634420&pitch-content-type=image%2Fjpeg&w=666&h=375&fit=max&auto=format&q=60&frame=1"
    const PARAGRAPHS = [
        `
        SEQSY is a permissionless shared sequencer network built on GNOSIS chain & modified OP Stack & BLS signatures.
        `,
        `
        SEQSY sequencers provides a secure and scalable network for developers of rollups to scale their solutions across chains. It allows anybody to stake to become a sequencer, with on-chain randomness to determine the next block processor. With its permissionless nature, sequencers can submit L2 blocks and approvals to a Data Stream contract, which is validated off-chain using aggregated BLS signatures.
        `,
        `
        By combining the decentralized nature of GNOSIS chain and a shared network of sequencers, rollups and rollapps can now maintain sovereignty, achieve composability, and resist censorship. At the same time, it continues to provide the fast block confirmations and reduced costs of centralized sequencers.
        `
    ]

    let paragraphs = PARAGRAPHS.map((paragraph, index) => {
        return (
            <Paragraph key = {index} >
                {paragraph}
            </Paragraph>
        )
    }) 
  return (
    <Container fixed background = {BACKGROUND} >
        <Header>
                Product
        </Header>
        <SubContainer width={'50%'}>
            <Container>
                {paragraphs}
            </Container>
        </SubContainer>
    </Container>
  )
}

export default Product