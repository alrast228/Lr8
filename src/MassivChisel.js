import React, { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.map(num => <li key={num}>{num}</li>);
 function MassivChisel()
 {
	 return <p>{evenNumbers}</p>;
 } 

 export default MassivChisel;