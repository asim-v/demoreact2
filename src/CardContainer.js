import './App.css';
import { Card } from '@mui/material';

function CardContainer({ item }) {


    return (
        <div >
            <h1>{item.name}</h1>
            <p>Age: {item.age}</p>
            <p>City: {item.city}</p>
        </div>
    )
}

export default CardContainer;