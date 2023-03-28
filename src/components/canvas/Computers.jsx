import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'
import ComputerCanvas from './ComputersCanvas'

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor = "black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize = {1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.68}
        position={isMobile ? [-1,-2, -1] : [0, -2.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

export default Computers