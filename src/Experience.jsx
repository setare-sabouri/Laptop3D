import { ContactShadows, Environment } from '@react-three/drei'
import ComputerMdl from './components/ComputerMdl'

export default function Experience() {
    return <>
        <color args={['#241a1a']} attach="background" />
        <Environment preset='city' />
        <ComputerMdl />
        <ContactShadows position={[0, -0.3, 0]} scale={6} opacity={0.8} color={"#000000"} blur={1.5} />

    </>
}

