import React from 'react'
import { TeamImage , MemberName , MemberRole , TeamContent} from '../styles/team'
function TeamCard({member}) {
   
  return (
    <TeamContent>
        <MemberName>
            {member.name}
        </MemberName>
        <MemberRole>
            {member.role}
        </MemberRole>
        <MemberRole>
            {member.company}
        </MemberRole>
        <TeamImage src={member.sticker} />
    </TeamContent>
  )
}

export default TeamCard