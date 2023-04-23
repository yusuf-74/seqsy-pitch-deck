import React, { useState } from 'react'
import { Container, SubContainer, Header, SpecialButton } from '../../styles/general'
import { HeaderContainer, SubHeader ,Image,ImageWrapper ,TextWrapper } from '../../styles/problem'
function Problem() {

    const [active, setActive] = useState(0)
    const CONTENT = [
        {
            button: ["Centralization "," Relying on a single trusted actor reduces decentralization."],
            content: {
                text: "Rollups are (still) centralized, which defeats the purpose of a decentralized blockchain and introduces risks to the solutions built on top. Having a single set of entities controlling the sequencing of transactions introduces censorship risks and reduced security. If a single sequencer goes down, the chain halts.",
                sticker: "https://pitch-assets.imgix.net/c0f8b854-67a1-4c92-8f0d-4104600f8b33"
            }
        },
        {
            button: ["Limited Innovation "," Siloed sequencers reduces composability and interoperability."],
            content: {
                text: "Each rollup depends on its own sequencer, which needs cross-sequencer bridges to work with other composable blockchain protocols. Sharing sequencers allows for rollups to operate assets and data across different chains, with changes applied simultaneously. ",
                sticker: "https://pitch-assets.imgix.net/f2a08d79-827f-4932-ba2f-370728bce0cc"
            }
        },
        {
            button: ["Cost "," It is expensive to develop and maintain a shared set of sequencers."],
            content: {
                text: "Centralized sequencers are incentivized to maximize MEV. Building a rollup for another chain and sequencer network is time-consuming and stifles innovation. With a shared network, projects can deploy across multiple rollups instantly and offer their services and earn from a larger audience. By sharing sequencers between multiple roll-ups / roll-apps, atomic cross-chain bundle inclusion becomes possible.",
                sticker: "https://pitch-assets.imgix.net/e4f01dfc-4604-401f-9edf-8b5493045529"
            }
        }
    ]

    let current = CONTENT[active]
    let content = (
        <Container>
            <ImageWrapper>
                <Image src={current.content.sticker} />
            </ImageWrapper>
            <TextWrapper>
                {current.content.text}
            </TextWrapper>
        </Container>
    )

    let buttons = CONTENT.map((item, index) => {
        if (index === active) {
            return (
                <SpecialButton
                    key={index}
                    color={"rgb(104, 75, 255)"}
                    onClick={() => setActive(index)}
                    active
                >
                    {item.button[0]} <br /> {item.button[1]}
                </SpecialButton>
            )
        }
        return (
            <SpecialButton
                key={index}
                color={"rgba(104, 75, 255,0.5)"}
                onClick={() => setActive(index)}
            >
                {item.button[0]} <br /> {item.button[1]}
            </SpecialButton>
        )
    })

    return (
        <Container>
            <HeaderContainer>
                <Header color={"black"} >Problem</Header>
                <SubHeader color={"rgb(104, 75, 255)"}>
                    Rollups depend on a centralized, siloed, and expensive set of sequencers.
                </SubHeader>
            </HeaderContainer>
            <SubContainer minHeight={"400px"}>
                <Container width = {"40%"} justifyContent = {"center"} onSmall>
                    {/* Buttons Section */}
                    {buttons}
                </Container>
                <Container width = {"50%"} noPadding onSmall>
                    {/* Content Section */}
                    {content}
                </Container>
            </SubContainer>
        </Container>
    )
}

export default Problem