import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
import "./styles.css";

export default function App() {
  console.log("App");
  const [num, setNum] = useState(0);
  const [isShowFace, setisShowFace] = useState(true);
  const onClickCountUp = () => {
    setNum((aa) => aa + 1);
  };
  const onClickToggle = () => {
    setisShowFace(!isShowFace);
  }

  if (num % 3 === 0) {
    setisShowFace(true);
  } else {
    setisShowFace(false);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      <ColorfulMessage color="red">あお元気ですか</ColorfulMessage>
      <ColorfulMessage color="blue">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>😆</p>}
    </div>
  );
}
