import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { explore1Img, explore2Img, exploreVideo} from "../utils"
import { animateWithGsap } from '../utils/animations'

const Features = () => {
  const videoRef = useRef()
useGSAP(() => {
 animateWithGsap('#features_title', {
   opacity:1,
   y:0,
 })
 animateWithGsap('.g_grow', {
   scale: 1, opacity: 1, ease: 'power1',
 }, {scrub:5.5,})
 animateWithGsap(
  '.g_text',
  {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
)
  }, [])


  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden ">
      <div className='scrim-max-width'>
        <div className='mb-12 w-full'>
          <h1 id='features_title' className='section-heading'>Explore the full Story.</h1>
        </div>
        <div className='flex flex-col justify-center items-center overflow-hidden'>
          <div className='mt-32 mb-24 pl-24'>
            <h2 className='text-5xl lg:text-7xl'>Iphone</h2>
            <h2 className='text-5xl lg:text-7xl'>Forged in Titanium.</h2>
          </div>
          <div className='flex-center flex-col sm:p-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
            <video playsInline id="exploreVideo" 
            className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4"/>
              </video>
            </div>
            <div className='flex flex-col w-full relative'>
              <div className='feature-video-container'>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img src={explore1Img} alt="Titanium" className='feature-video g_grow' />
                </div>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img src={explore2Img} alt="Titanium 2" className='feature-video g_grow' />
                </div>
              </div>
              <div className='feature-text-container'>
                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    iPhone 15 pro is {''}
                    <span className='text-white'>the first iPhone to feature an aerospace grade titanium design </span>,
                    using the alloy that spacecrafts use for missions to mars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features