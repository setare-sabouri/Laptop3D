import { ContactShadows, Environment } from '@react-three/drei'
import ComputerMdl from './components/ComputerMdl'

export default function Experience() {
    return <>
        <color args={['#241a1a']} attach="background" />
        <Environment preset='city' />

        <ComputerMdl />
        
        <ContactShadows position={[0, -1.3, 0]} scale={6} opacity={0.7} color={"#000000"} blur={2} />

    </>
}

