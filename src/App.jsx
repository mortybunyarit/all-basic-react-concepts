import { useState } from "react";

function App() {
  const [translate, setTranslate] = useState("Greeting Message");

  return (
    <div>
      <div>
        <p>{translate}</p>
      </div>
      <div>
        <button onClick={() => setTranslate("สวัสดี")}>สวัสดี!</button>
      </div>
      <div>
        <button onClick={() => setTranslate("Hi!")}>Hi!</button>
      </div>
      <div>
        <button onClick={() => setTranslate("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
