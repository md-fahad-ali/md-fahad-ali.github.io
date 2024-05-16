// import * as THREE from 'three'
// import { createRoot } from 'react-dom/client'
// import React, { useEffect, useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { getProject, val } from '@theatre/core'
// import studio from '@theatre/studio'
// import r3fExtension from '@theatre/r3f/dist/extension'
// import { editable as e, SheetProvider, useCurrentSheet } from '@theatre/r3f'
// import { PerspectiveCamera } from '@theatre/r3f'
// import projectState from './animations/cube2.json'
// import { ScrollControls, useScroll } from '@react-three/drei'
// import { Model } from '@/components/Roomx'
// import Image from 'next/image'

// studio.initialize()
// studio.extend(r3fExtension)
// // const sheet = getProject('Project').sheet('Sheet')
// const sheet = getProject('Sheet_cube', { state: projectState }).sheet('Sheet_cube')
// // const project = getProject('Cube', { state: projectState })
// // const sheet = project.sheet('scene')




// const Make = () => {

//   const [open, setOpen] = useState(false);
//   const [mdata, setMdata] = useState([]);

//   function openModal() {
//     setOpen(true)
//   }

//   useEffect(() => {
//     sheet.project.ready.then(() => sheet.sequence.play({ iterationCount: Infinity, range: [0, 3] }))
//   }, [])



//   return (
//     <div className='h-[100vh] w-full'>
//       <Canvas>
//         <SheetProvider sheet={sheet}>
//           <ScrollControls pages={3} damping={0.5}>
//             <PerspectiveCamera
//               // ref={camera}
//               theatreKey="Camera"
//               position={[8.8, -0.2, 0.6]}
//               rotation={[0, 0, 0]}
//               shadow={{
//                 bias: 0.001,
//                 near: 0.1,
//                 far: 1000,
//                 focus: 1,
//                 fov: 30,
//               }}
//               // rotateY={10}
//               makeDefault
//             />
//             <ambientLight />
//             <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
//             <e.mesh theatreKey="Cube">
//               <Model />
//             </e.mesh>
//           </ScrollControls>

//         </SheetProvider>
//       </Canvas>
      

//       <div className={`backdrop-blur-[30px] ${open ? 'flex' : 'hidden'} top-0 left-0 w-screen justify-center items-center fixed h-screen z-[9999999]`}>
//         <button className='text-black bg-white p-3 absolute right-7 top-5' onClick={() => {
//           setOpen(false)
//         }}>✖</button>
//         <div className=' bg-slate-800 p-5 font-bold text-white h-auto w-[50%] rounded-3xl'>
//           <h1 className=' text-3xl'>{mdata?.name}</h1>
//           <br />
//           <div className='flex justify-center w-full'>
//             <Image
//               src={mdata?.image}
//               alt={mdata?.name}
//               className={` rounded-lg `}
//               width={700}
//               height={700}
//             />
//           </div>
//           <br />
//           <div className=' px-10'>
//             <h3 className='text-2xl'>Description</h3>
//             <p className=' font-normal'>{mdata?.description}</p>
//             <br />
//             <p>Tags</p>

//             <div className='flex gap-3'>
//               {mdata?.tags?.map((el, i) => (
//                 <div key={i}>
//                   <p className='font-normal'>#{el}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Make

import React from 'react'

function Make () {
  return (
    <div>Make</div>
  )
}

export default Make