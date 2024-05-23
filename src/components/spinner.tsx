import { useEffect } from 'react'
import gsap from "gsap"

const Spinner = () => {

    useEffect(()=>{
        gsap.fromTo("#spinner",
        {
            rotateZ: "0deg"
        },
        {
            duration: 2,
            rotateZ: "360deg",
            repeat:-1,
        })
    })

  return (
    <div id='spinner'>

    </div>
  )
}

export {Spinner}