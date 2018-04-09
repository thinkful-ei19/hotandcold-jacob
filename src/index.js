import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Feedback from './components/feedback';
import Guess from './components/guess-section';
import Guesslist from './components/guesslist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
<Header />
<h1>HOT or COLD</h1>
<Feedback />
<Guess />
<Guesslist />
</div>, document.getElementById('root'));
registerServiceWorker();
