import React, { useState } from "react";
    
function Focus() {
  const [inputValue, setInputValue] = useState('');
  const [messagge, setMessagge]=useState('');

  const handleBlur = () => {
    setMessagge(`Вы ввели: ${inputValue}`)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (<div>
    <input type="text" value={inputValue} onChange={handleInputChange} onBlur={handleBlur} />
    <p>{messagge}</p>
    </div>
  );
}

export default Focus;