import React from 'react'
import { HeaderContainer ,HeaderContent, HeaderImage,HeaderTypewriter } from '../../styles/header'
import Typewriter from 'typewriter-effect';

function Header() {
    const BACKGROUND = "https://pitch-assets.imgix.net/1fc442cf-5521-4068-a6c8-3ccd71cffde0?pitch-bytes=45040728&pitch-content-type=image%2Fjpeg&w=612&h=408&fit=max&auto=format&q=60&frame=1"
    const STIKER = "https://pitch-assets.imgix.net/951e450b-b6b3-48d8-85a6-4646f0f4e84e?pitch-bytes=210144&pitch-content-type=image%2Fpng&w=2081&h=1921&fit=max&auto=format&q=100"
  return (
    <>
        <HeaderContainer background={BACKGROUND} >
            <HeaderImage src = {STIKER} />
            <HeaderContent>
                Seqsy
            </HeaderContent>
            <HeaderTypewriter>
                <Typewriter
                    options={{
                        strings: ["Hola we are SEQSY"],
                        autoStart: true,
                        loop: true,
                            }}
                />
            </HeaderTypewriter>
        </HeaderContainer>
    </>
  )
}

export default Header