
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const useMediaQuery = (queryOptions) => {
  const query = typeof queryOptions === 'string' ? queryOptions : queryOptions?.query
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' && query ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    if (!query) return
    const mq = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])

  return matches
}

const Showcase = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const videoRef = useRef(null)

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
        },
      })

      timeline
        .to('.mask img', {
          transform: 'scale(1.1)',
        })
        .to('.content', { opacity: 1, y: 0, ease: 'power1.in' })
    }
  }, [isTablet])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="showcase">
      <div className="media">
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}videos/game.mp4`}
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className="mask">
          <img src={`${import.meta.env.BASE_URL}mask-logo.svg`}  />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="space-y-5 mt-7 pe-0 lg:pe-10">
              <p>
                Introducing{" "}
                <span className='text-white'>
         m4, the next genetration of Apple silicon
                </span>
             .m4 powers
              </p>
              <p>
                It drives Apple Intelligence on ipad Pro, so you can write,create,and accomplish more with ease.All in a design that's unbellievably thin,light,and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision color accuracy,and brightness And a next-gen GPU with hardware-accelarated ray tracing brings console-level graphics to your fingertips
              </p>
              <p className='text-primary'>Learn more about Apple Intelligence</p>
            </div>
          </div>
<div className="max-w-3xs space-y-14">
<div className='space-y-2'>
  <p>Up to</p>
  <h3>4x faster</h3>
  <p>pro rendering performance than M2</p>
</div>
<div className='space-y-2'>
  <p>Up to</p>
  <h3>1.5x faster</h3>
  <p>CPU performance than M2</p>
</div>

</div>

        </div>
      </div>
    </section>
  )
}

export default Showcase