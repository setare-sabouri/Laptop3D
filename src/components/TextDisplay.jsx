import { Text } from '@react-three/drei'
import React from 'react'

const TextDisplay = () => {
    return (
        <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.9}
            position={[2.5, 1.9, 0.75]}
            rotation-y={- 1.25}
            maxWidth={ 2 }
        >

            Hack to Play
        </Text>

    )
}

export default TextDisplay
