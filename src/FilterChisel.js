import React from "react";

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0).map(num => <p key={num}>{num}</p>);
 function FilterChisel()
  {
      return <p>{evenNumbers}</p>;
  } 

export default FilterChisel;