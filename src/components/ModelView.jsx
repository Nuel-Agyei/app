import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './IPhone'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
  // useGSAP(()=>{
  //   gsap.to('#viewbox', {
  //     ease: 'bounce.in',
  //     borderRadius: '100%',
  //     yoyo: true,
  //   })
  // }, [])
  return (
    <div>
      <View index={index}
        id={gsapType}
        className={`w-full h-full ${index === 2} ? 'right-[-100%] : ''`}>
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]}/>

            <Lights />
            <OrbitControls
              makeDefault
              // ref={ }
            />

            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
            <Suspense fallback={<html><div>loading...</div></html>}>
            {/* <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
              /> */}
            </Suspense>
            </group>
            
        </View>
    </div>
        
  )
}

export default ModelView