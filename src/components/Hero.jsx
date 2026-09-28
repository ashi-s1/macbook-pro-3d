import { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 2

    const handleResume = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        video.play().catch(() => {})
      }
    }

    document.addEventListener('visibilitychange', handleResume)
    window.addEventListener('focus', handleResume)

    return () => {
      document.removeEventListener('visibilitychange', handleResume)
      window.removeEventListener('focus', handleResume)
    }
  }, [])

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />
      <button>Buy</button>
      <p>from $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero