import React from "react";

function SelectMassiv() {
  const items = ['ура', 'снова', 'лаба', '))))0)'];

  return (
    <select>
      {items.map((item) => (
        <option>
          {item}
        </option>
      ))}
    </select>
  );
}

export default SelectMassiv;