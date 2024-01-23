import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const rootElement = document.getElementById('root');

// If using React 18 and later
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
