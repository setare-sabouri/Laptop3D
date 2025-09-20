import { EffectComposer, Glitch } from '@react-three/postprocessing'
import {  GlitchMode  } from 'postprocessing'
import React from 'react'

const GlitchPipeLine = () => {
    return (
        <EffectComposer>
            <Glitch delay={[0.8, 0.9]} strength={[0.1,1]} duration={[0.3, 0.4]}  ratio={1} />
        </EffectComposer>
    )
}

export default GlitchPipeLine
