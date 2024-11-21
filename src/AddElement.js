import React, { useState } from 'react';

function AddElement() {
  const [item, setItems] = useState([]);
  const addItem = () => {
    setItems(prevItems => [...prevItems,`Депрессия ${prevItems.length + 1}`]);
  };

  return (
    <div>
        <p>Сколько депрессий сегодня?</p>
      <button onClick={addItem}>Добавить депрессию</button>   
      <ul>
        {item.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddElement;