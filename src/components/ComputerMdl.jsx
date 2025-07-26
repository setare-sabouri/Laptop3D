import React, { use } from 'react'
import { Float, useGLTF,PresentationControls } from '@react-three/drei'


const ComputerMdl = () => {
  const Computer = useGLTF('./laptopModel.gltf')
  console.log(Computer)
  return (
    <>
      <PresentationControls global rotation={[0,-0.1,0]} polar={[-0.3,0.5]} azimuth={[-1.5,0.75]} damping={0.3} snap>
        <Float rotationIntensity={0.4}>
          <primitive
            object={Computer.scene}
            position-y={-1}
              />
        </Float>
      </PresentationControls>
    </>
  )
}

export default ComputerMdl
