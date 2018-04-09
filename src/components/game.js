import React from 'react';

import './game.css';
import Feedback from './feedback';
import GuessSection from './guess-section';
import GuessList from './guesslist';

export default function Game() {
    return (<div className="gamebox">
        <Feedback />
        <GuessSection />
        <GuessList />
    </div>);
}