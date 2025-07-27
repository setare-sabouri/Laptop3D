import React from 'react'
import { Float, useGLTF, PresentationControls } from '@react-three/drei'
import Screen from './Screen'
import TextDisplay from './TextDisplay'

const ComputerMdl = () => {
  const Computer = useGLTF('./laptopModel.gltf')
  
  return (
    <>
      <PresentationControls global  polar={[-0.3, 0.5]} azimuth={[-1.5, 0.75]} damping={0.3} snap position={[0,2,0]}>
        <Float rotationIntensity={0.4}>
          <primitive object={Computer.scene} position={[0,0,0]}>
            <Screen/>
          </primitive>
          <TextDisplay/>
          <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#ff4d00ff'}rotation={[- 0.1, Math.PI, 0]} position={[0, 0.55, - 1.15]} />
        </Float>
      </PresentationControls>
    </>
  )
}

export default ComputerMdl
