import React from 'react';

import './guess-section.css';
import GuessCount from './guess-count';
import GuessForm from './guess-form';

export default function GuessSection() {
    return (
        <div className="guessSection">
            <GuessForm />
            <GuessCount />
        </div>
    );
}
//<p>Guess #<span id="count">0</span>!</p>