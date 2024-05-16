import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Center,
  CameraControls,
  Html,
} from "@react-three/drei";
import { Model } from "@/components/Roomnew";
import TypingEffect from "@/components/TypingEffect";
import { useControls } from "leva";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as THREE from "three";

function Loading() {
  // Assume you have the necessary setup for useProgress
  return <div>Loading...</div>;
}

const CameraScene = () => {
  const { camera } = useThree();
  const camControls = useControls("Camera", {
    position: { value: [5.52, -1, 1.25], label: "Position" },
    rotation: { value: [0, 0, 0], label: "Rotation" },
  });

  useEffect(() => {
    camera.position.set(...camControls.position);
    camera.rotation.set(...camControls.rotation);
  }, [camera, camControls.position, camControls.rotation]);

  return (
    <PerspectiveCamera
      ref={camera}
      position={camControls.position}
      rotation={camControls.rotation}
      shadow={{
        bias: 0.001,
        near: 0.1,
        far: 1000,
        focus: 1,
        fov: 30,
      }}
      makeDefault
    />
  );
};

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const modelRef = useRef();
  const cameraRef = useRef();
  const mainRef = useRef();
  const tRef = useRef();

  const modControls = useControls("Model", {
    position: { value: [1, 1, 1], label: "Position" },
    rotation: { value: [0, 0, 0], label: "Rotation" },
  });

  const monControls = useControls("Monitor", {
    position: { value: [1.154, 1.709, -0.695], label: "Position" },
    rotation: { value: [1.558, 0.013, -3.11], label: "Rotation" },
  });
  // const camControls = useControls('Model', {
  //   position: { value: [1, 1, 1], label: 'Position' },
  //   rotation: { value: [0, 0, 0], label: 'Rotation' },
  // });

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const tl = gsap.timeline();
    tl.fromTo(
      modelRef.position,
      {
        x: 9,
      },
      {
        x: 7.5,
        y: 3.5,
        z: 2.8,
        duration: 1,
      }
    );

    tl.fromTo(
      cameraRef?.current?.position,
      {
        x: 9,
      },
      {
        x: 7.5,
        y: 3.5,
        z: 2.8,
        duration: 1,
      }
    );

    // Add your other animations with ScrollTrigger here
  }, [modelRef.position]);

  // Use GSAP for smooth updates
  // useFrame(() => {
  //   if (modelRef.current) {
  //     modelRef.current.position.x = gsap.getProperty(modelRef.current.position, 'x');
  //     modelRef.current.position.y = gsap.getProperty(modelRef.current.position, 'y');
  //     modelRef.current.position.z = gsap.getProperty(modelRef.current.position, 'z');
  //   }
  // });

  return (
    <div className="w-full h-screen relative">
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
        style={{
          visibility: isClicked ? "visible" : "hidden",
          position: "fixed",
        }}
        className="fixed -z-1 top-0 w-full pointer-events-none bg-transparent"
      >
        <Suspense fallback={null}>
          <CameraScene cameraRef={cameraRef} />
          <mesh
            ref={(el) => {
              modelRef.current = el;
            }}
            castShadow
            receiveShadow
            position={modControls.position}
            rotation={modControls.rotation}
          >
            <Center>
              <Model ref={modelRef} />
            </Center>
          </mesh>
          <OrbitControls enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas>

      {!isClicked && !loading && (
        <div className="w-full h-screen bg-black absolute z-[99999] top-0 left-0">
          <TypingEffect setIsClicked={setIsClicked} />
        </div>
      )}
      <main
        ref={mainRef}
        className="overflow-y-scroll overflow-x-hidden relative h-screen snap-mandatory snap-y"
      >
        <section
          ref={tRef}
          className="w-full h-screen snap-center flex justify-center items-center"
        >
          <Canvas
            camera={{ position: [0, 0, 20], fov: 70 }}
            className="fixed -z-1 top-0 w-full pointer-events-none bg-transparent"
          >
            <mesh
              position={monControls.position}
              rotation={monControls.rotation}
            >
              <Html
                className="w-[380px] scale-150 fixed h-[212px] bg-black text-white"
                style={{ transform: "rotateY(180deg)" }}
                distanceFactor={10}
                rotation-x={-Math.PI / 2}
                position={[0.0, -0.01, 0.0]}
                scale={0.7}
                transform
                fullscreen={false}
                occlude="blending"
                zIndexRange={99}
              >
                <div
                  className="w-[370px] h-[216px]"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <h1>Hello world</h1>
                </div>
              </Html>
            </mesh>
          </Canvas>
        </section>
      </main>
    </div>
  );
}
