import React from 'react'
import { Container, Header, SubContainer } from '../../styles/general'
import { Paragraph, BulletPoint ,BulletPointContainer } from '../../styles/intro'

function Introduction() {

    const PARAGRAPHS = [
        `
        Rollups have emerged as a promising approach to address the limitations of on-chain transaction throughput, latency, and cost. 
        In rollups, sequencers are responsible for ordering and processing transactions submitted by users, and ensuring the correct execution of smart contracts. It acts as a bridge between the layer 1 and layer 2 chains, helping to achieve higher scalability and efficiency for the rollup network.
        Sequencers on Ethereum are still centralized, which introduces potential risks and challenges such as single points of failure, censorship, and lack of transparency. This undermines the benefits of using a decentralized network. 
        `
        ,
        `
        By distributing the responsibility of transaction sequencing among multiple participants, a decentralized shared sequencer can mitigate the risks associated with centralized sequencers and enhance transparency and trust. Shared sequencers hold the potential to unlock the full benefits of rollups, combining the scalability and efficiency of off-chain processing with the trustless, decentralized nature of blockchain technology, contributing to the development of more robust, secure, and user-friendly DeFi applications.
        `
    ]
    const BULLETPOINTS = [
        'Decentralized',
        'Neutrality',
        'Security',
        'Interoperability',
    ]

    let paragraphs = PARAGRAPHS.map((paragraph, index) => {
        return (
            <Paragraph key={index}>
                {paragraph}
            </Paragraph>
        )
    })
    let points = BULLETPOINTS.map((point, index) => {
        return (
            <BulletPoint key={index}>
                {index+1} -- {point}
            </BulletPoint>
        )    
    })
    return (
        <Container fixed background={"https://pitch-assets.imgix.net/fe43e39e-a5ff-4a3a-91d4-444c2efbe345?pitch-bytes=41445295&pitch-content-type=image%2Fpng&w=666&h=374&fit=max&auto=format&q=60&frame=1"}>
            <Header margin = {"24px 0"} >Introduction</Header>
            <SubContainer>
                <Container width = {"60%"} noPadding>
                    {paragraphs}
                </Container>
                <BulletPointContainer width = {"30%"}>
                    {points}
                </BulletPointContainer>
            </SubContainer>
        </Container>
    )
}

export default Introduction