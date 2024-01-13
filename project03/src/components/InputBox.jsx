import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption,
    selectdCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const id = useId()
    return (
        <div className = {`bg-white p-3 rounded-lg text-lg flex${className}`}>
            <div className='w-1/2'>
                <label htmlFor={id} className='text-black mb-2 inline-block'>{label}</label>
                <input 
                id={id}
                type="number" 
                className=' outline-none w-full bg-transparent py-1.5' 
                placeholder='Amount' 
                disabled = {amountDisable} 
                value={amount}
                onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black mb-2 w-full'>Currency Type</p>
                <select
                className='rounded-lg px-1 bg-gray-100 cursor-pointer outline-none text-black'
                value={selectdCurrency}
                onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
                disabled = {currencyDisable}
                >
                    {currencyOption.map((curr) => (
                        <option value = {curr} key={curr}>{curr}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox