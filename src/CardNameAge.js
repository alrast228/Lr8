import React from "react";

const people = [
  { id: 1, name: 'Саша', age: 21 },
  { id: 2, name: 'Даша))', age: 21 },
];

function CardNameAge() {
  return (
    <div>
      {people.map(person => (
        <div key={person.id} style={{ border: "1px solid #000", margin: "10px", padding: "10px", borderRadius: "5px", width: "20%", margin: "5px auto", }}>
          <h3>{person.name}</h3>
          <p>Возраст: {person.age}</p>
        </div>
      ))}
    </div>
  );
}

export default CardNameAge;