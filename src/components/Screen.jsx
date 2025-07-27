import { Html } from '@react-three/drei'
import React, { useState, useRef } from 'react'
import './../style.css'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import HackerScreen from './Game/HackerScreen'

const Screen = () => {
  const [hovered, setHovered] = useState(false)
  const { camera } = useThree()

  const defaultPos = new THREE.Vector3(-2, 1.7, 5)
  const zoomedPos = new THREE.Vector3(0, 1.6, 1.7)

  const currentLookAt = useRef(new THREE.Vector3(1, 1.5, -1.4)) // start with default
  const targetLookAt = useRef(new THREE.Vector3(1, 1.5, -1.4))   // will change on hover

  useFrame(() => {
    const targetPos = hovered ? zoomedPos : defaultPos
    const lookAtTarget = hovered ? new THREE.Vector3(0, 1.5, -1.4) : new THREE.Vector3(1.4, 1.5, -1.4)

    // Smooth camera position
    camera.position.lerp(targetPos, 0.05)

    // Smooth lookAt target
    currentLookAt.current.lerp(lookAtTarget, 0.05)
    camera.lookAt(currentLookAt.current)
  })

  return (
    <Html
      transform
      wrapperClass='screen'
      distanceFactor={1.17}
      position={[0, 1.56, -1.4]}
      rotation-x={-0.256}
    >
      <div
        className='screenPlayer'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <HackerScreen />
      </div>
    </Html>

  )
}

export default Screen
