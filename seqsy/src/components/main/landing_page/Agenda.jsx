import React from 'react'
import { AgendaContainer , AgendaContent , AgendaImage,AgendaSubContainer,AgendaHeader } from '../../styles/agenda'

function Agenda() {
    const BACKGROUND = "https://pitch-assets.imgix.net/7f2ec598-eca4-42b6-8565-bc296c66af9c?pitch-bytes=19788543&pitch-content-type=image%2Fpng&w=666&h=374&fit=max&auto=format&q=60&frame=1"
    const STICKER = "https://pitch-assets.imgix.net/d17acaad-9030-401c-ab62-b093580ed64f"
    const AGENDAPOINTS = ["Introduction", "Problem","Product","Technical Architecture","Roadmap"]

    let agenda = AGENDAPOINTS.map((point ,index) => {
        return (
            <div key = {index}>
                {index+1} -- {point}
            </div>
        )
    })
    return (
        <>
            <AgendaContainer background={BACKGROUND}>
                <AgendaHeader>
                    Agenda
                </AgendaHeader>
                <AgendaSubContainer>
                    <AgendaContent>
                        {agenda}
                    </AgendaContent>
                    <AgendaImage src={STICKER} />
                </AgendaSubContainer>                
            </AgendaContainer>
        </>
    )
}

export default Agenda