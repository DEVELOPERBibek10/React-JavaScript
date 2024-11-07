import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(
    function () {
      let pass = "";
      let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let specialCharacters = "!@#$%^&*()_+{}[]|<>?/~`-";

      if (numAllowed) string += numbers;
      if (charAllowed) string += specialCharacters;

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * string.length);
        pass += string.charAt(char);
      }
      setPassword(pass);
    },
    [length, numAllowed, charAllowed, setPassword]
  );

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-2/5 mx-w-md mx-auto shadow-md rounded-xl px-4 my-8 text-orange-500 bg-gray-700">
        <h2 className="text-white text-center my-2 text-xl font-bold ">
          Password Generator
        </h2>
        <div className="flex shadow rounded-lg justify-center items-center gap-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full p-3 mb-4 rounded-lg"
            placeHolder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-sky-300 text-white p-3 mb-4 rounded-xl"
          >
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copy
            </div>
          </button>
        </div>
        <div className="flex text-sm gap-x-3 mb-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer mb-2"
              onChange={(event) => setLength(event.target.value)}
            />
            <label className="mb-2 font-semibold">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <label className="mb-2 font-semibold">Number :</label>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              className="mb-0.5 cursor-pointer"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
          </div>
          <div className="flex items-center gap-x-2">
            <label className="mb-2 font-semibold">Character :</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="mb-0.5 cursor-pointer"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
