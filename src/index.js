import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Game from './components/game'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
<Header />
<h1>HOT or COLD</h1>
<Game />
</div>, document.getElementById('root'));
registerServiceWorker();
