import React from 'react';

import './guess-section.css';

export default function Guess() {
    return (
        <div className="guessSection">
            <form>
                <input type="text" className="guessInput" placeholder="Enter your Guess"></input>
                <button className="guessBtn">Guess</button>
                <p>Guess #<span id="count">0</span>!</p>
            </form>
        </div>
    );
}