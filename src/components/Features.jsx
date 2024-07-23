import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { animateWithGsap } from '../utils/animations'

const Features = () => {
useGSAP(() => {
 animateWithGsap('#features_title', {
   opacity:1,
   y:0,
 })
  }, [])
}

  return (
    <secction className="h-full common-padding bg-zinc relative overflow-hidden ">
      <div className='scrim-max-width'>
        <div className='mb-12 w-full'>
          <h1 id='features_title' className='section-heading'>Explore the full Story.</h1>
        </div>
      </div>
    </secction>
  )


export default Features