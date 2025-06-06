import { useState } from 'react'
import './App.css'
import InputBox from './component/Inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
//import { fetch } from 'whatwg-fetch' // Ensure fetch is available in all environments

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState('USD')
  const [to,setTo] = useState('INR')
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) || {}
  const option = Object.keys(currencyInfo)
  

  const swapCurrencies = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0) // Reset converted amount when swapping
    setAmount(convertedAmount) // Reset amount when swapping
  }

 const convert = () =>{
   setConvertedAmount(amount * currencyInfo[to])
 }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundColor: 'aqua',
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={option}
                                onAmountChnage={(amount) => setAmount(amount)}
                                onCurrencyChnage={(currency) => setAmount(amount)}
                                selectCurrency='from'
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapCurrencies}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={option}
                                onAmountChnage={(amount) => setConvertedAmount(amount)}
                                onCurrencyChnage={(currency) => setTo(currency)}
                                selectCurrency={from}
                                amountDisplay={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
