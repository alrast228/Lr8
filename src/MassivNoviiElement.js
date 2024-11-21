import React, { useState } from 'react';

function MassivNoviiElement() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, `${prevItems.length + 1}`]);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </ul>
      <button onClick={addItem}>Добавить</button>
    </div>
  );
}

export default MassivNoviiElement;