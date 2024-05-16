import React, { useEffect, useState } from "react";

function AnimatedMouse() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    const customCursor = document.querySelector("#custom-cursor");
    const anotherCursor = document.querySelector("#custom-cursor");

    const updateCursorPosition = (event) => {
      setTimeout(() => {
        customCursor.style.top = `${event.clientY - 20}px`;
        customCursor.style.left = `${event.clientX - 30}px`;
      }, 100);
    };
    const anotherCursorUpdate = (e) => {
      anotherCursor.style.top = `${e.clientY}px`;
      anotherCursor.style.left = `${e.clientX}px`;
    };
    window.addEventListener("mousemove", (event) => {
      updateCursorPosition(event);
    //   anotherCursorUpdate(event);
    });
  }, []);

  return (
    <div>
      
      <div id="custom-cursor"></div>
    </div>
  );
}

export default AnimatedMouse;
