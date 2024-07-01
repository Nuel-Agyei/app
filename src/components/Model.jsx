import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Model = () => {

    useGSAP(() => {
        gsap.to('#heading', {
             y:0, 
             opacity: 1,
        })
    }, [])
  return (
    <section className='common-padding'>
        <div className='scrim-max-width'>
            <h1 id='heading' className='section-heading'>Take a closer look.</h1>

            <div className='flex flex-col items-center mt-5'>
                <div className='w-full'><h1 className="mt-2">YO BRO</h1></div>
            </div>
        </div>
    </section>
  )
}

export default Model