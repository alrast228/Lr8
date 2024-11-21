import React, { useState } from "react";
    
function SummaIzFormi() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange = (event) => {
    setInputValue(+event.target.value);
  }
  const handleInputChange2 = (event2) => {
    setInputValue2(+event2.target.value);
  }


  return (
    <div>
    <p>Введите первое число:</p>
    <input type="number" value={inputValue} onChange={handleInputChange} />
    <p>Введите второе число</p>
    <input type="number" value={inputValue2} onChange={handleInputChange2} />
    <p>result: {inputValue + inputValue2}</p>
    </div>
  );
}

export default SummaIzFormi;