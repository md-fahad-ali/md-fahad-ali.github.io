import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

const TypingEffect = (props) => {
  const [typingStatus, setTypingStatus] = useState(false);
  const [typingStatus2, setTypingStatus2] = useState(false);
  const [typingStatus3, setTypingStatus3] = useState(false);

  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchLoading() {
      try {
        for (let i = 0; i < 100; i++) {
          setIndex(i);
          await new Promise((resolve) => setTimeout(resolve, 10));
        }
        console.log("Loading complete!");
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    typingStatus2 ? fetchLoading() : "";
  }, [typingStatus, typingStatus2]);
  // console.log(typingStatus);

  return (
    <div className={" p-9"}>
      <TypeAnimation
        style={{
          whiteSpace: "none",
          fontWeight: "bold",
          fontFamily: vt323.style.fontFamily,
          color: "white",
          display: "block",
          fontSize: "0.5em",
        }}
        sequence={[
          `Hello, I am Md.Fahad Ali \n I am a Full stack developer`,
          1000,
          () => {
            setTypingStatus(true);
          },
          1000,
        ]}
        wrapper="span"
        className={`type`}
        cursor={true}
        speed={100} // Increased typing speed
      />
      <style global jsx>
        {`
          .type::after {
            content: "|";
            color: white;
            display: ${typingStatus ? "none" : ""};
            animation: cursor 1.1s infinite step-start;
          }
          @keyframes cursor {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
      {typingStatus && (
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            height: "100px",
            fontFamily: vt323.style.fontFamily,
            color: "white",
            display: "block",
            fontSize: "0.5em",
          }}
          sequence={[
            ` Hey wanted to know more about me`,
            1000,
            () => {
              setTypingStatus2(true);
            },
            1000,
          ]}
          repeat={false}
          wrapper="span"
          className="type2"
          cursor={true}
          speed={100} // Increased typing speed
        />
      )}
      <style global jsx>
        {`
          .type2::after {
            content: "|";
            color: white;
            animation: cursor 1.1s infinite step-start;
          }
          @keyframes cursor {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>

      <div>
        {typingStatus2 && (
          <div className="text-white flex content-center justify-center">
            <br />
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingEffect;
