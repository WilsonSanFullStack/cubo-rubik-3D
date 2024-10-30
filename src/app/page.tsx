import { styleText } from "util";

export default function Home() {
  const cubo = [
    {
      top: "w1",
      left: "",
      right: "g1",
      bottom: "",
      back: "",
      front: "r1",
    },
    {
      left: "",
      right: "",
      top: "w4",
      bottom: "",
      back: "",
      front: "r4",
    },
    // {
    //   left: "b7",
    //   right: "",
    //   top: "w7",
    //   bottom: "",
    //   back: "",
    //   front: "r7",
    // },
    // {
    //   left: "",
    //   right: "g2",
    //   top: "w2",
    //   bottom: "",
    //   back: "",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "",
    //   top: "w5",
    //   bottom: "",
    //   back: "",
    //   front: "",
    // },
    // {
    //   left: "b8",
    //   right: "",
    //   top: "w8",
    //   bottom: "",
    //   back: "",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "g3",
    //   top: "w3",
    //   bottom: "",
    //   back: "o3",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "",
    //   top: "w6",
    //   bottom: "",
    //   back: "o6",
    //   front: "",
    // },
    // {
    //   left: "b9",
    //   right: "",
    //   top: "w9",
    //   bottom: "",
    //   back: "o9",
    //   front: "",
    // },
    // {
    //   left: "b2",
    //   right: "",
    //   top: "",
    //   bottom: "",
    //   back: "o2",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "",
    //   top: "",
    //   bottom: "",
    //   back: "o5",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "g4",
    //   top: "",
    //   bottom: "",
    //   back: "o4",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "g5",
    //   top: "",
    //   bottom: "",
    //   back: "",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "g8",
    //   top: "",
    //   bottom: "",
    //   back: "",
    //   front: "r8",
    // },
    // {
    //   left: "",
    //   right: "",
    //   top: "",
    //   bottom: "",
    //   back: "",
    //   front: "r5",
    // },
    // {
    //   left: "b6",
    //   right: "",
    //   top: "",
    //   bottom: "",
    //   back: "",
    //   front: "r6",
    // },
    // {
    //   left: "b5",
    //   right: "",
    //   top: "",
    //   bottom: "",
    //   back: "",
    //   front: "",
    // },
    // {
    //   left: "b1",
    //   right: "",
    //   top: "",
    //   bottom: "y1",
    //   back: "o1",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "",
    //   top: "",
    //   bottom: "y8",
    //   back: "o8",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "g7",
    //   top: "",
    //   bottom: "y7",
    //   back: "o7",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "g6",
    //   top: "",
    //   bottom: "y6",
    //   back: "",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "g9",
    //   top: "",
    //   bottom: "y9",
    //   back: "",
    //   front: "r9",
    // },
    // {
    //   left: "",
    //   right: "",
    //   top: "",
    //   bottom: "y2",
    //   back: "",
    //   front: "r2",
    // },
    // {
    //   left: "b3",
    //   right: "",
    //   top: "",
    //   bottom: "y3",
    //   back: "",
    //   front: "r3",
    // },
    // {
    //   left: "b4",
    //   right: "",
    //   top: "",
    //   bottom: "y4",
    //   back: "",
    //   front: "",
    // },
    // {
    //   left: "",
    //   right: "",
    //   top: "",
    //   bottom: "y5",
    //   back: "",
    //   front: "",
    // },
  ];

  return (
    <main>
      <div
        className="scene bg-gray-600 min-h-screen flex justify-center items-center anchor"
        id="scene"
      >
        <div className="pivot centered otros" id="pivot">
          <div className="cube" id="cube">
            {cubo.map((x, index) => {
              const leftLetter = x.left ? x.left.charAt(0) : "";
              const rightLetter = x.right ? x.right.charAt(0) : "";
              const topLetter = x.top ? x.top.charAt(0) : "";
              const bottomLetter = x.bottom ? x.bottom.charAt(0) : "";
              const backLetter = x.back ? x.back.charAt(0) : "";
              const frontLetter = x.front ? x.front.charAt(0) : "";
              console.log(x, leftLetter, index);
              return (
                <div className="piece rotacion" key={index + 1}>
                  <div className="element  left">
                    <div
                      // className={`sticker  ${
                      //   leftLetter === "g"
                      //     ? "bg-green-500"
                      //     : leftLetter === "w"
                      //     ? "bg-white"
                      //     : leftLetter === "y"
                      //     ? "bg-yellow-500"
                      //     : leftLetter === "b"
                      //     ? "bg-blue-500"
                      //     : leftLetter === "r"
                      //     ? "bg-red-500"
                      //     : leftLetter === "o"
                      //     ? "bg-orange-500"
                      //     : "bg-gray-300"
                      // }`}
                      className={`sticker  ${
                        leftLetter === "g"
                          ? "green"
                          : leftLetter === "w"
                          ? "white"
                          : leftLetter === "y"
                          ? "yellow"
                          : leftLetter === "b"
                          ? "blue"
                          : leftLetter === "r"
                          ? "red"
                          : leftLetter === "o"
                          ? "orange"
                          : "bg-gray-300"
                      }`} style={{backgroundColor: ''}}
                    >
                      {x.left}
                    </div>
                  </div>

                  <div className={`element right}`}>
                    <div
                      // className={`sticker  ${
                      //   rightLetter === "g"
                      //     ? "bg-green-500"
                      //     : rightLetter === "w"
                      //     ? "bg-white"
                      //     : rightLetter === "y"
                      //     ? "bg-yellow-500"
                      //     : rightLetter === "b"
                      //     ? "bg-blue-500"
                      //     : rightLetter === "r"
                      //     ? "bg-red-500"
                      //     : rightLetter === "o"
                      //     ? "bg-orange-500"
                      //     : "bg-gray-300"
                      // }`}
                      className={`sticker  ${
                        rightLetter === "g"
                        ? "green"
                        : rightLetter === "w"
                        ? "white"
                        : rightLetter === "y"
                        ? "yellow"
                        : rightLetter === "b"
                        ? "blue"
                        : rightLetter === "r"
                        ? "red"
                        : rightLetter === "o"
                        ? "orange"
                        : "bg-gray-300"
                    }`}
                    >
                      {x.right}
                    </div>
                  </div>

                  <div className={`element top `}>
                    <div
                      // className={`sticker ${
                      //   topLetter === "g"
                      //     ? "bg-green-500"
                      //     : topLetter === "w"
                      //     ? "bg-white"
                      //     : topLetter === "y"
                      //     ? "bg-yellow-500"
                      //     : topLetter === "b"
                      //     ? "bg-blue-500"
                      //     : topLetter === "r"
                      //     ? "bg-red-500"
                      //     : topLetter === "o"
                      //     ? "bg-orange-500"
                      //     : "bg-gray-300"
                      // }`}
                      className={`sticker  ${
                        topLetter === "g"
                          ? "green"
                          : topLetter === "w"
                          ? "white"
                          : topLetter === "y"
                          ? "yellow"
                          : topLetter === "b"
                          ? "blue"
                          : topLetter === "r"
                          ? "red"
                          : topLetter === "o"
                          ? "orange"
                          : "bg-gray-300"
                      }`}
                      >{x.top}</div>
                  </div>

                  <div className={`element back  `}>
                    <div
                      // className={`sticker ${
                      //   backLetter === "g"
                      //     ? "bg-green-500"
                      //     : backLetter === "w"
                      //     ? "bg-white"
                      //     : backLetter === "y"
                      //     ? "bg-yellow-500"
                      //     : backLetter === "b"
                      //     ? "bg-blue-500"
                      //     : backLetter === "r"
                      //     ? "bg-red-500"
                      //     : backLetter === "o"
                      //     ? "bg-orange-500"
                      //     : "bg-gray-300"
                      // }`}
                      className={`sticker  ${
                        backLetter === "g"
                          ? "green"
                          : backLetter === "w"
                          ? "white"
                          : backLetter === "y"
                          ? "yellow"
                          : backLetter === "b"
                          ? "blue"
                          : backLetter === "r"
                          ? "red"
                          : backLetter === "o"
                          ? "orange"
                          : "bg-gray-300"
                      }`}
                    >
                      {x.back}
                    </div>
                  </div>

                  <div className={`element bottom  `}>
                    <div
                      // className={`sticker ${
                      //   bottomLetter === "g"
                      //     ? "bg-green-500"
                      //     : bottomLetter === "w"
                      //     ? "bg-white"
                      //     : bottomLetter === "y"
                      //     ? "bg-yellow-500"
                      //     : bottomLetter === "b"
                      //     ? "bg-blue-500"
                      //     : bottomLetter === "r"
                      //     ? "bg-red-500"
                      //     : bottomLetter === "o"
                      //     ? "bg-orange-500"
                      //     : "bg-gray-300"
                      // }`}
                      className={`sticker  ${
                        bottomLetter === "g"
                          ? "green"
                          : bottomLetter === "w"
                          ? "white"
                          : bottomLetter === "y"
                          ? "yellow"
                          : bottomLetter === "b"
                          ? "blue"
                          : bottomLetter === "r"
                          ? "red"
                          : bottomLetter === "o"
                          ? "orange"
                          : "bg-gray-300"
                      }`}
                    >
                      {x.bottom}
                    </div>
                  </div>

                  <div className={`element front  `}>
                    <div
                      // className={`sticker ${
                      //   frontLetter === "g"
                      //     ? "bg-green-500"
                      //     : frontLetter === "w"
                      //     ? "bg-white"
                      //     : frontLetter === "y"
                      //     ? "bg-yellow-500"
                      //     : frontLetter === "b"
                      //     ? "bg-blue-500"
                      //     : frontLetter === "r"
                      //     ? "bg-red-500"
                      //     : frontLetter === "o"
                      //     ? "bg-orange-500"
                      //     : "bg-gray-300"
                      // }`}
                      className={`sticker  ${
                        frontLetter === "g"
                          ? "green"
                          : frontLetter === "w"
                          ? "white"
                          : frontLetter === "y"
                          ? "yellow"
                          : frontLetter === "b"
                          ? "blue"
                          : frontLetter === "r"
                          ? "red"
                          : frontLetter === "o"
                          ? "orange"
                          : "bg-gray-300"
                      }`}
                    >
                      {x.front}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
