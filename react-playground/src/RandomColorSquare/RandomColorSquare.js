import { useState } from "react";

const colors = ['blue', 'yellow', 'green', 'black', 'pink', 'gray'];

export default function RandomColorSquare() {

    const [color, setColor] = useState('red')

    function changeColor() {
        return colors[Math.floor(Math.random() * 6)];
    }

    return <div style={{ height: '100px', width: '100px', backgroundColor: color }}
        onClick={() => setColor(prevColor => {
            return prevColor === 'red' ? changeColor() : 'red'
        })}>
    </div>

}