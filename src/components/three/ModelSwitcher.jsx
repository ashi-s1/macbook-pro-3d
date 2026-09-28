import { useRef } from "react"
import { PresentationControls } from "@react-three/drei"
import MacBookModel14 from "../models/macbook-14"
import MacBookModel16 from "../models/macbook-16"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;
  if (opacity > 0) group.visible = true;
  group.traverse((child) => {
    if (child.isMesh && child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((mat) => {
        mat.transparent = true;
        gsap.to(mat, {
          opacity,
          duration: ANIMATION_DURATION,
          onComplete: () => {
            if (opacity === 0 && group) group.visible = false;
          }
        });
      });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacbookRef = useRef()
  const largeMacbookRef = useRef()

  const showLargeMacbook = scale === 0.08 || scale === 0.05

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);
      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);
      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale])

  const controlsConfig = {
    global: true,
    snap: false,
    speed: isMobile ? 2.5 : 1.5,
    zoom: 1,
    polar: [-Math.PI / 6, Math.PI / 4],
    azimuth: [-Infinity, Infinity],
    damping: 0.15,
  }

  return (
    <PresentationControls {...controlsConfig}>
      <group ref={largeMacbookRef}>
        <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
      </group>
      <group ref={smallMacbookRef}>
        <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
      </group>
    </PresentationControls>
  )
}

export default ModelSwitcher
