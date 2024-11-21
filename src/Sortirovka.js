import React from 'react';

const bukvi = ['а','в', 'у', 'г', 'б'];

function Sortirovka() {
  return (
    <div>
      {[...bukvi]
        .sort((a, b) => a.localeCompare(b))
        .map((bukva) => (
          <div key={bukva}>
            <p>{bukva}</p>
          </div>
        ))}
    </div>
  );
}

export default Sortirovka;