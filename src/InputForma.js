import React, { useState } from "react";
    
function InputForma() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleInputChange2 = (event2) => {
    setInputValue2(event2.target.value);
  }

  return (
    <div>
    <p>Введите Имя:</p>
    <input type="text" value={inputValue} onChange={handleInputChange} />
    <p>{inputValue}</p>
    <p>Введите Моральное Состояние</p>
    <input type="text" value={inputValue2} onChange={handleInputChange2} />
    <p>{inputValue2}</p>
    </div>
  );
}

export default InputForma;