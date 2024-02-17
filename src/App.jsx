import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);

  // const decrease = () => {
  //   if (number > 0) {
  //     setNumber(number - 1);
  //   }
  // };

  const increase = () => {
    if (number < 25) {
      setNumber(number + 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex  flex-col items-center  justify-center gap-2 bg-sky-300 p-3 border w-80 border-green-500 rounded-md">
        <div className="bg-gray-100 border border-gray-400 p-5  rounded-md ">
          <p>{number}/25</p>
        </div>

        <div className="flex gap-1">
          <div>
            <button
              onClick={() => {
                if (number > 0) {
                  setNumber(number - 1);
                }
              }}
              className="bg-orange-500 border border-orange-600 p-3 rounded-md  w-20 h-12 flex justify-center"
            >
              previous
            </button>
          </div>

          <div>
            <button
              onClick={increase}
              className="bg-green-500 border border-green-600 p-3 rounded-md w-20 h-12 flex justify-center"
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
