import React, { useState } from "react";
    
function TextComp() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (<div>
    <input type="text" value={inputValue} onChange={handleInputChange} />
    <p>{inputValue}</p>
    </div>
  );
}

export default TextComp;