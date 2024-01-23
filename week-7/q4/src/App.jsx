import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import LoremIpsum from "react-lorem-ipsum";

function App() {
  const inputRef = useRef();
  const [para, setPara] = useState(0);
  return (
    <div className="m-5">
      <div className="grid grid-rows-4 grid-cols-5 justify-items-center">
        <h1 className="row-span-2 col-span-5 font-bold text-3xl">
          Para Generator
        </h1>
        <input
          className="row-span-1 col-span-4 border border-gray-400 rounded p-1 w-full"
          type="text"
          placeholder="Enter Number"
          ref={inputRef}
        />
        <button
          onClick={() => {
            setPara(inputRef.current.value);
          }}
          className="row-span-1 col-span-1 bg-black text-white p-2 rounded"
        >
          Generate
        </button>
      </div>
      <div className="grid gap-4">
        <LoremIpsum p={para} />
      </div>
    </div>
  );
}

export default App;
