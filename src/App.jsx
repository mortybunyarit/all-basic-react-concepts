import { useState } from "react";
const App = () => {
  const [countPlus, setCountPlus] = useState(0);
  const [countMinus, setCountMinus] = useState(2);
  const [countMultiply, setCountMultiply] = useState(5);
  const [countDevide, setCountDevide] = useState(100);

  return (
    <div className="flex gap-2 ">
      <div className="border border-green-500 p-3 w-[150px]  flex  flex-col items-center">
        <button
          onClick={() => setCountPlus(countPlus + 1)}
          className=" bg-red-500 border border-red-700 p-3"
        >
          add
        </button>
        <p>counter1</p>
        <p>{countPlus}</p>
      </div>
      <div className="border border-yellow-500 p-3 w-[150px]">
        <button
          onClick={() => setCountMinus(countMinus - 1)}
          className=" bg-blue-500 border border-blue-700 p-3"
        >
          minus
        </button>
        <p>counter2</p>
        <p>{countMinus}</p>
      </div>
      <div className="border border-purple-500 p-3 w-[150px]">
        <button
          onClick={() => setCountMultiply(countMultiply * 2)}
          className="bg-green-500 border border-green-500 p-3"
        >
          multiply
        </button>
        <p>counter3</p>
        <p>{countMultiply}</p>
      </div>
      <div className="border border-red-500 p-3 w-[150px]">
        <button
          onClick={() => setCountDevide(countDevide / 5)}
          className="bg-orange-500 border border-orange-500 p-3"
        >
          devide
        </button>
        <p>counter4</p>
        <p>{countDevide}</p>
      </div>
    </div>
  );
};

export default App;
