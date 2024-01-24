import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [covertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(covertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    setAmount('');
  };

  return (
    <>
      <div
        className="w-full h-screen "
        style={{
          background: `url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.9",
        }}
      >
        <div className="w-full  h-screen flex flex-wrap justify-center items-center">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
              
            >
              <div className="w-full mb-1">
                <InputBox 
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChnage={(currency)=> setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount)=> setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-teal-800 text-white px-2 py-0.5"
                onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                label="to"
                amount={covertedAmount}
                currencyOptions={options}
                onCurrencyChnage={(currency) => setTo(currency)}
                selectCurrency={to} 
                amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-900 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase} to {to.toUpperCase}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
