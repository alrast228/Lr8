import {useState} from 'react'; 
 
 function ChangeColor() { 
  const [isActive, setIsActive] = useState(false); 
 
  const handleClick = () => { 
    setIsActive(current => !current); 
  }; 
 
  return ( 
    <div> 
      <button style={{ backgroundColor: isActive ? 'orange' : '',}} onClick={handleClick}>Поменять цвет</button> 
    </div> 
  ); 
} 
 
export default ChangeColor;