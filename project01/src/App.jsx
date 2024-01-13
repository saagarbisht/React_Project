import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordReference = useRef(null);

  const generatePassword = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let num = "0123456789";
      let char = "!@#$&-_~"
      if(numAllowed){
        str += num;
      }
      if(charAllowed){
        str+= char;
      }

      for(let i = 0; i < length; i++){
        pass += str[Math.floor(Math.random() * str.length)];
      }

      setPassword(pass)
    },
    [length,numAllowed,charAllowed],
  )

    const copyPassword = () => {
      window.navigator.clipboard.writeText(password)
      passwordReference.current?.select()
    }

    const nextPassword = () => {
      generatePassword()
    }

    useEffect(() => {
      generatePassword()
    },[length,numAllowed,charAllowed])
    
    
  return (
    <div className="w-full max-w-sm mx-auto shadow-lg rounded-lg px-4 py-3 my-8 bg-white text-sky-500">

      <h1 className="text-2xl font-bold text-sky-700 text-center my-3">Passwod Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input type="text" value={password} ref={passwordReference} className="outline-none w-full py-1 px-3 border-2 border-sky-700 rounded-lg rounded-r-none text-black" placeholder="password" readOnly />
        <button className="outline-none bg-sky-700 text-white px-3 py-0.5 shrink-0 " onClick={copyPassword}>copy</button>

      </div>
      <div className="flex flex-col justify-center items-center text-lg font-semibold gap-3 text-black">

        <div className="flex items-center gap-x-1">  
          <input type="range" min={4} max={24} value={length} onChange={(e) => {setLength(e.target.value)}} id="length" className="bg-black"/>
          <label htmlFor="length">length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">  
          <label htmlFor="numAllowed"> isNumberAllowed : </label>
          <input type="checkbox" defaultChecked={numAllowed} onChange={(e) => {setNumAllowed((prev) => !prev)}} id="numAllowed"/>
        </div>
        <div className="flex items-center gap-x-1">  
          <label htmlFor="charAllowed"> isCharacterAllowed : </label>
          <input type="checkbox" defaultChecked={charAllowed} onChange={(e) => {setCharAllowed((prev) => !prev)}} id="charAllowed"/>
        </div>
        <div className="flex items-center gap-x-1">  
          <button className="outline-none bg-sky-700 text-white px-3 py-0.5 rounded-lg" onClick={nextPassword}>next</button>
        </div>

      </div>

    </div>
  )
}

export default App
