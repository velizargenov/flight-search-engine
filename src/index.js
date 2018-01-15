import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import FlightSearchEngineApp from './components/FlightSearchEngineApp/FlightSearchEngineApp';
import './index.css';

render(<FlightSearchEngineApp />, document.getElementById('root'));
registerServiceWorker();
