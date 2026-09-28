import { Suspense, useState, useEffect } from 'react'
import clsx from 'clsx'
import useMacbookStore from '../store'
import { Canvas } from '@react-three/fiber'
import StudioLights from './StudioLights'
import ModelSwitcher from "./three/ModelSwitcher.jsx"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 1024px)').matches : false
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1024px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore()
  const isMobile = useIsMobile()

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">
          {`MacBook Pro | Available in 14" & 16" in ${color === '#adb5bd' ? 'Silver' : 'Space Gray'}`}
        </p>
        <p className="text-[11px] text-neutral-400 mt-2 tracking-wide uppercase">
          Drag to rotate 360°
        </p>

        <div className="flex-center gap-5 mt-5">
          {/* Color Switcher */}
          <div className="color-control">
            <div
              onClick={() => setColor('#adb5bd')}
              className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
            />
            <div
              onClick={() => setColor('#2e2c2e')}
              className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
            />
          </div>

          {/* Size Switcher */}
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white'
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white'
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <StudioLights />
          <ModelSwitcher scale={scale} isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default ProductViewer