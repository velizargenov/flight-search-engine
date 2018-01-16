import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import FlightSearchEngineApp from './components/FlightSearchEngineApp/FlightSearchEngineApp';
import './index.css';
import flights from './data';

render(<FlightSearchEngineApp flights={flights} />, document.getElementById('root'));
registerServiceWorker();
