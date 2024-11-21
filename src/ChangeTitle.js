import React, { useState } from "react";

function ChangeTitle() {
    const [text, setText]=useState("Алё");
    function ReverseTitle() {
        if (text=="Алё") {setText("Привет")}
        else {setText("Алё")}
    }
    return (
        <div>
            <h2>Лабораторная работа №7</h2>
            <h3>{text}</h3>
            <button onClick={ReverseTitle}>Нажми меня</button>
        </div>
    )
}
export default ChangeTitle;