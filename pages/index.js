import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Model } from "@/components/Roomnew";

import TypingEffect from "@/components/TypingEffect";
import { useControls } from "leva";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as THREE from "three";
import { getProject } from "@theatre/core";

// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from "@theatre/r3f";
import { PerspectiveCamera } from "@theatre/r3f";
import demoProjectState from "./animations/state.json";
import demoState from "./animations/cube2.json";
import Image from "next/image";
import Mytag from "@/components/Headers";
import Lottie from "lottie-react";
import animation from "../pages/projects/animation.json";
import Link from "next/link";

// import styles from "@/styles/Project.module.css";

// const CameraScene = (props) => {

//   // const cameraRef = useRef();
//   const { cameraRef } = props;
//   const { cameraRotationX, cameraRotationY, cameraRotationZ } = useControls({
//     cameraRotationX: 0,
//     cameraRotationY: 0,
//     cameraRotationZ: 0,
//   });

//   const camControls = useControls('Camera', {
//     position: { value: [8.8, -0.2, 0.6], label: 'Position' },
//   });

//   useFrame(() => {
//     // Update the camera's rotation based on Leva controls
//     cameraRef.current.rotation.set(cameraRotationX, cameraRotationY, cameraRotationZ);
//   });

//   return (
//     <PerspectiveCamera
//       position={camControls.position}
//       theatreKey="Camera"
//       target={[2, 10, 0]}
//       ref={(el) => {
//         // setTestRef(el);
//         cameraRef.current = el;
//       }}
//       shadow={{
//         bias: 0.001,
//         near: 0.1,
//         far: 1000,
//         focus: 1,
//         fov: 30,
//       }}
//       rotateY={10}

//       // up={[0, cameraConfig.up, 0]}
//       makeDefault
//     />
//   );
// };

// function Loading() {
//   const { progress } = useProgress();

//   // Determine if loading is complete
//   const isLoadingComplete = progress < 100;

//   return (
//     <div className={`w-full h-screen flex items-center justify-center bg-black absolute z-[999] ${isLoadingComplete ? '' : 'hidden'}`}>
//       <p>{progress} Loading...</p>
//     </div>
//   );
// }

