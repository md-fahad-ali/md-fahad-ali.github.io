import React, { useEffect, useState } from "react";

let isComplete = false;

export function ProgressBar(props) {
  const [loadingText, setLoadingText] = useState("");
  const [remainText, setRemainText] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      var minus = "██████████████████████";
      var text = "░░░░░░░░░░░░░░░░░░░░░░";
      setLoadingText(text.substring((20/(100/props.range)), 19));
      setRemainText(minus.substring(-1, (20/(100/props.range))));
    };

    fetchData();
  }, [props.range]);

  // You can use the loadingComplete state in your component logic
  if (loadingComplete) {
    // Do something when loading is complete
    console.log("Loading is complete!");
  }

  return (
    <div>
      <p>
        {remainText}
        {loadingText}
      </p>
    </div>
  );
}
