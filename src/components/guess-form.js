import React from 'react';

import './guess-form.css';

export default function GuessForm() {
    return (
        <div className="guessSection">
            <form>
                <input type="text" className="guessInput" placeholder="Enter your Guess"></input>
                <button className="guessBtn">Guess</button>
            </form>
        </div>
    );
}