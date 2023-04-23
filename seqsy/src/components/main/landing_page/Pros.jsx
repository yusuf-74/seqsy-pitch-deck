import React from 'react'
import { Container, Header } from '../../styles/general'
import ProCard from '../../helper/ProCard'

function Pros() {

    const PROS = [
        {
            title: "Decentralized",
            description: "Leveraging the Gnosis network, our permissionless platform allows for anyone to be a sequencer.",
        },
        {
            title: "Verifiable and Secure",
            description: "Combats sybil attacks and bribing as it allows restaking with the Gnosis validator set for security. Verifiable randomness ensures true randomness in sequencers.",
        },
        {
            title: "Composability",
            description: "With atomic bundle inclusion, apps such as DeFi protocols can ensure their transactions on one rollup depend on an action on another rollup. ",
        },
        {
            title: "Interoperable & Flexible",
            description: "Changes on one rollup or sequencing logic can be applied to multiple chains simultaneously, enabling faster iteration and new use cases.",
        },
        {
            title: "Open source and censorship resistant",
            description: "Rollups no longer depend on individual sequencers that have complete control of ordering. It aligns sequencers with the decentralized nature of chains like Gnosis.",
        },
        {
            title: "Cost-effective",
            description: "Resources can be spread across multiple users & chains, leading to lower transaction fees for users and reduced barriers of entries for new projects.",
        },
    ]

    let pros = PROS.map((pro, index) => {
        return (
            <ProCard pro={pro} key={index} />
        )
    }) 

    return (
        <Container>
            <Header color="black">
                Pros
            </Header>
            <Container>
                {pros}
            </Container>
        </Container>
    )
}

export default Pros