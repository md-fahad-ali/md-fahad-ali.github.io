// import React, { Suspense } from 'react'
// import { Model } from '@/components/Roomx';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls, Center, CameraControls, ScrollControls, Scroll, Html, useScroll, PerspectiveCamera } from '@react-three/drei';
// import * as THREE from "three";

// function Loading() {
//     const { progress } = useProgress();

//     // Determine if loading is complete
//     const isLoadingComplete = progress < 100;

//     return (
//         <div className={`w-full h-screen flex items-center justify-center bg-black absolute z-[999] ${isLoadingComplete ? '' : 'hidden'}`}>
//             <p>{progress} Loading...</p>
//         </div>
//     );
// }

// function Data() {
//     const [isClicked, setIsClicked] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 2000);
//         // demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 6] }))
//     }, [])
//     return (
//         <div>
//             <div className="w-full h-screen relative">
//                 <Canvas
//                     gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
//                     onCreated={({ gl }) => {
//                         gl.toneMapping = THREE.ACESFilmicToneMapping;
//                         gl.outputEncoding = THREE.sRGBEncoding;
//                     }}
//                     className={`fixed top-0 w-full pointer-events-none bg-transparent canvasStyle`}
//                 >


//                     <Suspense fallback={null}>
//                         {/* <CameraScene cameraRef={cameraRef} /> */}

//                         <PerspectiveCamera
//                             // ref={camera}
//                             theatreKey="Camera"
//                             position={[5.5, -0.3, 1.3]}
//                             rotation={[0, 0, 0]}
//                             shadow={{
//                                 bias: 0.001,
//                                 near: 0.1,
//                                 far: 1000,
//                                 focus: 1,
//                                 fov: 30,
//                             }}
//                             makeDefault
//                         />


//                         <mesh
//                             theatreKey="Cube"
//                             // ref={(el) => {
//                             //   modelRef.current = el;
//                             //   setModRef(el);
//                             // }}
//                             castShadow
//                             receiveShadow
//                             position={[7.5, 1.4, 3.0]}
//                             rotation={[0, 0, 0]}
//                         >
//                             <Center>
//                                 <Model />
//                             </Center>
//                         </mesh>

//                         <OrbitControls enableZoom={true} enableRotate={true} />

//                     </Suspense>

//                 </Canvas>


//             </div>
//         </div>
//     )
// }

// export default Data
import React from 'react'

function Data() {
    return (
        <div>Data</div>
    )
}

export default Data