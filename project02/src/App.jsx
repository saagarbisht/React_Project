import { useState } from "react"

function App() {
  const [bgColor, setBgColor] = useState("Chocolate")
  const colorList = ["Crimson", "Teal", "Chartreuse"]
  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor : bgColor}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colorList.map((color) => 
          <button 
          className="outline-none px-4 py-1 rounded-full  shadow-lg text-white" 
          style={{backgroundColor : color}} 
          key={color} onClick={() => setBgColor(color)}>
            {color}
          </button>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
