import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-5 top-10">
        05
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-xl gap-4">
          <button
            onClick={() => setColor("red")}
            className=" outline-none border-none bg-red-600 text-white py-3 px-5 rounded-xl "
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" outline-none border-none bg-blue-600 text-white py-3 px-5 rounded-xl "
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className=" outline-none border-none bg-green-500 text-white py-3 px-5 rounded-xl "
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className=" outline-none border-none bg-yellow-400 text-white py-3 px-5 rounded-xl "
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("black")}
            className=" outline-none border-none bg-black text-white py-3 px-5 rounded-xl"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
