import './App.css';
import CardContainer from './CardContainer';
import React, { useEffect, useState } from 'react';

function Board() {

    const [data, setData] = useState([]);
    const [numero, setNumero] = useState(0);

    function acciones() {
        setNumero(numero + 1);
        setData([...data, { name: 'John', age: 25, city: 'New York' }]);
    }

    return (
        <div className='board'>
            <h1>{numero}</h1>
            <button onClick={acciones}>Increment</button>
            <button onClick={() => setData([...data, { name: 'John', age: 25, city: 'New York' }])}>Add</button>
            {data.map((item) => (
                <CardContainer item={item} />
            ))}
        </div>
    )
}

export default Board;