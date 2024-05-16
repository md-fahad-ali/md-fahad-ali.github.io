import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ProgressBar } from "./ProgressBar";

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
          await new Promise((resolve) => setTimeout(resolve, 50));
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
          fontFamily: "monospace",
          color: "white",
          display: "block",
          fontSize: "1.5em",
        }}
        sequence={[
          `Hello, I am Md.Fahad Ali \n I am a Full stack developer`,
          10,
          () => {
            setTypingStatus(true);
          },
          10,
        ]}
        repeat={false}
        wrapper="span"
        className={`type`}
        cursor={true}
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
            fontWeight: "bold",
            fontFamily: "monospace",
            color: "white",
            display: "block",
            paddingBottom: "10px",
            fontSize: "1.5em",
          }}
          sequence={[
            `I am From Bangladesh.I have an year of experience in developing Web Applications.`,
            10,
            () => {
              setTypingStatus2(true);
            },
            10,
          ]}
          repeat={false}
          wrapper="span"
          className={`type`}
          cursor={true}
        />
      )}
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
      {typingStatus2 && (
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            height: "100px",
            fontFamily: "monospace",
            color: "white",
            display: "block",
            fontSize: "1.5em",
            marginTop: "30px",
          }}
          sequence={[
            `\n Hey wanted to know more about me`,
            1000,
            () => {
              setTypingStatus3(true);
            },
            1000,
          ]}
          repeat={false}
          wrapper="span"
          className="type2"
          cursor={true}
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
                  <h1 style={{ fontFamily: "monospace" }}>Press Enter</h1>
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
