import React, { useState } from "react";

function MassivStrok() {
    const items = ['ура', 'снова', 'лаба', '))))0)'];
    const listItems = [];
    for (let i = 0; i < items.length; i++) {
      listItems.push(<li key={i}>{items[i]}</li>);
    }
  
    return <p>{listItems}</p>;
  }

 export default MassivStrok;