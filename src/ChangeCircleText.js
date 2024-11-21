import React, { useState } from "react";

function ChangeCircleText() {
    const [text, setText]=useState("Старт");
    function ReverseText() {
        if (text=="Старт") {setText("Стоп")}
        else if (text=="Стоп") {setText("Перезагрузка")}
        else {setText("Старт")}
    }
    return (
        <div>
            <button onClick={ReverseText}>Нажми меня</button>
            <p>{text}</p>
        </div>
    )
}
export default ChangeCircleText;