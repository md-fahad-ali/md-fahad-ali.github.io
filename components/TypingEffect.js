import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ProgressBar } from "./ProgressBar";
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
          await new Promise((resolve) => setTimeout(resolve, 5)); // Reduced delay for faster loading
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
    <div className={" p-10 sm:p-20"}>
      <TypeAnimation
        style={{
          whiteSpace: "pre-line",
          fontWeight: "bold",
          fontFamily: vt323.style.fontFamily,
          color: "white",
          display: "block",
          fontSize: "1.5em",
        }}
        sequence={[
          `Hello, I am Md.Fahad Ali \n I am a Full stack developer`,
          100, // Slowed typing speed for slower typing
          () => {
            setTypingStatus(true);
          },
          100, // Slowed typing speed for slower typing
        ]}
        repeat={false}
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
            animation: cursor 0.5s infinite step-start; // Increased cursor speed for faster typing
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
            fontWeight: "bold",
            fontFamily: vt323.style.fontFamily,
            color: "white",
            display: "block",
            paddingBottom: "10px",
            fontSize: "1.5em",
          }}
          sequence={[
            `I am From Bangladesh.I have an year of experience in developing Web Applications.`,
            100, // Slowed typing speed for slower typing
            () => {
              setTypingStatus2(true);
            },
            100, // Slowed typing speed for slower typing
          ]}
          repeat={false}
          wrapper="span"
          className={`type`}
          cursor={true}
          speed={100} // Increased typing speed
        />
      )}
      <style global jsx>
        {`
          .type::after {
            content: "|";
            color: white;
            display: ${typingStatus ? "none" : ""};
            animation: cursor 0.5s infinite step-start; // Increased cursor speed for faster typing
          }
          @keyframes cursor {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
      {typingStatus2 && (
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            height: "100px",
            fontFamily: vt323.style.fontFamily,
            color: "white",
            display: "block",
            fontSize: "1.5em",
            marginTop: "30px",
          }}
          sequence={[
            `\n Hey wanted to know more about me`,
            500, // Reduced delay for faster typing
            () => {
              setTypingStatus3(true);
            },
            500, // Reduced delay for faster typing
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
            animation: cursor 0.5s infinite step-start; // Increased cursor speed for faster typing
          }
          @keyframes cursor {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>

      <div>
        {typingStatus3 && (
          <div className="text-white flex content-center justify-center">
            <br />
            <div>
              {loading ? (
                <div
                  className={
                    "border border-white p-5 flex justify-center flex-col w-[70vmin] sm:w-[max(20vmax,25vmax)]"
                  }
                >
                  <h1 style={{ fontFamily: vt323.style.fontFamily }}>
                    Press Enter
                  </h1>
                  <br />
                  <button
                    className="text-white border px-5 py-2"
                    onClick={() => {
                      props?.setIsClicked(true);
                      props?.openAnimation();
                    }}
                  >
                    Enter
                  </button>
                </div>
              ) : (
                <div className={""}>
                  Loading Environment: <ProgressBar range={index} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingEffect;
