import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import {InputBox} from "./components/index";
function App() {
  const bgImageUrl = "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyData = useCurrencyInfo(from);
  const options = Object.keys(currencyData);

  const convert = () => {
    setConvertedAmount(Number((amount * currencyData[to]).toFixed(2)));
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
    setAmount(0);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage : `url(${bgImageUrl})`}}>
      <div className="w-full ">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-1">
              <InputBox 
              label="From"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(crr) => setFrom(crr)}
              onAmountChange={(amount) => setAmount(amount)}
              selectdCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 text-lg"
              onClick={swap}
              >swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox 
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(crr) => setTo(crr)}
              selectdCurrency={to}
              amountDisable
              />
            </div>
            <button 
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-lg"
            >
              Convert from {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
