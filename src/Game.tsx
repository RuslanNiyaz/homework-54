import {useState} from 'react';
import {GameCell} from './types';
import './Game.css';

const createGameCells = () => {
    const gameCells: GameCell[] = [];
    for (let i = 0; i < 36; i++) {
        const item: GameCell = {hasItem: false, clicked: false};
        gameCells.push(item);
    }

    const randomIndex = Math.floor(Math.random() * gameCells.length);
    gameCells[randomIndex].hasItem = true;

    return gameCells;
};

const Game = () => {
    const  [cells, setCells] = useState(createGameCells());
    const onCellClick = (index: number) => {
        setCells( (prevState) => {
            return prevState.map((cell, i) => {
                if (i === index) {
                    return {...cell, clicked: true};
                }
                return cell;
            });
        });
    };

    return (
        <div className='game-grid'>
            {cells.map((cell, index) => (
                <div
                    key={index}
                    className='game-cell'
                    style={{background: cell.clicked ? 'white' : undefined}}
                    onClick={() => onCellClick(index)}
                />
            ))}
        </div>
    );
};

export default Game;