function CheckScorlling(props) {
  const data = useScroll();

  useFrame(() => {
    props?.setIsShow(data.offset);
  });
  return <mesh {...props} />;
}

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  const modelRef = useRef();

  const [changeState, setChangeState] = useState();
  const [device, setDevice] = useState(false);

  const [isShow, setIsShow] = useState();
  // if (process.env.NODE_ENV === 'development') {
  //   studio.initialize()
  //   studio.extend(extension)
  // }

  useEffect(() => {
    if (isShow) {
      // console.log("hi");
      setShow(true);
    } else {
      // console.log("no scrolling");
      setShow(false);
    }
  }, [isShow]);

  const [open, setOpen] = useState(false);
  const [mdata, setMdata] = useState([]);

  function openModal() {
    setOpen(true);
  }

  // console.log(mdata);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 1025) {
        setDevice(true);
        setChangeState(demoProjectState);
      } else {
        setDevice(false);
        setChangeState(demoState);
      }
    };
    if (window.innerWidth < 1025) {
      setDevice(true);
      setChangeState(demoProjectState);
    } else {
      setDevice(false);
      setChangeState(demoState);
    }
    isClicked &&
      setTimeout(() => {
        // console.log("i am back");
      }, 1500);

    // console.log(isShow);
  }, [isClicked, isShow]);

  const demoSheet = getProject("Mobile_Demo", {
    state: demoProjectState,
  }).sheet("Mobile_Demo");
  const demoSheet2 = getProject("Large_demo", { state: demoState }).sheet(
    "Large_demo"
  );

  const [modRef, setModRef] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 6] }))
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Add your other animations with ScrollTrigger here
  }, [modRef, modelRef.position]);

  // Use GSAP for smooth updates

  function openAnimation() {
    const tl = gsap.timeline();

    tl.fromTo(
      modRef?.position,
      {
        z: 1,
      },
      {
        z: 0,

        duration: 1,
      }
    );
  }

  return (
    <div className="w-full h-screen relative">
      <div>
        <Mytag />
      </div>

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
        className={`fixed top-0 w-full pointer-events-none bg-transparent canvasStyle`}
        // onScroll={() => { console.log("hi") }}
      >
        <Suspense
          fallback={
            <Html>
              <p>Loading...</p>
            </Html>
          }
        >
          {device ? (
            <SheetProvider sheet={demoSheet}>
              <ScrollControls pages={3} damping={0.5}>
                <CheckScorlling setIsShow={setIsShow} isShow={isShow} />
                <PerspectiveCamera
                  // ref={camera}
                  theatreKey="Camera"
                  position={[1.27, 1.75, 1.1]}
                  rotation={[0, 0, 0]}
                  shadow={{
                    bias: 0.001,
                    near: 0.1,
                    far: 1000,
                    focus: 1,
                    fov: 30,
                  }}
                  // rotateY={10}
                  makeDefault
                />
                <ambientLight />
                <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
                <e.mesh ref={(el) => setModRef(el)} theatreKey="Cube">
                  <Model
                    setOpen={setOpen}
                    openModal={openModal}
                    mdata={mdata}
                    setMdata={setMdata}
                  />
                </e.mesh>
              </ScrollControls>
            </SheetProvider>
          ) : (
            <SheetProvider sheet={demoSheet2}>
              <ScrollControls pages={3} damping={0.5}>
                <CheckScorlling setIsShow={setIsShow} isShow={isShow} />
                <PerspectiveCamera
                  // ref={camera}
                  theatreKey="Camera"
                  position={[1.27, 1.75, 1.1]}
                  rotation={[0, 0, 0]}
                  shadow={{
                    bias: 0.001,
                    near: 0.1,
                    far: 1000,
                    focus: 1,
                    fov: 30,
                  }}
                  // rotateY={10}
                  makeDefault
                />
                <ambientLight />
                <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
                <e.mesh ref={(el) => setModRef(el)} theatreKey="Cube">
                  <Model
                    setOpen={setOpen}
                    openModal={openModal}
                    mdata={mdata}
                    setMdata={setMdata}
                  />
                </e.mesh>
              </ScrollControls>
            </SheetProvider>
          )}
        </Suspense>
      </Canvas>

      <div
        className=" absolute left-[33vw] sm:left-[45vw] flex items-center gap-3 p-3 rounded-full text-white bottom-[3vw]"
        style={{
          background: "#000000db",
          visibility: isClicked && !show ? "visible" : "hidden",
          position: "fixed",
        }}
      >
        <Lottie animationData={animation} className="w-[30px]" loop={true} />
        <p> Scroll down </p>
      </div>

      <h1>Best developer in Bangladesh</h1>
      <h1>Best web developer in Bangladesh..</h1>
      <h1>Best Full developer in Bangladesh</h1>
      <h1>Leading web development company in Bangladesh</h1>
      <h1>Experienced full-stack developer in Bangladesh </h1>
      <h1>Bangladeshi software development experts</h1>
      <h1>Best IT services in Bangladesh</h1>
      <h1>Affordable web development in Bangladesh</h1>
      <h1>Hire Bangladeshi developers for your project</h1>
      <h1>Top-rated full-stack developers in Bangladesh</h1>
      <h1>Professional website development in Bangladesh</h1>

      {!isClicked && !loading && (
        <div className="w-full h-screen bg-black absolute z-[999999999] top-0 left-0">
          <TypingEffect
            setIsClicked={setIsClicked}
            openAnimation={openAnimation}
          />
        </div>
      )}

      <div
        className={`backdrop-blur-[30px] ${
          open ? "flex" : "hidden"
        } top-0 left-0 w-screen justify-center items-center fixed h-screen z-[9999999]`}
      >
        <button
          className="text-black bg-white p-3 absolute right-7 top-5"
          onClick={() => {
            setOpen(false);
          }}
        >
          ✖
        </button>
        <div
          className="sm:w-auto bg-slate-800 p-5 font-bold text-white h-auto w-[50%] rounded-3xl"
          style={{ width: "auto" }}
        >
          <h1 className=" text-3xl">{mdata?.name}</h1>
          <br />
          <div className="flex justify-center w-full">
            <Image
              src={mdata?.image}
              alt={mdata?.name}
              className={` rounded-lg `}
              width={700}
              height={700}
              priority
              loading="eager"
            />
          </div>
          <br />
          <div className=" px-10">
            <h3 className="text-2xl">Description</h3>
            <p className=" font-normal">{mdata?.description}</p>
            <br />
            <Link className=" relative bottom-[10px]" href={`${mdata?.link}`}>
              {mdata?.link}
            </Link>
            <br />

            <p>Tags</p>

            <div className="flex flex-wrap gap-3">
              {mdata?.tags?.map((el, i) => (
                <div key={i}>
                  <p className="font-normal">#{el}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
