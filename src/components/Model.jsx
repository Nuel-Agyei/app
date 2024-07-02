import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import ModelView from './ModelView'
import * as Three from 'three'
import { View } from '@react-three/drei'
import { yellowImg } from '../utils'
import { Canvas } from '@react-three/fiber'
import { models } from "../constants"


const Model = () => {
    const [size, setsize] = useState('small');
    const [model, setModel] = useState({
        title: 'iPhone 15 pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    })

    //camera control for model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();


    //models
    const small = useRef(new Three.Group());
    const large = useRef(new Three.Group());

    //rotation value
    const [smallRotation, setSmallRotation] = useState(0)
    const [largeRotation, setLargeRotation] = useState(0)
     

    useGSAP(() => {
        gsap.to('#heading', {
             y: 2, 
             opacity: 1,
        })
    }, [])
  return (
    <section className='common-padding'>
        <div className='scrim-max-width'>
            <h1 id='heading' className='section-heading opacity-0'>Take a closer look.</h1>

            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                    <ModelView
                    index={1}
                    groupRef={small}
                    gsapType="view1"
                    controlRef={cameraControlSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={size}
                    />

                    <ModelView
                    index={2}
                    groupRef={large}
                    gsapType="view2"
                    controlRef={cameraControlLarge }
                    setRotationState={setLargeRotation}
                    item={model}
                    size={size}
                    />
                    <Canvas className='w-full h-full' style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow: 'hidden'
                    }}
                     eventSource={document.getElementById('root')}>
                        <View.Port />
                    </Canvas>
                </div>
                <div className='mx-auto w-full'>
                    <p className='text-sm font-light text-center mb-5'>{model.title}</p>
                    <div className='flex-center'>
                        <ul className='color-container'>
                             {models.map((item, i) =>(
                                <li key={i} className='w-6 h-6 rounded-full mx-2 cursor-pointer' style={{
                                    backgroundColor:item.color[0]}} onClick={() => setModel=(item)}/>
                             ))}
                        </ul>
                        <button className=' '>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model