import React, { useState } from "react";

const items = [
  { name: "Элемент 1" },
  { name: "Элемент 2" },
  { name: "Элемент 3" },
];

function ChangeColorMassiv() {
  const [noUserColors, setNoUserColors] = useState(null);

  const handleMouseEnter = (index) => {
    setNoUserColors(index);
  };

  const handleMouseLeave = () => {
    setNoUserColors(null);
  };

  return (
    <div>
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li
          style={{padding:10, color: noUserColors === index ? "blue" : "black" }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {item.name}
        </li>
      ))}
    </ul>
    <p style={{fontSize:12}}>Источник: https://translated.turbopages.org/proxy_u/en-ru.ru.0f2c5975-673f7b47-20f807d0-74722d776562/https/stackoverflow.com/questions/77545046/all-react-list-items-change-color-when-one-is-hovered-why-not-just-the-one</p>
    </div>
  );
}

export default ChangeColorMassiv;