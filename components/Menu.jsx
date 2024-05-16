import Image from "next/image";
import React, { useEffect, useRef } from "react";
// import { Home } from '@/components/Home';
import styles from "@/styles/Project.module.css";
import { Slider } from "@lifarl/react-scroll-snap-slider";
import projects from "../pages/projects/data.json";

function Menu(props) {
  

  const { setOpen, setMdata, mdata } = props;

  // console.log("from menu", setOpen);

  // useEffect(() => {
  //   // console.log(menuRef?.current?.scrollLeft);
  //   // menuRef?.current?.scrollLeft = 30;
  // }, []);

  return (
    <div className="h-auto bg-slate-800 px-2 py-5">
      <div className="w-full">
        <h1 className="text-white font-bold text-3xl text-center">Projects</h1>

        <br />
        <Slider className={"fixed"}>
          {projects.map((el, i) => (
            <div key={i} className="overflow-hidden">
              <Image
                src={el.image}
                alt={el.name}
                loading="eager"
                priority
                onClick={() => {
                  // console.log(el);
                  // console.log(setOpen);
                  setOpen(true);
                  setMdata(el);

                  // console.log(props);
                }}
                
                className={`h-[200px] rounded-lg ${styles.project}`}
                width={300}
                height={300}
              />
              <p className="text-slate-400">{el.name}</p>
            </div>
          ))}
        </Slider>
        
        <p className="relative top-5 bg-slate-600 rounded-full text-slate-400 text-center">{"Click > next or swap Left/Right"}</p>
      </div>
    </div>
  );
}

export default Menu;
