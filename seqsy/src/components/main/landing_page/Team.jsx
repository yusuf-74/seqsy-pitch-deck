import React from 'react'
import TeamCard from '../../helper/TeamCard'
import { TeamContainer ,TeamSubContainer , TeamHeader } from '../../styles/team'
function Team() {
    const BACKGROUND = "https://pitch-assets.imgix.net/dd37a151-f0f7-40b1-b4a6-c210c9b94692?pitch-bytes=8692252&pitch-content-type=image%2Fpng&w=666&h=374&fit=max&auto=format&q=60&frame=1"
    const TEAMMEMBERS = [
        {
            name: "Norswap",
            role: "Protocol ",
            company: "Optimism",
            sticker:"https://pitch-assets.imgix.net/0e72993f-ea2e-4580-bbc8-63f763d92baf"
        },
        {
            name: "AFK Byte",
            role: "Protocol",
            company: "Mantle",
            sticker:"https://pitch-assets.imgix.net/42dfaf10-554d-4fc9-b34a-c0c60d2d7ce5"
        },
        {
            name: "Chee",
            role: "Product",
            company: "Nethermind",
            sticker:"https://pitch-assets.imgix.net/89d2ed42-d7f8-4067-ad5c-3299281c0c30"
        },
        {
            name: "Lovdeep",
            role: "Product",
            company: "Bld.ai (Flow, Celo)",
            sticker:"https://pitch-assets.imgix.net/0aa2403b-c70c-470b-92cc-f296a9a4d395"
        }
    ]
    let team = TEAMMEMBERS.map((member,index) => {
        return (
            <TeamCard key={index} member={member} />
        )
    })
  return (
    <TeamContainer fixed background= {BACKGROUND}>
        <TeamHeader>
            Team Members
        </TeamHeader>
        <TeamSubContainer>
            {team}
        </TeamSubContainer>
    </TeamContainer>
  )
}

export default Team