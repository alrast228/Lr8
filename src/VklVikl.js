import React, { useState } from "react";

function VklVikl() {
    const [text, setText]=useState("Вкл");
    function ReverseText() {
        if (text=="Вкл") {setText("Выкл")}
        else {setText("Вкл")}
    }
    return (
        <div>
            <button onClick={ReverseText}>Включить/Выключить</button>
            <p>{text}</p>
        </div>
    )
}
export default VklVikl;